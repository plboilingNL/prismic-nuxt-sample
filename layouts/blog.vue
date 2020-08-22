<template>
  <div>
    <Nav />
    <main role="main">
      <nuxt />
    </main>
    <v-footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import VFooter from '@/components/Footer'

export default {
  components: {
    Nav,
    VFooter
  }
}
</script>

<style></style>
