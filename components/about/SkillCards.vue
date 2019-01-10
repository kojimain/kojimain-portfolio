<template>
  <section class="section">
    <h2 class="subtitle">スキルセット</h2>
    <div class="columns is-multiline">
      <SkillCard
        v-for="skillCard in skillCards"
        :key="skillCard.id"
        :skill-card="skillCard"/>
    </div>
    <PoweredByGraphCms/>
  </section>
</template>

<script>
import SkillCard from './SkillCard'
import PoweredByGraphCms from '~/components/PoweredByGraphCms'

export default {
  components: {
    SkillCard,
    PoweredByGraphCms
  },
  props: {
    skillCards: {
      type: Array[Object],
      default() {}
    }
  }
}
</script>
