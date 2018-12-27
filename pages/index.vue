<template>
  <div>
    <Articles/>
    <BbsThreads/>
    <RaspTemperaturesGraph/>
  </div>
</template>

<script>
import Articles from '~/components/index/Articles'
import BbsThreads from '~/components/index/BbsThreads'
import RaspTemperaturesGraph from '~/components/index/RaspTemperaturesGraph'

export default {
  components: {
    Articles,
    BbsThreads,
    RaspTemperaturesGraph
  }
}
</script>
