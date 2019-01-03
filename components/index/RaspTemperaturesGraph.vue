<template>
  <section class="section">
    <h2 class="title has-text-centered">Graph</h2>
    <div class="has-text-centered">
      <iframe
        class="hatenablogcard"
        style="width:100%;height:155px;margin:15px 0;max-width:680px;"
        title="やっぱりfirebaseじゃなくてGoogleスプレッドシートにRaspberry Pi のCPU温度を収集してVue.jsでグラフ表示する - kojimainjp’s blog"
        src="https://hatenablog-parts.com/embed?url=https://kojimainjp.hatenablog.com/entry/2019/01/02/115501"
        frameborder="0"
        scrolling="no"/>
    </div>
    <div class="columns is-centered">
      <div class="column is-6 box">
        <div>
          <LineChart
            :chart-data="chartData"
            :options="chartOptions"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import VueCharts from 'vue-chartjs'

const LineChart = {
  extends: VueCharts.Line,
  mixins: [VueCharts.mixins.reactiveProp],
  props: {
    chartData: {
      type: Object,
      default() {}
    },
    options: {
      type: Object,
      default() {}
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}

export default {
  components: {
    LineChart
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: []
      },
      chartOptions: {}
    }
  },
  mounted() {
    this.getChartData()
  },
  methods: {
    async getChartData() {
      await axios
        .get(
          'https://sheets.googleapis.com/v4/spreadsheets/' +
            `${process.env.SPREADSHEET_ID}` +
            '/values/Sheet1!A:B?key=' +
            `${process.env.SPREADSHEET_API_KEY}`
        )
        .then(response => {
          const dataValues = response.data.values
          this.chartData = {
            labels: dataValues.map(dataValue => {
              const date = new Date(dataValue[0])
              return date.toLocaleString()
            }),
            datasets: [
              {
                label: '温度(℃)',
                borderColor: 'lightblue',
                fill: false,
                data: dataValues.map(dataValue => {
                  return dataValue[1]
                })
              }
            ]
          }
        })
    }
  }
}
</script>
