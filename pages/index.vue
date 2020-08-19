/* eslint-disable vue/require-v-for-key */
<template>
  <div>
    <div class="container">
      <section v-if="page.mission && page.mission.length > 0" class="home-section mission">
        <div class="mission__text">
          <prismic-rich-text :field="page.mission" />
        </div>
        <img src="~assets/images/tree.svg" class="mission__image js-tree" title="" />
      </section>
    </div>
    <section v-if="page.partner && page.partner.length > 0">
      <div class="bg-white">
        <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-24">
          <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div class="space-y-5 sm:space-y-4">
              <h2 class="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl">About Us</h2>
              <p class="text-xl leading-7 text-gray-500">
                Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat
                eu faucibus vivamus eget bibendum cras.
              </p>
            </div>
            <div class="lg:col-span-2">
              <template v-for="partner in page.partner">
                <ul :key="partner.name" class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:col-gap-8 lg:space-y-0">
                  <li :key="partner.name" class="sm:py-8">
                    <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                      <!-- Image -->
                      <div :key="partner.name" class="partnership__img">
                        <div class="relative pb-2/3 sm:pt-2/3">
                          <prismic-image class="absolute inset-0 object-cover w-full h-full rounded-lg shadow-lg" :field="partner.image" />
                        </div>
                      </div>
                      <div class="sm:col-span-2">
                        <div class="space-y-4">
                          <div :key="partner.name" class="space-y-1 text-lg font-medium leading-6">
                            <h4>{{ partner.name }}</h4>
                            <p class="text-indigo-600">Co-Founder / CEO</p>
                          </div>
                          <div class="text-lg leading-7">
                            <prismic-rich-text v-if="partner.content" :field="partner.content" class="prose" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <!-- More people...-->
                </ul>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="home-section">
      <a id="team" href="#" class="anchor"></a>
      <!-- team start -->

      <span class="text-transparent bg-clip-text bg-gradient-to-r from-scooter-400 to-blue-ribbon-500">
        Greetings from Tailwind v1.7.
      </span>

      <div class="bg-white">
        <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-24">
          <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div class="space-y-5 sm:space-y-4">
              <h2 class="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl">Meet our leadership</h2>
              <p class="text-xl leading-7 text-gray-500">
                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse. Vivamus fringilla.
              </p>
            </div>
            <div class="lg:col-span-2">
              <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:col-gap-8">
                <li>
                  <div class="flex items-center space-x-4 lg:space-x-6">
                    <img
                      class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div class="space-y-1 text-lg font-medium leading-6">
                      <h4>Leslie Alexander</h4>
                      <p class="text-indigo-600">Co-Founder / CEO</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="flex items-center space-x-4 lg:space-x-6">
                    <img
                      class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                      src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div class="space-y-1 text-lg font-medium leading-6">
                      <h4>Michael Foster</h4>
                      <p class="text-indigo-600">Co-Founder / CTO</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="flex items-center space-x-4 lg:space-x-6">
                    <img
                      class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div class="space-y-1 text-lg font-medium leading-6">
                      <h4>Dries Vincent</h4>
                      <p class="text-indigo-600">Manager, Business Relations</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="flex items-center space-x-4 lg:space-x-6">
                    <img
                      class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div class="space-y-1 text-lg font-medium leading-6">
                      <h4>Lindsay Walton</h4>
                      <p class="text-indigo-600">Front-end Developer</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="flex items-center space-x-4 lg:space-x-6">
                    <img
                      class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div class="space-y-1 text-lg font-medium leading-6">
                      <h4>Courtney Henry</h4>
                      <p class="text-indigo-600">Designer</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="flex items-center space-x-4 lg:space-x-6">
                    <img
                      class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div class="space-y-1 text-lg font-medium leading-6">
                      <h4>Tom Cook</h4>
                      <p class="text-indigo-600">Director, Product Development</p>
                    </div>
                  </div>
                </li>

                <!-- More people... -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- team end -->
    <!-- testim start -->

    <!-- This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 -->

    <div class="py-16 overflow-hidden bg-cover bg-gray-50">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mx-auto text-base max-w-prose lg:max-w-none">
          <p class="text-base font-semibold leading-6 tracking-wide text-indigo-600 uppercase">Transactions</p>
          <h1 class="mt-2 mb-8 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            What makes us different
          </h1>
        </div>
        <div class="relative z-10 mx-auto mb-8 text-base max-w-prose lg:max-w-5xl lg:mx-0 lg:pr-72">
          <p class="text-lg leading-7 text-gray-500">
            Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed
            aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.
          </p>
        </div>
        <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div class="relative z-10 mb-12 lg:mb-0">
            <div class="mx-auto mb-10 prose text-gray-500 lg:max-w-none">
              <p>
                Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra
                donec ut volutpat donec laoreet quam urna.
              </p>
              <ul>
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
              </ul>
              <p>
                Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper.
                Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus
                in. Viverra.
              </p>
              <h2>We’re here to help</h2>
              <p>
                Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat
                dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a
                platea auctor mi.
              </p>
            </div>
            <div class="flex mx-auto text-base max-w-prose lg:max-w-none">
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo"
                >
                  Contact sales
                </a>
              </div>
              <div class="ml-4 rounded-md shadow">
                <a
                  href="#"
                  class="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <Vue-slick-carousel />
        </div>
      </div>
    </div>

    <!-- testim end -->
    <section v-if="page.contacts && page.contacts.length > 0" class="home-section contact-us">
      <a id="contact-us" href="#" class="anchor"></a>
      <prismic-rich-text :field="page.contacts" />
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from '@/components/VueSlickCarousel.vue'

export default {
  components: { VueSlickCarousel },
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
