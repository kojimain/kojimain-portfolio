<template>
  <div class="section">
    <div class="container">
      <Summary/>
      <div class="content has-text-centered">
        <router-link
          :to="{ name: 'about' }"
          class="is-size-4">
          ≪ more ≫
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Summary from '~/components/about/Summary'

export default {
  components: {
    Summary
  }
}
</script>
