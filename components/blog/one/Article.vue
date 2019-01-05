<template>
  <div
    v-if="article"
    class="card">
    <div
      v-if="image_url"
      class="card-image">
      <figure class="image is-4by3">
        <img :src="image_url">
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <h4>{{ title }}</h4>
        <p v-html="body"/>
        <div class="has-text-right">
          {{ createdAt }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default() {}
    }
  },
  computed: {
    id() {
      return this.article.id
    },
    image_url() {
      return this.article.image ? this.article.image.url : null
    },
    title() {
      return this.article.title
    },
    body() {
      // ・Markdownの文字列をHTMLに変換
      var marked = require('marked')
      return marked(this.article.body)
    },
    createdAt() {
      var date = new Date(Date.parse(this.article.createdAt))
      return date.toLocaleString()
    }
  }
}
</script>
