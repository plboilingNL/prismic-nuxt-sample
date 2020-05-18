<template>
  <ul class="lang">
    <li v-for="locale in $i18n.locales" :key="locale.code" class="lang__item">
      <span v-if="$i18n.locale === locale.code">{{ locale.code }}</span>
      <n-link v-else :to="switchLocalePath(locale.code)" :title="locale.name" exact>
        {{ locale.code }}
      </n-link>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style></style>
