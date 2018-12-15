<template>
  <section class="section">
    <h2 class="title has-text-centered">Blog</h2>
    <div class="columns is-multiline">
      <Article
        v-for="article in articles"
        :key="article.id"
        :article="article"/>
    </div>
    <PoweredByGraphCms/>
  </section>
</template>

<script>
import articlesGql from '~/apollo/queries/index/articles.gql'
import Article from './Article'
import PoweredByGraphCms from '~/components/PoweredByGraphCms'

export default {
  apollo: {
    articles: {
      query: articlesGql
    }
  },
  components: {
    Article,
    PoweredByGraphCms
  }
}
</script>
