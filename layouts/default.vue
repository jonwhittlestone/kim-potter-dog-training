<template>
  <div class="w-full text-base font-sans">
    <the-header />
    <!-- page -->
    <nuxt />

    <div @click="scrollToTop" class="scroll-icon-container cursor-pointer text-right pr-4 pb-8 z-10 text-4xl sticky w-24 ml-auto">
      <font-awesome-icon :icon="['far', 'arrow-alt-circle-up']" class="text-green-100"/>
    </div>

    <KeywordBanner />

    <!-- section.footers - separate this to component -->
      <article v-for="msg in messages"
        :key="msg.text"
        class="message"
        :class="msg.type === 'success' ? 'is-success' : 'is-danger'">
        <div class="message-body">
          {{msg.text}}
        </div>
      </article>

    <section id="footers" class="bg-black text-white">
      <div id='contact-form'>
        <form>
          <div class='grouped-contact-details'>
            <div class="row">
              <label for="input-name">Name</label>
              <input type="text" required name="input-name" id="input-name" 
                      v-model="contactName">
            </div> 
            <div class="row">
              <label for="input-email">Email</label>
              <input type="text" name="input-email" id="input-email" 
                      v-model="contactEmail">
            </div>
            <div class="row">
              <label for="input-phone">Phone</label>
              <input type="text" required name="input-phone" id="input-phone" 
                      v-model="contactPhone">
            </div>
          </div>
          <div class="row">
            <label for="input-message">Message</label>
            <textarea id='input-message'  v-model="contactMessage"></textarea>
          </div>
          <div class="row text-center">
            <button class="primary w-3/4" @click="sendMessage">Send</button>
          </div>
        </form>


        <div id="contact-review-box" class="">
          <dl class="list text-xs p-6">
            <dt class="inline">Average Rating:</dt>
            <dd class="inline mr-4 font-bold">N/A</dd>

            <dt class="inline">Total Number of Reviews:</dt>
            <dd class="inline font-bold">0</dd>
          </dl>
        </div>
      </div>

      <div id="footers__call-to-action" class="p-6">
        <button class="btn-email-us primary ">
          <div class="w-1/5 text-left text-xl">
            <font-awesome-icon :icon="['fas', 'envelope']"/>
          </div>
          <div class="w-3/5 text-center align-middle text-xl font-bold">
            Email Us
          </div>
          <div class="w-1/5 opacity-0">.</div>
        </button>

        <h2 class="my-3 italic">Dedicated to dogs ...</h2>

        <SocialSharing />
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
            <li>
              <nuxt-link to="/" exact class="inline-block">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/About-Me" class="inline-block">About Me</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/dog-training" class="inline-block">Dog Training</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/gallery" class="inline-block">Gallery</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/testimonials" class="inline-block">Testimonials</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" class="inline-block">Contact</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>

      <div id="footers__review" class="text-center m-6">
        <a href="https://g.page/kim-potter-dog-training/review?gm"><img src='~/assets/google-reviews-300x126.png' class='mx-auto w-40'></a>

      </div>

      <div id="footers__legal" class="text-center bg-grey-300">
          <nav class="relative overflow-hidden">

            <ul class="flex justify-center flex-row wrap">
              <li>
                <nuxt-link to="privacy">Privacy and Cookie Policy</nuxt-link>
               </li>
              <li>Software Development by <a href="https://howapped.com">HowApped</a></li>
            </ul>
          </nav>
      </div>

    </section> <!-- /.footers -->
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import KeywordBanner from '~/components/KeywordBanner.vue'
import SocialSharing from '~/components/SocialSharing.vue'

export default {
  components: {
   TheHeader, KeywordBanner, SocialSharing
  },

  head () {
    const baseUrl = process.env.baseUrl
    const { path } = this.$route
    const pathWithSlash = path.endsWith('/') ? path : `${path}/`

    return {
      link: [
        {rel: 'canonical', href: `${baseUrl}${pathWithSlash}`}
      ]
    }
  },
  methods:{
    isPage(name) {
      if (this.$route.name == name) {
        return true;
      }
    },
    scrollToTop() {
      window.scrollTo({ top:0, behavior: 'smooth' })
    },
    sendMessage(e) {
      e.preventDefault();
      this.triggerSendMessageFunction();
    },
    async triggerSendMessageFunction () {
      try {
        const response = await this.$axios.$post('/.netlify/functions/send-contact-email', {
          contactName: this.contactName,
          contactEmail: this.contactEmail,
          contactPhone: this.contactPhone,
          message: this.contactMessage
        })
        this.resetForm()
        this.messages.push({ type: 'success', text: response })
      } catch (error) {
        this.messages.push({ type: 'error', text: error.response.data })
      }
    },
    resetForm() {
      this.messages = []
      this.contactName = ''
      this.contactEmail = ''
      this.contactPhone = ''
      this.contactMessage = ''
    }
  },
  asyncData() {},
  data() {
    return {
      messages: [],
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      contactMessage: ''
    }
  },
  mounted() {},
}
</script>

<style>

body {@apply text-base}

h1 { @apply text-2xl p-8 pt-0 font-extrabold leading-normal}
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

.main-content { @apply p-6 mt-16 }

.btn-email-us { @apply w-full flex border border-white p-0 m-0 p-3 }
#footers__call-to-action h2 { @apply text-left }

.col.desktop-img-container { @apply hidden }
.col.banner {@apply hidden}

@screen md {
   html {@apply text-lg}
   #nav-content { @apply text-sm shadow-xl}
   section.hero .main-content {@apply mt-48}
   .col.desktop-img-container { @apply block}
   .col.copy {@apply text-left}
   .col.copy:first-child {@apply pr-4 }
   .col.copy:last-child {@apply pl-4 }
  .col.copy p { @apply text-lg }
   h1 { @apply text-3xl p-8 pt-0 font-extrabold leading-normal}
  .main-content { @apply px-6 }
  .row {@apply flex justify-between}
  .row > .col { @apply flex-1}
  .scroll-icon-container {@apply hidden}
  .grouped-contact-details { @apply flex justify-between }
  .grouped-contact-details .row {@apply w-1/3 p-3}
  .btn-email-us { @apply hidden }
  #footers__call-to-action h2 { @apply text-center }

  .mobile-banner {@apply hidden}
  .col.banner {@apply block}
}

@screen lg {
  section.hero .main-content {@apply mt-48 px-16}
}

@screen xl {
  section.hero .main-content {@apply mt-64 pt-16 px-32}
}

.scroll-icon-container {top:85%}

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
  @apply p-6 bg-grey-200 text-black
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

#footers nav a.active {
  @apply text-blue-100 font-bold underline
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

.message .is-success {
  margin:2rem;
  color: darkgreen;
  font-weight: bold;
  text-decoration: underline;
  text-align: center;
}


</style>
