<template>
  <nav class="navbar is-info">
    <div class="navbar-brand">
      <router-link
        :to="{ name: 'index' }"
        class="navbar-item">
        <figure class="image is-32x32">
          <img
            src="~/assets/img/profile.gif"
            class="is-rounded">
        </figure>
      </router-link>
      <div
        :class="{'is-active': isActive}"
        class="navbar-burger burger"
        @click="toggleMenu()">
        <span/>
        <span/>
        <span/>
      </div>
    </div>
    <div
      :class="{'is-active': isActive}"
      class="navbar-menu">
      <div class="navbar-start is-link">
        <router-link
          :to="{ name: 'index' }"
          class="navbar-item">
          Home
        </router-link>
        <router-link
          :to="{ name: 'about' }"
          class="navbar-item">
          About
        </router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Products
          </a>
          <div class="navbar-dropdown is-boxed">
            <router-link
              :to="{ name: 'graph' }"
              class="navbar-item">
              Graph
            </router-link>
            <router-link
              :to="{ name: 'blog' }"
              class="navbar-item">
              Blog
            </router-link>
            <router-link
              :to="{ name: 'bbs' }"
              class="navbar-item">
              BBS
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  watch: {
    $route() {
      this.isActive = false
    }
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive
    }
  }
}
</script>
