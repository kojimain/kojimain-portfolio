<template>
  <div>
    <Articles/>
    <BbsThreads/>
  </div>
</template>

<script>
import Articles from '~/components/index/Articles'
import BbsThreads from '~/components/index/BbsThreads'

export default {
  components: {
    Articles,
    BbsThreads
  }
}
</script>
