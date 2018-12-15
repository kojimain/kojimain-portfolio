<template>
  <section class="section">
    <h2 class="title has-text-centered">BBS</h2>
    <div class="columns is-multiline">
      <BbsThread
        v-for="bbsThread in bbsThreads"
        :key="bbsThread.id"
        :bbs-thread="bbsThread"/>
    </div>
  </section>
</template>

<script>
import BbsThread from './BbsThread'

export default {
  components: {
    BbsThread
  },
  data() {
    return {
      bbsThreads: [
        {
          id: 1,
          title: 'スレッドタイトルsample1'
        },
        {
          id: 2,
          title: 'スレッドタイトルsample2'
        }
      ]
    }
  }
}
</script>
