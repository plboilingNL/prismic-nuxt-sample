<template>
  <div>
    <navbar />
    <main role="main">
      <nuxt />
    </main>
    <v-footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style></style>
