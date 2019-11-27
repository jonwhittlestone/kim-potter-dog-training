<template>
  <IfBot>
    <CookieConsent
      message="We use Cookies for user analysis and on-page improvements!"
      link-label="Learn about cookies"
    />
  </IfBot>
</template>

<script>
import IfBot from 'vue-if-bot/dist/vue-if-bot.es'
import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'

export default {
  components: {
    IfBot,
    CookieConsent
  }
}
</script>

<style>
  .cookie-consent {
    opacity:0.90;
    @apply w-full py-2 relative flex items-center justify-center text-base bg-white text-black bottom-0 border-black border-t-2 shadow-md;
  }

  .cookie-consent button {
    @apply border border-black text-black rounded
  }
  .cookie-consent a {
    @apply underline
  }

</style>
