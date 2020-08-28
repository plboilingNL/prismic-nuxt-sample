<template>
  <div class="container">
    <section class="posts-list">
      <h2 class="posts-list__title">{{ $t('blog.last_posts') }}</h2>
      <!-- {{ content }} -->

      <ul v-if="posts && posts.length > 0" class="posts-list__wrapper">
        <li v-for="(post, i) in posts" :key="i" class="posts-list__item" :class="{ 'posts-list__item--first': i === 0 }">
          <a v-if="i === 0" href="#">
            <prismic-image v-if="post.data && post.data.image" :field="post.data.image" sizes="(max-width: 990px) 100vw (min-width: 991px) 57vw" />
            <!-- <img v-if="post.image" srcset="" :src="post.image.url" alt="" /> -->
          </a>
          <a v-else href="#">
            <prismic-image v-if="post.data && post.data.image" :field="post.data.image" sizes="(max-width: 990px) 100vw (min-width: 991px) 33vw" />
            <!-- <img sizes="(max-width: 990px) 100vw (min-width: 991px) 33vw" srcset="" src="" alt="" /> -->
          </a>

          <div class="posts-list__item-meta">
            <div class="posts-list__item-categories">
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
            <h3 class="posts-list__item-title">
              <n-link
                :to="
                  localePath({
                    name: 'blog-post',
                    params: {
                      post: post.uid
                    }
                  })
                "
              >
                {{ post.data.title[0].text }}
              </n-link>
            </h3>
            <span v-if="post.data && post.data.author && post.data.author.uid" class="posts-list__item-author">
              {{ $t('blog.post_of') }}
              <n-link
                :to="
                  localePath({
                    name: 'author',
                    params: {
                      name: post.data.author.uid
                    }
                  })
                "
                rel="author"
              >
                {{ post.data.author.slug | breakCamelCase }}
              </n-link>
            </span>
            |
            <time v-if="post.first_publication_date" class="posts-list__item-time" :datetime="post.first_publication_date">
              {{ new Date(post.first_publication_date).toLocaleDateString(currentLocale, { year: 'numeric', month: 'long', day: 'numeric' }) }}
            </time>
            <div class="posts-list__item-summary">
              <prismic-rich-text v-if="post.data && post.data.summary" :field="post.data.summary" />
            </div>
          </div>
        </li>
      </ul>
      <div class="posts-list__view-all">
        <a href="#">{{ $t('blog.all_posts') }}</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  filters: {
    breakCamelCase(val) {
      if (!val) return val
      return val.replace('-', ' ')
    }
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter((lang) => lang.code === app.i18n.locale)[0]
    const doc = await $prismic.api.query($prismic.predicates.at('document.type', 'post'), {
      orderings: '[document.first_publication_date desc]',
      lang: currentLocale.iso.toLowerCase()
    })
    if (doc) {
      return {
        posts: doc.results || doc,
        currentLocale
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head: () => ({
    bodyAttrs: {
      class: 'type-blog'
    }
  })
}
</script>

<style></style>
