<template>
  <div class="column is-4">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h3>{{ title }}</h3>
          <div
            class="content"
            v-html="body"/>
          <!-- images // -->
          <div class="content">
            <div class="columns is-mobile is-multiline is-vcentered">
              <div
                v-for="image in images"
                :key="image.id"
                class="column is-narrow">
                <img
                  :src="image.url"
                  width="48">
              </div>
            </div>
          </div>
          <!-- // images -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  props: {
    skillCard: {
      type: Object,
      default() {}
    }
  },
  computed: {
    title() {
      return this.skillCard.title
    },
    body() {
      // Markdownの文字列をHTMLに変換
      return marked(`${this.skillCard.body}`)
    },
    images() {
      return this.skillCard.images
    }
  }
}
</script>
