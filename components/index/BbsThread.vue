<template>
  <div class="column is-narrow">
    <article class="card is-shady">
      <a href="#">
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
    }
  }
}
</script>
