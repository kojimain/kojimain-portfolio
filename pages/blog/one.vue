<template>
  <section class="section">
    <h2 class="title has-text-centered">Blog</h2>
    <Article :article="article"/>
    <PoweredByGraphCms/>
  </section>
</template>

<script>
import articleGql from '~/apollo/queries/blog/one/article.gql'
import Article from '~/components/blog/one/Article.vue'
import PoweredByGraphCms from '~/components/PoweredByGraphCms.vue'

export default {
  apollo: {
    article: {
      query: articleGql,
      variables() {
        return {
          id: this.$route.query.id
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
