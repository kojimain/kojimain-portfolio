<template>
  <div class="column is-narrow">
    <article class="card is-shady">
      <a
        :href="url"
        target="_blank"
        rel="noopener">
        <div class="card-content">
          <div class="content">
            <h3>{{ title }}</h3>
          </div>
        </div>
      </a>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    bbsThread: {
      type: Object,
      default() {}
    }
  },
  computed: {
    title() {
      return this.bbsThread.title
    },
    url() {
      return this.bbsThread.url
    }
  }
}
</script>
