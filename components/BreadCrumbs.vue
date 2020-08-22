<template>
  <div class="breadcrumbs">
    <router-link v-for="(link, i) in breadcrumbsLinks" :key="i" class="breadcrumbs__level" :to="link">{{ link.meta.title }}</router-link>
  </div>
</template>
<script>
export default {
  name: 'Breadcrumbs',
  computed: {
    breadcrumbsLinks() {
      const tmp = []
      if (this.$route.matched) {
        this.$route.matched.forEach((link) => {
          tmp.push(Object.assign({ meta: { title: 'Title not found in meta' } }, link))
        })
      }
      if (tmp.length === 0) {
        tmp.push({ path: '/', meta: { title: 'Home' } })
      }
      return tmp
    }
  }
}
</script>
