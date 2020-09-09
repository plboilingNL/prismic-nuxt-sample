<template>
  <div>
    <navbar />
    <main role="main">
      <nuxt />
    </main>
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
