<template>
  <div>
    <div class="section">
      <div class="container">
        <Summary/>
        <SkillSheet/>
      </div>
    </div>
  </div>
</template>

<script>
import Summary from '~/components/about/Summary'
import SkillSheet from '~/components/about/SkillSheet'

export default {
  components: {
    Summary,
    SkillSheet
  }
}
</script>
