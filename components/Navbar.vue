<template>
  <div>
    <div>
      <nav id="nav" v-on-clickaway="hideMenu" role="navigation" class="bg-gray-800">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <n-link :to="localePath('index')">
                  <img class="w-8 h-8" src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg" alt="logo" />
                </n-link>
              </div>
              <div class="hidden md:block">
                <div class="flex items-baseline ml-10">
                  <div class="flex space-x-2">
                    <n-link
                      v-smooth-scroll
                      class="px-3 py-2 ml-4 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 scrollactive-item"
                      :to="localePath('/')"
                      >{{ $t('Home') }}</n-link
                    >
                    <n-link
                      v-smooth-scroll
                      class="px-3 py-2 ml-4 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 scrollactive-item"
                      :to="localePath('/#about')"
                      >{{ $t('About') }}</n-link
                    >
                    <n-link
                      v-smooth-scroll
                      class="px-3 py-2 ml-4 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 scrollactive-item"
                      :to="localePath('/#team')"
                      >{{ $t('Team') }}</n-link
                    >
                    <n-link
                      v-smooth-scroll
                      class="px-3 py-2 ml-4 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 scrollactive-item"
                      :to="localePath('/#contact')"
                      >{{ $t('Contact') }}</n-link
                    >
                    <n-link
                      v-smooth-scroll
                      class="px-3 py-2 ml-4 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 scrollactive-item"
                      :to="localePath('/saas')"
                      >{{ $t('Saas') }}</n-link
                    >
                    <n-link
                      v-smooth-scroll
                      class="px-3 py-2 ml-4 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 scrollactive-item"
                      :to="localePath('/landing')"
                      >{{ $t('Landing') }}</n-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="flex items-center ml-4 md:ml-6">
                <button
                  class="p-1 text-gray-400 border-2 border-transparent rounded-md hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                  aria-label="Notifications"
                >
                  <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    ></path>
                  </svg>
                </button>

                <!-- Profile dropdown -->
                <div class="relative ml-3">
                  <div>
                    <button
                      href="#"
                      class="flex items-center max-w-xs text-sm text-white rounded-md focus:outline-none focus:shadow-solid"
                      @click="isOpen = !isOpen"
                      @keydown.space.exact.prevent="toggleVisibility"
                      @keydown.esc.exact="hideDropdown"
                      @keydown.shift.tab="hideDropdown"
                      @keydown.up.exact.prevent="startArrowKeys"
                      @keydown.down.exact.prevent="startArrowKeys"
                    >
                      <img :src="require('~/static/images/' + $i18n.locale + '.svg')" alt="flag" class="w-6 h-6 ml-1 mr-2" />
                      <span class="text-xs font-bold text-gray-300">{{ $i18n.locale.toUpperCase() }}</span>
                      <svg fill="currentColor" class="text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path
                          class="heroicon-ui"
                          d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                  >
                    <div v-show="isOpen" v-if="isOpen" class="absolute right-0 z-50 w-48 mt-2 origin-top-right rounded-md shadow-lg">
                      <div class="py-1 bg-white rounded-md shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                        <a
                          ref="language"
                          href="#"
                          class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="languagechoice"
                          @click.prevent="setLocale('pl')"
                          @keydown.up.exact.prevent=""
                          @keydown.tab.exact="focusNext(false)"
                          @keydown.down.exact.prevent="focusNext(true)"
                          @keydown.esc.exact="hideDropdown"
                        >
                          <img src="../static/images/pl.svg" alt="Polish flag" class="w-6 h-6 ml-1 mr-2" /> <span class="text-xs">PL</span></a
                        >
                        <a
                          href="#"
                          class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          @click.prevent="setLocale('nl')"
                          @keydown.tab.exact="focusNext(false)"
                          @keydown.shift.tab="focusPrevious(false)"
                          @keydown.up.exact.prevent="focusPrevious(true)"
                          @keydown.down.exact.prevent="focusNext(true)"
                          @keydown.esc.exact="hideDropdown"
                        >
                          <img src="../static/images/nl.svg" alt="dutch flag" class="w-6 h-6 ml-1 mr-2" /> <span class="text-xs">NL</span></a
                        >
                        <a
                          href="#"
                          class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          @click.prevent="setLocale('en')"
                          @keydown.shift.tab="focusPrevious(false)"
                          @keydown.up.exact.prevent="focusPrevious(true)"
                          @keydown.down.exact.prevent=""
                          @keydown.tab.exact="hideDropdown"
                          @keydown.esc.exact="hideDropdown"
                        >
                          <img src="../static/images/en.svg" alt="english flag" class="w-6 h-6 ml-1 mr-2" /><span class="text-xs">EN</span></a
                        >
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
            <div class="flex -mr-2 md:hidden">
              <!-- Mobile menu button -->
              <button
                class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                @click="open = !open"
              >
                <svg :class="[open ? 'hidden' : 'block', 'h-6 w-6']" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg :class="[open ? 'block' : 'hidden', 'h-6 w-6']" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div :class="[open ? '' : 'hidden', 'md:hidden']">
          <div class="px-2 pt-2 pb-3 sm:px-3">
            <transition name="dropdown-fade">
              <ul
                v-if="isOpen"
                ref="dropdown"
                v-on-clickaway="hideDropdown"
                class="absolute z-30 w-32 mt-3 overflow-hidden font-normal normal-case bg-white border rounded shadow md:mr-9"
              >
                <li>
                  <a
                    ref="language"
                    href="#"
                    class="flex items-center mt-1 mb-2 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-600"
                    @click.prevent="setLocale('pl')"
                    @keydown.up.exact.prevent=""
                    @keydown.tab.exact="focusNext(false)"
                    @keydown.down.exact.prevent="focusNext(true)"
                    @keydown.esc.exact="hideDropdown"
                  >
                    <img src="../static/images/pl.svg" alt="english flag" class="w-6 h-6 ml-1 mr-2" />
                    <span class="text-xs">PL</span>
                  </a>
                </li>
                <li>
                  <a
                    ref="language"
                    href="#"
                    class="flex items-center mb-2 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-600"
                    @click.prevent="setLocale('nl')"
                    @keydown.tab.exact="focusNext(false)"
                    @keydown.shift.tab="focusPrevious(false)"
                    @keydown.up.exact.prevent="focusPrevious(true)"
                    @keydown.down.exact.prevent="focusNext(true)"
                    @keydown.esc.exact="hideDropdown"
                  >
                    <img src="../static/images/nl.svg" alt="dutch flag" class="w-6 h-6 ml-1 mr-2" />
                    <span class="text-xs">NL</span>
                  </a>
                </li>
                <li>
                  <a
                    ref="language"
                    href="#"
                    class="flex items-center mb-1 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-600"
                    @click.prevent="setLocale('en')"
                    @keydown.shift.tab="focusPrevious(false)"
                    @keydown.up.exact.prevent="focusPrevious(true)"
                    @keydown.down.exact.prevent=""
                    @keydown.tab.exact="hideDropdown"
                    @keydown.esc.exact="hideDropdown"
                  >
                    <img src="../static/images/en.svg" alt="english flag" class="w-6 h-6 ml-1 mr-2" />
                    <span class="text-xs">EN</span>
                  </a>
                </li>
              </ul>
            </transition>
            <a
              href="#"
              class="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
              >Dashboard</a
            >
            <a
              href="#"
              class="block px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >Team</a
            >
            <a
              href="#"
              class="block px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >Projects</a
            >
            <a
              href="#"
              class="block px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >Calendar</a
            >
            <a
              href="#"
              class="block px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >Reports</a
            >
          </div>
          <div class="pt-4 pb-3 border-t border-gray-700">
            <div v-if="open" class="px-2 mt-3">
              <a
                ref="language"
                href="#"
                class="flex items-center px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                @click.prevent="setLocale('pl')"
                @keydown.up.exact.prevent=""
                @keydown.tab.exact="focusNext(false)"
                @keydown.down.exact.prevent="focusNext(true)"
                @keydown.esc.exact="hideDropdown"
              >
                <img src="../static/images/pl.svg" alt="polish flag" class="w-6 h-6 ml-1 mr-2" />
                <span class="text-xs">Polski</span>
              </a>
              <a
                ref="language"
                href="#"
                class="flex items-center px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                @click.prevent="setLocale('nl')"
                @keydown.tab.exact="focusNext(false)"
                @keydown.shift.tab="focusPrevious(false)"
                @keydown.up.exact.prevent="focusPrevious(true)"
                @keydown.down.exact.prevent="focusNext(true)"
                @keydown.esc.exact="hideDropdown"
              >
                <img src="../static/images/nl.svg" alt="dutch flag" class="w-6 h-6 ml-1 mr-2" />
                <span class="text-xs">Nederlands</span>
              </a>
              <a
                ref="language"
                href="#"
                class="flex items-center px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                @click.prevent="setLocale('en')"
                @keydown.shift.tab="focusPrevious(false)"
                @keydown.up.exact.prevent="focusPrevious(true)"
                @keydown.down.exact.prevent=""
                @keydown.tab.exact="hideDropdown"
                @keydown.esc.exact="hideDropdown"
              >
                <img src="../static/images/en.svg" alt="english flag" class="w-6 h-6 ml-1 mr-2" />
                <span class="text-xs">English</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
  mixins: [clickaway],
  data() {
    return {
      open: false,
      isOpen: false,
      focusedIndex: 0
    }
  },
  methods: {
    isCurrent(link) {
      return false
    },
    hideDropdown() {
      this.isOpen = false
      this.focusedIndex = 0
    },
    hideMenu() {
      this.open = false
      this.focusedIndex = 0
    },
    startArrowKeys() {
      if (this.isOpen) {
        // this.$refs.account.focus()
        this.$refs.dropdown.children[0].children[0].focus()
      }
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1
      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusItem() {
      this.$refs.dropdown.children[this.focusedIndex].children[0].focus()
    },
    toggleVisibility() {
      this.open = !this.open
    },
    setLocale(locale) {
      const language = locale.toLocaleLowerCase()
      this.$i18n.setLocaleCookie(language)
      this.$router.replace(this.switchLocalePath(language))
      this.hideDropdown()
    }
  }
}
</script>
<style>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
