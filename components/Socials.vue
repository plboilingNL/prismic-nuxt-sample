<template>
  <nav class="socials">
    <ul>
      <li v-for="(social, i) in socials" :key="i" :class="social.id">
        <a :href="social.url">{{ social.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    socials: [
      {
        id: 'gh',
        name: 'Github',
        url: 'https://github.com/bitbull-team/'
      },
      {
        id: 'li',
        name: 'Linkedin',
        url: 'http://www.linkedin.com/company/bitbull-srl'
      },
      {
        id: 'tw',
        name: 'Twitter',
        url: 'https://twitter.com/Bitbull_it'
      },
      {
        id: 'ig',
        name: 'Instagram',
        url: 'https://www.instagram.com/bitbull_it/'
      }
    ]
  })
}
</script>

<style></style>
