<template>
  <div>
    <v-header />
    <main role="main">
      <nuxt />
    </main>
    <v-footer />
  </div>
</template>

<script>
import VHeader from '@/components/Header'
import VFooter from '@/components/Footer'

export default {
  components: {
    VHeader,
    VFooter
  }
}
</script>

<style></style>
