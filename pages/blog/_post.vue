<template>
  <div class="min-h-screen bg-gray-50">
    <header class="container py-16 mx-auto md:py-24">
      <BreadCrumbs class="z-50" />
    </header>

    <article class="post">
      <header class="post__header">
        <div class="post__categories">
          <strong v-for="category in post.categories" :key="category.uid">
            <n-link
              :to="
                localePath({
                  name: 'category',
                  params: {
                    name: category.uid
                  }
                })
              "
            >
              {{ category.name }}
            </n-link>
          </strong>
        </div>
        <prismic-rich-text id="js-title-post" :field="post.data.title" />
        <time v-if="post.first_publication_date" class="post__date" :datetime="post.first_publication_date">
          {{ new Date(post.first_publication_date).toLocaleDateString(currentLocale, { year: 'numeric', month: 'long', day: 'numeric' }) }}
        </time>
        <span class="post__reading-time">{{ $t('post.reading_time') }} {{ post.readingTime }}</span>
      </header>

      <prismic-image v-if="post.data && post.data.image" :field="post.data.image" sizes="(max-width: 990px) 100vw (min-width: 991px) 57vw" />

      <div class="post__content">
        <prismic-rich-text :field="post.data.content" />
      </div>
      <footer class="post__footer">
        <div class="tags">
          <n-link
            v-for="(tag, i) in post.tag"
            :key="i"
            :to="
              localePath({
                name: 'category-tag',
                params: {
                  tag: tag.slug
                }
              })
            "
          >
            {{ tag.name }}
          </n-link>
        </div>
      </footer>
      <!-- <v-author /> -->
    </article>

    <!-- <v-post-comments /> -->
    <!-- <v-post-related /> -->
  </div>
</template>

<script>
import BreadCrumbs from '@/components/BreadCrumbs'
export default {
  components: {
    BreadCrumbs
  },
  async asyncData({ $prismic, params, error, app }) {
    const currentLocale = app.i18n.locales.filter((lang) => lang.code === app.i18n.locale)[0]
    const doc = await $prismic.api.getByUID('post', params.post, {
      lang: currentLocale.iso.toLowerCase()
    })

    if (doc) {
      return {
        post: doc.results || doc,
        currentLocale
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head: () => ({
    bodyAttrs: {
      class: 'type-post'
    }
  })
}
</script>

<style></style>
