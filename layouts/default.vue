<template>
  <div class="w-full text-base font-sans">
    <Header />
    <!-- page -->
    <nuxt />

    <div @click="scrollToTop" class="scroll-icon-container cursor-pointer text-right pr-8 pb-8 z-10 text-4xl sticky w-24 ml-auto">
      <font-awesome-icon :icon="['far', 'arrow-alt-circle-up']" class="text-green-100"/>
    </div>

    <KeywordBanner />

    <!-- section.footers - separate this to component -->
    <section id="footers" class="bg-black text-white">
      <div id='contact-form'>
        <form>
          <div class="row">
            <label for="input-name">Name</label>
            <input type="text" name="input-name" id="input-name">
          </div> 
          <div class="row">
            <label for="input-email">Email</label>
            <input type="text" name="input-email" id="input-email">
          </div>
          <div class="row">
            <label for="input-phone">Phone</label>
            <input type="text" name="input-phone" id="input-phone">
          </div>
          <div class="row">
            <label for="input-message">Message</label>
            <textarea id='input-message'></textarea>
          </div>
          <div class="row text-center">
            <button class="primary w-3/4">Send</button>
          </div>
        </form>
        <div id="contact-review-box" class="bg-white">
          <dl class="list text-xs p-6">
            <dt class="inline">Average Rating:</dt>
            <dd class="inline mr-4 font-bold">N/A</dd>

            <dt class="inline">Total Number of Reviews:</dt>
            <dd class="inline font-bold">0</dd>
          </dl>
        </div>
      </div>

      <div id="footers__call-to-action" class="p-6">
        <button class="primary w-full flex border border-white p-0 m-0 p-3">
          <div class="w-1/5 text-left text-xl">
            <font-awesome-icon :icon="['fas', 'envelope']"/>
          </div>
          <div class="w-3/5 text-center align-middle text-xl font-bold">
            Email Us
          </div>
          <div class="w-1/5 opacity-0">.</div>
        </button>

        <h2 class="my-3 italic">Dedicated to dogs ...</h2>

        <button class="primary w-full border border-white p-0 m-0 p-3 text-center">Share</button> 
      </div>

      <div id="footers__contact-methods" class="flex text-white text-sm p-6">
        <div class="w-1/2">
          Kim Potter (Dedicated to Dogs)<br>
          River Bend Loddon Drive, Wargrave, Reading,<br>
          Postcode: RG10 8HL
        </div>
        <div class="w-1/2 text-right">
          <a href="tel: +44 7941 392 521">07941 392 521</a><br>
          <a href="mailto:caninetrainerkp@gmail.com" class="underline hover:no-underline">caninetrainerkp@gmail.com</a>
        </div>
      </div>

      <div id="footers__sitemap" class="text-center">
        <nav>
          <ul>
            <li class="active"><a href="">Home</a></li>
            <li><a href="">About Me</a></li>
            <li><a href="">Dog Training</a></li>
            <li><a href="">Lovable Rogues Gallery</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div id="footers__review" class="text-center m-6">
        <img src='~/assets/google-reviews-300x126.png' class='mx-auto w-40'>
      </div>

      <div id="footers__legal" class="text-center bg-grey-300">
          <nav class="relative overflow-hidden">

            <ul class="flex justify-center flex-row wrap">
              <li class="active"><a href="">Privacy and Cookie Policy</a></li>
              <li>Software Development by <a href="https://howapped.com">HowApped</a></li>
            </ul>
          </nav>
      </div>

    </section> <!-- /.footers -->
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import KeywordBanner from '~/components/KeywordBanner.vue'

export default {
  components: {
    Header, KeywordBanner
  },
  methods:{
    isPage(name) {
      if (this.$route.name == name) {
        return true;
      }
    },
    scrollToTop() {
      window.scrollTo({ top:0, behavior: 'smooth' })
    }
  },
  asyncData() {},
  data() {
    return {}
  },
}
</script>

<style>

h2, h2.primary {
  @apply text-2xl text-blue-200 font-extrabold
}

h2.secondary {
  @apply text-black
}

p {
  @apply text-sm
}

p a {
  @apply underline
}

a {
  @apply outline-none
}

nav li.active {
  @apply text-blue-100
}

button {
  @apply text-sm p-3 px-12 text-white m-3
}
button.primary, button.secondary:hover {
  @apply bg-blue-200 
}

button.primary:hover, button.secondary {
  @apply bg-black
}

.main-content {
  @apply mt-16
}

.scroll-icon-container {
  top:85%
}

.testimonial {
    @apply mt-4 italic text-sm
}

.testimonial .author {
    @apply not-italic
}

#home-youtube-embed {
  min-height:30rem;
  @apply w-full
}

#contact-form {
  @apply p-6 bg-grey-200
}
#contact-form .row {
  @apply mb-4 block text-black
}

#contact-form .row label {
  @apply mb-3 text-xs
}

#footers {
  @apply text-black
}

#contact-form .row input[type=text], #contact-form textarea {
  @apply w-full border-blue-200 border p-1 block
}

#contact-form textarea {
  @apply h-48
}

#footers__legal nav {
  @apply p-2
}

#footers__legal nav li {
  flex-basis: auto;
  margin: 0.25em 0;
  padding:0 1em;
  text-align:center;
 border-left: 1px solid #ccc;
  @apply flex-grow-0
}

#footers__legal nav li:first-child {
 border-left: 0px
}

#footers__legal a {
  @apply underline
}


#footers nav li {
  @apply text-sm text-white
}


#footers nav li.active a {
  @apply text-blue-100
}


div.service-features .hen-banner .cover {
  background-image: url('~assets/hen.png');
  @apply bg-scroll bg-no-repeat bg-cover bg-center border-none
}

section.contact-form div {
  @apply bg-grey-100
}


div.service-features .service-feature {
  @apply border-blue-200 bg-white
}



/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  /* Migrate this to html */
  font-size:16px

  /* margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}

header {
  /* font-size:0.625rem */
}
.title {
  /* font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px; */
}

.subtitle {
  /* font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px; */
}

.links {
  /* padding-top: 15px; */
}
</style>
