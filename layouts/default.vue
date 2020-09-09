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
  },
  methods: {
    scrollFix(hash) {
      setTimeout(
        () =>
          // eslint-disable-next-line no-undef
          $('html, body').animate(
            {
              // eslint-disable-next-line no-undef
              scrollTop: $(hash).offset().top
            },
            1000
          ),
        1
      )
    }
  }
}
</script>

<style></style>
