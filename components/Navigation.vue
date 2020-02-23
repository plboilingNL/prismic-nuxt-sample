<template>
  <nav id="nav" class="nav" role="navigation">
    <ul>
      <li v-for="(link, i) in links" :key="i" :class="{ current: isCurrent(link) }">
        <n-link data-scroll :to="link.path">{{ link.name }}</n-link>
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
        path: '/'
      },
      {
        name: 'Team',
        path: '#'
      },
      {
        name: 'Contattaci',
        path: '#'
      },
      {
        name: 'Blog',
        path: '#'
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
