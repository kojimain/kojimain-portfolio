<template>
  <div>
    <Hero/>
    <About/>
    <Products/>
  </div>
</template>

<script>
import Hero from '~/components/index/Hero'
import About from '~/components/index/About'
import Products from '~/components/index/Products'

export default {
  components: {
    Hero,
    About,
    Products
  }
}
</script>
