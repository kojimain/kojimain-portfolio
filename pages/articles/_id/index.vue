<template>
  <section class="section">
    <h2 class="title has-text-centered">Blog</h2>
    <Article :article="article"/>
    <PoweredByGraphCms/>
  </section>
</template>

<script>
import articleGql from '~/apollo/queries/articles/_id/article.gql'
import Article from '~/components/articles/_id/Article.vue'
import PoweredByGraphCms from '~/components/PoweredByGraphCms.vue'

export default {
  apollo: {
    article: {
      query: articleGql,
      variables() {
        return {
          id: this.$route.params.id
        }
      }
    }
  },
  components: {
    Article,
    PoweredByGraphCms
  }
}
</script>
