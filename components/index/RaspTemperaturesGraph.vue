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
          <vue-c3 :handler="handler"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueC3 from 'vue-c3'
import 'c3/c3.min.css'

export default {
  components: {
    VueC3
  },
  data() {
    return {
      temperatures: [],
      handler: new Vue()
    }
  },
  mounted() {
    this.initGraph()
  },
  methods: {
    async getTemperatures() {
      await axios
        .get(
          'https://sheets.googleapis.com/v4/spreadsheets/' +
            `${process.env.SPREADSHEET_ID}` +
            '/values/Sheet1!A:B?key=' +
            `${process.env.SPREADSHEET_API_KEY}`
        )
        .then(response => {
          this.temperatures = response.data.values.map(dataValue => {
            return {
              timestamp: new Date(dataValue[0]),
              value: dataValue[1]
            }
          })
        })
    },
    async initGraph() {
      await this.getTemperatures()
      const options = {
        data: {
          x: 'x',
          columns: [
            ['x'].concat(
              this.temperatures.map(t => {
                return t.timestamp
              })
            ),
            ['温度(℃)'].concat(
              this.temperatures.map(t => {
                return t.value
              })
            )
          ]
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: '%Y-%m-%d %H:%M',
              count: 2,
              culling: {
                max: 2
              },
              rotate: -60
            }
          }
        },
        size: {
          height: 300
        }
      }
      this.handler.$emit('init', options)
    }
  }
}
</script>
