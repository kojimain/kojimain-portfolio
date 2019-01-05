<template>
  <section class="section">
    <h2 class="title has-text-centered">BBS</h2>
    <Loading v-if="loading"/>
    <div class="columns is-multiline">
      <BbsThread
        v-for="bbsThread in bbsThreads"
        :key="bbsThread.id"
        :bbs-thread="bbsThread"/>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import Loading from '~/components/Loading'
import BbsThread from './BbsThread'

export default {
  components: {
    Loading,
    BbsThread
  },
  data() {
    return {
      loading: true,
      bbsThreads: []
    }
  },
  mounted() {
    axios
      .get(process.env.SIMPLEBBS_APP_ENDPOINT + '/api/bbs_threads.json')
      .then(response => {
        this.bbsThreads = response.data
      })
      .then(response => {
        this.loading = false
      })
  }
}
</script>
