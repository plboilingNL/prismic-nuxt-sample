<template>
  <div class="container">
    <section class="posts-list">
      <h2 class="posts-list__title">{{ $t('blog.last_posts') }}</h2>
      <!-- {{ content }} -->

      <ul class="posts-list__wrapper">
        <li v-for="(post, i) in posts" :key="i" class="posts-list__item" :class="{ 'posts-list__item--first': i === 0 }">
          <a v-if="i === 0" href="#">
            <img v-if="post.image" sizes="(max-width: 990px) 100vw (min-width: 991px) 57vw" srcset="" :src="post.image.url" alt="" />
          </a>
          <a v-else href="#">
            <img sizes="(max-width: 990px) 100vw (min-width: 991px) 33vw" srcset="" src="" alt="" />
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
                {{ post.title }}
              </n-link>
            </h3>
            <span class="posts-list__item-author">
              {{ $t('blog.post_of') }}
              <n-link
                v-if="post.author"
                :to="
                  localePath({
                    name: 'author',
                    params: {
                      name: post.author.uid
                    }
                  })
                "
                rel="author"
              >
                {{ post.author.name }}
              </n-link>
            </span>
            |
            <time v-if="post.date" class="posts-list__item-time" :datetime="post.date">
              {{ post.date.day }} {{ post.date.month }} {{ post.date.year }}
            </time>
            <div class="posts-list__item-summary">
              {{ post.summary }}
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
  data: () => ({
    posts: [
      {
        uid: 'sample-uid',
        title: 'Sample title',
        summary: 'Sample summary',
        image: {
          url: 'https://via.placeholder.com/660x280'
        },
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
        author: {
          uid: 'lorenaramonda',
          name: 'Lorena Ramonda'
        }
      }
    ]
  }),
  head: () => ({
    bodyAttrs: {
      class: 'type-blog'
    }
  })
}
</script>

<style></style>
