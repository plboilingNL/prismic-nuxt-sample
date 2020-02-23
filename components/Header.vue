<template>
  <div>
    <input id="css-open-menu" type="checkbox" />
    <label class="menu-btn" for="css-open-menu"><span></span></label>
    <header id="top" role="navigation" class="header-blog">
      <div class="container">
        <!-- <span class="logo"> -->
        <h1 class="logo">
          <span>{{ siteName }}</span>
          <n-link to="/">
            <img src="~assets/images/bitbull.svg" :alt="`${siteName} logo`" :title="siteName" width="181" height="88" />
          </n-link>
        </h1>
        <!-- </span> -->
        <v-navigation />
      </div>
    </header>
  </div>
</template>

<script>
import VNavigation from './Navigation'
export default {
  components: {
    VNavigation
  },
  data: () => ({
    siteName: 'Bitbull'
  })
}
</script>

<style></style>
