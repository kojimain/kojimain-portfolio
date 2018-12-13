<template>
  <div class="column is-4">
    <article class="card is-shady">
      <router-link :to="{ name: 'articles-id', params: { id: id } }">
        <div
          v-if="image_url"
          class="card-image">
          <figure class="image is-4by3">
            <img :src="image_url">
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <h3>{{ title }}</h3>
            <p>
              {{ body }}
            </p>
            <div>
              {{ createdAt }}
            </div>
          </div>
        </div>
      </router-link>
    </article>
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
      return !!this.article.image ? this.article.image.url : null
    },
    title() {
      return this.article.title
    },
    body() {
      // ・Markdownの文字列をHTMLに変換
      // ・HTMLタグを除去
      // ・30文字以内に省略
      function truncate(str, len = 30) {
        return str.length <= len ? str : str.substr(0, len) + '...'
      }
      var marked = require('marked')
      return truncate(marked(this.article.body).replace(/<(?:.|\n)*?>/gm, ''))
    },
    createdAt() {
      var date = new Date(Date.parse(this.article.createdAt))
      return date.toLocaleString()
    }
  }
}
</script>
