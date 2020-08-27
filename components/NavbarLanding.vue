<template>
  <nav class="absolute top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 navbar-expand-lg">
    <div class="container flex flex-wrap items-center justify-between px-4 mx-auto">
      <div class="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
        <a
          class="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-no-wrap"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
          >Tailwind Starter Kit</a
        ><button
          class="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
          type="button"
          @click="toggleNavbar()"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div class="items-center flex-grow bg-white lg:flex lg:bg-transparent lg:shadow-none" :class="{ hidden: !showMenu, block: showMenu }">
        <ul class="flex flex-col mr-auto list-none lg:flex-row">
          <li class="flex items-center">
            <a
              class="flex items-center px-3 py-4 text-xs font-bold text-gray-800 uppercase lg:text-white lg:hover:text-gray-300 lg:py-2"
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"
              ><i class="mr-2 text-lg text-gray-500 lg:text-gray-300 far fa-file-alt leading-lg"></i> Docs</a
            >
          </li>
        </ul>
        <ul class="flex flex-col list-none lg:flex-row lg:ml-auto">
          <li class="flex items-center">
            <a
              class="flex items-center px-3 py-4 text-xs font-bold text-gray-800 uppercase lg:text-white lg:hover:text-gray-300 lg:py-2"
              href="#pablo"
              ><i class="text-lg text-gray-500 lg:text-gray-300 fab fa-facebook leading-lg "></i
              ><span class="inline-block ml-2 lg:hidden">Share</span></a
            >
          </li>
          <li class="flex items-center">
            <a
              class="flex items-center px-3 py-4 text-xs font-bold text-gray-800 uppercase lg:text-white lg:hover:text-gray-300 lg:py-2"
              href="#pablo"
              ><i class="text-lg text-gray-500 lg:text-gray-300 fab fa-twitter leading-lg "></i
              ><span class="inline-block ml-2 lg:hidden">Tweet</span></a
            >
          </li>
          <li class="flex items-center">
            <a
              class="flex items-center px-3 py-4 text-xs font-bold text-gray-800 uppercase lg:text-white lg:hover:text-gray-300 lg:py-2"
              href="#pablo"
              ><i class="text-lg text-gray-500 lg:text-gray-300 fab fa-github leading-lg "></i
              ><span class="inline-block ml-2 lg:hidden">Star</span></a
            >
          </li>
          <li class="flex items-center">
            <button
              class="px-4 py-2 mb-3 ml-3 text-xs font-bold text-gray-800 uppercase bg-white rounded shadow outline-none active:bg-gray-100 hover:shadow-md focus:outline-none lg:mr-1 lg:mb-0"
              type="button"
              style="transition: all 0.15s ease 0s;"
            >
              <i class="fas fa-arrow-alt-circle-down"></i> Download
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
