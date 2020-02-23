<template>
  <footer id="footer" role="contentinfo">
    <div class="container">
      <v-socials />
      Bitbull Srl - {{ $t('corporate.vat') }} 03526400043 - {{ $t('corporate.share_capital') }}
      <v-lang-switcher />
    </div>
  </footer>
</template>

<script>
import VSocials from './Socials'
import VLangSwitcher from './Switcher'

export default {
  components: {
    VSocials,
    VLangSwitcher
  }
}
</script>

<style></style>
