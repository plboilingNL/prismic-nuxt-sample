<template>
  <div>
    <VueSlickCarousel :arrows="false" :dots="true">
      <div>
        <div class="relative mx-auto text-base max-w-prose lg:max-w-none">
          <blockquote class="relative bg-white rounded-lg shadow-lg">
            <div class="px-6 py-8 rounded-t-lg sm:px-10 sm:pt-10 sm:pb-8">
              <img src="https://tailwindui.com/img/logos/workcation-color.svg" alt="Workcation" class="h-8" />
              <div class="relative mt-8 text-lg font-medium leading-7 text-gray-700">
                <svg
                  class="absolute top-0 left-0 w-8 h-8 text-gray-200 transform -translate-x-3 -translate-y-2"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                  />
                </svg>
                <p class="relative">
                  Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat
                  dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus.
                </p>
              </div>
            </div>
            <cite class="flex items-center px-6 py-5 not-italic bg-indigo-600 rounded-b-lg sm:items-start sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
              <div class="mr-4 border-2 border-white rounded-full sm:-mt-15 sm:mr-6">
                <img
                  class="w-12 h-12 bg-indigo-300 rounded-full sm:w-20 sm:h-20"
                  src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <span class="font-semibold leading-6 text-indigo-300">
                <strong class="font-semibold text-white">Judith Black</strong>
                <br class="sm:hidden" />
                CEO at Workcation
              </span>
            </cite>
          </blockquote>
        </div>
      </div>
      <div>
        <div class="relative mx-auto text-base max-w-prose lg:max-w-none">
          <!-- <svg
            class="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern id="bedc54bc-7371-44a2-a2bc-dc68d819ae60" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
          </svg> -->
          <blockquote class="relative bg-white rounded-lg shadow-lg">
            <div class="px-6 py-8 rounded-t-lg sm:px-10 sm:pt-10 sm:pb-8">
              <img src="https://tailwindui.com/img/logos/workcation-color.svg" alt="Workcation" class="h-8" />
              <div class="relative mt-8 text-lg font-medium leading-7 text-gray-700">
                <svg
                  class="absolute top-0 left-0 w-8 h-8 text-gray-200 transform -translate-x-3 -translate-y-2"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                  />
                </svg>
                <p class="relative">
                  Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat
                  dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus.
                </p>
              </div>
            </div>
            <cite class="flex items-center px-6 py-5 not-italic bg-indigo-600 rounded-b-lg sm:items-start sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
              <div class="mr-4 border-2 border-white rounded-full sm:-mt-15 sm:mr-6">
                <img
                  class="w-12 h-12 bg-indigo-300 rounded-full sm:w-20 sm:h-20"
                  src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <span class="font-semibold leading-6 text-indigo-300">
                <strong class="font-semibold text-white">Judith Black</strong>
                <br class="sm:hidden" />
                CEO at Workcation
              </span>
            </cite>
          </blockquote>
        </div>
      </div>
      <div>
        <div class="relative mx-auto text-base max-w-prose lg:max-w-none">
          <!-- <svg
            class="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern id="bedc54bc-7371-44a2-a2bc-dc68d819ae60" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
          </svg> -->
          <blockquote class="relative bg-white rounded-lg shadow-lg">
            <div class="px-6 py-8 rounded-t-lg sm:px-10 sm:pt-10 sm:pb-8">
              <img src="https://tailwindui.com/img/logos/workcation-color.svg" alt="Workcation" class="h-8" />
              <div class="relative mt-8 text-lg font-medium leading-7 text-gray-700">
                <svg
                  class="absolute top-0 left-0 w-8 h-8 text-gray-200 transform -translate-x-3 -translate-y-2"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                  />
                </svg>
                <p class="relative">
                  Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat
                  dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus.
                </p>
              </div>
            </div>
            <cite class="flex items-center px-6 py-5 not-italic bg-indigo-600 rounded-b-lg sm:items-start sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
              <div class="mr-4 border-2 border-white rounded-full sm:-mt-15 sm:mr-6">
                <img
                  class="w-12 h-12 bg-indigo-300 rounded-full sm:w-20 sm:h-20"
                  src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <span class="font-semibold leading-6 text-indigo-300">
                <strong class="font-semibold text-white">Judith Black</strong>
                <br class="sm:hidden" />
                CEO at Workcation
              </span>
            </cite>
          </blockquote>
        </div>
      </div>
      <div>
        <div class="relative mx-auto text-base max-w-prose lg:max-w-none">
          <!-- <svg
            class="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern id="bedc54bc-7371-44a2-a2bc-dc68d819ae60" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
          </svg> -->
          <blockquote class="relative bg-white rounded-lg shadow-lg">
            <div class="px-6 py-8 rounded-t-lg sm:px-10 sm:pt-10 sm:pb-8">
              <img src="https://tailwindui.com/img/logos/workcation-color.svg" alt="Workcation" class="h-8" />
              <div class="relative mt-8 text-lg font-medium leading-7 text-gray-700">
                <svg
                  class="absolute top-0 left-0 w-8 h-8 text-gray-200 transform -translate-x-3 -translate-y-2"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                  />
                </svg>
                <p class="relative">
                  Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat
                  dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus.
                </p>
              </div>
            </div>
            <cite class="flex items-center px-6 py-5 not-italic bg-indigo-600 rounded-b-lg sm:items-start sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
              <div class="mr-4 border-2 border-white rounded-full sm:-mt-15 sm:mr-6">
                <img
                  class="w-12 h-12 bg-indigo-300 rounded-full sm:w-20 sm:h-20"
                  src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <span class="font-semibold leading-6 text-indigo-300">
                <strong class="font-semibold text-white">Judith Black</strong>
                <br class="sm:hidden" />
                CEO at Workcation
              </span>
            </cite>
          </blockquote>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: {
    VueSlickCarousel
  }
}
</script>
<style>
.slick-dots li button:before {
  font-family: 'slick';
  font-size: 6px;
  line-height: 20px;

  position: absolute;
  top: 0;
  left: 0;

  width: 20px;
  height: 20px;

  content: '•';
  text-align: center;

  opacity: 0.25;
  color: #5850ec !important;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.slick-dots li.slick-active button:before {
  opacity: 0.75;
  color: #5850ec !important;
}
</style>
