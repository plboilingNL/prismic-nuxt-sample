<template>
  <div class="container">
    <section v-if="page.mission && page.mission.length > 0" class="home-section mission">
      <div class="mission__text">
        <prismic-rich-text :field="page.mission" />
      </div>
      <img src="~assets/images/tree.svg" class="mission__image js-tree" title="" />
    </section>

    <section v-if="page.partner && page.partner.length > 0" class="home-section partnership">
      <template v-for="partner in page.partner">
        <div :key="partner.name" class="partnership__img">
          <prismic-image :field="partner.image" />
        </div>
        <div :key="partner.name" class="partnership__text">
          <h3 class="partnership__title">{{ partner.name }}</h3>
          <prismic-rich-text v-if="partner.content" :field="partner.content" />
        </div>
      </template>
    </section>

    <section class="home-section">
      <a id="team" href="#" class="anchor"></a>
      <h2></h2>
      <ul class="team-list">
        <li class="team-list__member"></li>
      </ul>
    </section>

    <section v-if="page.contacts && page.contacts.length > 0" class="home-section contact-us">
      <a id="contact-us" href="#" class="anchor"></a>
      <prismic-rich-text :field="page.contacts" />
    </section>
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
