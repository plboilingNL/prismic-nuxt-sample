<template>
  <nav id="nav" class="nav" role="navigation">
    <ul>
      <li v-for="(link, i) in links" :key="i" :class="{ current: isCurrent(link) }">
        <n-link
          data-scroll
          :to="
            localePath({
              name: link.path
            })
          "
        >
          {{ link.name }}
        </n-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: 'Home',
        path: 'index'
      },
      {
        name: 'Team',
        path: 'index'
      },
      {
        name: 'Contattaci',
        path: 'index'
      },
      {
        name: 'Blog',
        path: 'blog'
      }
    ]
  }),
  methods: {
    isCurrent(link) {
      return false
    }
  }
}
</script>

<style></style>
