<template>
  <div class="page-content">
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
        <h1 id="js-title-post">{{ post.title }}</h1>
        <time v-if="post.date" class="post__date" :datetime="post.date"> {{ post.date.day }} {{ post.date.month }} {{ post.date.year }}</time>
        <span class="post__reading-time">{{ $t('post.reading_time') }} {{ post.readingTime }}</span>
      </header>

      <img v-if="post.image" sizes="(max-width: 990px) 100vw (min-width: 991px) 57vw" srcset="" :src="post.image.url" alt="" />

      <div class="post__content">
        {{ post.content }}
      </div>
      <footer class="post__footer">
        <div class="tags">
          <n-link
            v-for="(tag, i) in tag"
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
      <v-author />
    </article>

    <v-post-comments />
    <v-post-related />
  </div>
</template>

<script>
export default {
  data: () => ({
    post: {
      title: 'Sample title',
      image: {
        url: 'https://via.placeholder.com/660x280'
      },
      content: 'Sample content',
      categories: [
        {
          name: 'Sample category',
          slug: 'sample-category'
        },
        {
          name: 'Sample category2',
          slug: 'sample-category2'
        }
      ],
      tags: [
        {
          name: 'Sample tag',
          slug: 'sample-tag'
        },
        {
          name: 'Sample tag2',
          slug: 'sample-tag2'
        }
      ]
    }
  }),
  head: () => ({
    bodyAttrs: {
      class: 'type-post'
    }
  })
}
</script>

<style></style>
