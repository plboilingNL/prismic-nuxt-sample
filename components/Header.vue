<template>
  <div>
    <header id="top" role="navigation" class="header-blog">
      <!-- <div class="container"> -->
      <!-- <span class="logo"> -->
      <!-- <h1 class="logo">
          <span>{{ siteName }}</span>
          <n-link to="/">
            <img src="~assets/images/bitbull.svg" :alt="`${siteName} logo`" :title="siteName" width="181" height="88" />
          </n-link>
        </h1> -->
      <!-- </span> -->
      <Navbar />
      <!-- </div> -->
    </header>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  data: () => ({
    siteName: 'Desk Code'
  })
}
</script>

<style></style>
