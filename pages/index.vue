<template>
  <div>
    <!-- page -->
    <section>
      <div class='main-content mt-16 p-6 text-center'>
        <h1 class="text-3xl font-extrabold leading-normal">Professional Dog Behaviourist offering home visits in Reading, Berkshire, Thames Valley, Oxford &amp; London</h1>

        <button class='primary'><nuxt-link to="/About-Me">About Me</nuxt-link></button>

        <img class="mx-auto w-full rounded" src='~/assets/kim_potter_dog_training_reading_berkshire.jpg'>
      </div>
    </section>

    <section>
      <div class="p-6 text-center pt-0">

        <h2>Professional dog trainer</h2>
        <p class="p-2">
          As a professional dog behaviourist and trainer, with over 25 years' experience, I am truly dedicated to dogs. Welcome to my website. Dogs are such fun, so intelligent, loving and loyal - and they ask so little from us.
        </p>
        <p class="p-2">
          As dog owners, we love them to bits, but we don't always understand them: they are still hunting, scavenging, sexual, pack animals, with their associated needs which often differ from ours. Let me teach you how to 'think dog'.
        </p>

        <button class="secondary">Testimonials</button>

        <h2 class="mb-4">Think like a dog</h2>
        <iframe id="home-youtube-embed" 
              src="https://www.youtube.com/embed/3dILNZbqhp4" 
              frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen></iframe>

      </div>
    </section>

    <!-- section.service-features -->
    <section>
        <div class='service-features'>
          <div class='mx-auto bg-blue-100 w-full p-6 pb-12 flex flex-col'>
            <!-- single service-feature -->
            <div class='service-feature border-l-2 border-r-2 border-b-2 border-t-2 border-gray-600 p-8 text-center flex flex-col'>
              <img src='~/assets/icon-dog.png' class='w-24 mx-auto'>
              <h3 class='text-blue-200 font-bold'>I have over 20 years of experience as a professional trainer</h3>
            </div>

            <!-- single service-feature -->
            <div class='service-feature border-l-2 border-r-2 border-b-2 border-gray-600 p-8 text-center flex flex-col'>
              <img src='~/assets/icon-walkies.png' class='w-24 mx-auto'>
              <h3 class='text-black font-bold'>I can help customers with difficult dogs that might be rehomed or put down</h3>
            </div>

            <!-- single service-feature -->
            <div class='service-feature border-l-2 border-r-2 border-b-2 border-gray-600 p-8 text-center flex flex-col'>
              <img src='~/assets/icon-pawprint.png' class='w-24 mx-auto'>
              <h3 class='text-blue-200 font-bold'>I have worked throughout the UK and Europe</h3>
            </div>

            <!-- single service-feature -->
            <div class='service-feature border-l-2 border-r-2 border-b-2 border-gray-600 p-8 text-center flex flex-col'>
              <img src='~/assets/icon-fetch.png' class='w-24 mx-auto'>
              <h3 class='text-black font-bold'>I offer home visits for your convenience</h3>
            </div>

          </div>

            <div class='hen-banner text-center'>
              <div class='cover bg-fixed p-16'><h4>&nbsp;</h4></div>
              <div class='service-outline bg-white px-4'>
                  <h2 class="p-3">Your dog needs to fit in with your lifestyle!</h2>
                  <p>
                    We need to know how to communicate our wishes to them and how to change their behaviours which get them into trouble. With this in mind, I provide home visits throughout Berkshire, Oxfordshire, Thames Valley and London, specialising in one-to-one personalised dog training sessions at your home and walking areas to suit your specific needs.
                  </p>

                  <button class='secondary'>Give me a call</button>
              </div>
            </div> <!-- / .hen-banner -->
        </div> 
    </section>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  asyncData() {
    if (process.client) {
      // document.getElementById('nav-toggle').onclick = function(){
        // document.getElementById("nav-content").classList.toggle("hidden");
      // }
    }
  },
  data() {
    return {
      example: 'something...',
      isUncollapsed: false
    }
  },
  methods: {
    toggleVisibility () {
      console.log('clicked');
      this.isUncollapsed = !this.isUncollapsed
    },
  }
}
</script>

<style scoped>
/* Refactor to Component - header */
#header nav {
    /* @apply lg:bg-grey-300 */
}
#nav-content li.active a {
  @apply text-blue-200
}
/* /Refactor to Component - header */

#home-youtube-embed {
  min-height:30rem;
  @apply w-full
}

div.service-features .hen-banner .cover {
  background-image: url('~assets/hen.png');
  @apply bg-scroll bg-no-repeat bg-cover bg-center border-none
}

.founded-banner {
  background-image: url('~assets/pawbg.png');
  background-color: rgba(0,126,205,1);
  background-repeat: no-repeat;
  background-size:cover;

  @apply text-center pt-6 pb-6
}
.founded-banner h2 {
  @apply p-0 text-xl font-bold text-white
}

section.contact-form div {
  @apply bg-grey-100
}


div.service-features .service-feature {
  @apply border-blue-200 bg-white
}

.container {
  /* Migrate this to html */
  font-size:16px
}

</style>
