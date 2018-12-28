<template>
  <section class="section">
    <h2 class="title has-text-centered">Graph</h2>
    <div class="has-text-centered">
      <iframe
        class="hatenablogcard"
        style="width:100%;height:155px;margin:15px 0;max-width:680px;"
        title="Raspberry Pi のCPU温度をfirebaseの Cloud Firestore に記録してVue.jsでグラフ表示する - kojimainjp’s blog"
        src="https://hatenablog-parts.com/embed?url=https://kojimainjp.hatenablog.com/entry/2018/12/26/202942"
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
import firebase from 'firebase/app'
import 'firebase/firestore'
import VueC3 from 'vue-c3'
import 'c3/c3.min.css'

// firebase
firebase.initializeApp({
  projectId: 'portfolio-6edac'
})
const firestore = firebase.firestore()
firestore.settings({ timestampsInSnapshots: true })

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
      await firestore
        .collection('rasp_temperatures')
        .orderBy('sentAt', 'asc')
        .limit(12)
        .get()
        .then(querySnapshot => {
          this.temperatures = querySnapshot.docs.map(doc => {
            const data = doc.data()
            return {
              value: data.value,
              sentAt: data.sentAt.toDate()
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
                return t.sentAt
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
