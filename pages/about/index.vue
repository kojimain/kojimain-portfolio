<template>
  <div>
    <div class="section">
      <div class="container">
        <Summary/>
        <SkillCards
          :skill-cards="skillCards"/>
      </div>
    </div>
  </div>
</template>

<script>
import Summary from '~/components/about/Summary'
import SkillCards from '~/components/about/SkillCards'
import skillCardsGql from '~/apollo/queries/about/skillCards.gql'

export default {
  components: {
    Summary,
    SkillCards
  },
  asyncData(context) {
    const apolloClient = context.app.apolloProvider.defaultClient
    return apolloClient
      .query({
        query: skillCardsGql
      })
      .then(result => {
        return {
          skillCards: result.data.skillCards
        }
      })
  },
  data() {
    return {
      skillCards: []
    }
  }
}
</script>
