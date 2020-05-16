<template>
  <div class="container">
    <section class="home-section mission">
      <div class="mission__text">
        <prismic-rich-text v-if="page.mission" :field="page.mission" />
      </div>
      <img src="~assets/images/tree.svg" class="mission__image js-tree" title="" />
    </section>

    <section class="home-section partnership">
      <div class="partnership__img"></div>
      <div class="partnership__text partnership__text--aws">
        <h3 class="partnership__title"></h3>
      </div>
      <div class="partnership__img"></div>
      <div class="partnership__text">
        <h3 class="partnership__title"></h3>
      </div>
    </section>

    <section class="home-section">
      <a id="team" href="#" class="anchor"></a>
      <h2></h2>
      <ul class="team-list">
        <li class="team-list__member"></li>
      </ul>
    </section>

    <section class="home-section contact-us"></section>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter((lang) => lang.code === app.i18n.locale)[0]
    // Doc: https://prismic.io/docs/javascript/query-the-api/query-a-single-type-document
    const doc = await $prismic.api.getSingle('homepage', {
      lang: currentLocale.iso.toLowerCase()
    })

    if (doc) {
      return {
        page: doc.data || doc
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data: () => ({
    page: {}
  }),
  head: () => ({
    bodyAttrs: {
      class: 'home type-page'
    }
  })
}
</script>

<style></style>
