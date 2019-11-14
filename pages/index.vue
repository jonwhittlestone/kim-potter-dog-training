<template>
  <div>
    <!-- page -->
    <section class='hero'>
      <div class='main-content text-center'>
        <div class="row">
          <div class="col">
            <h1 class="text-3xl font-extrabold leading-normal">Professional Dog Behaviourist offering home visits in Reading, Berkshire, Thames Valley, Oxford &amp; London</h1>
            <button class='primary'><nuxt-link to="/About-Me">About Me</nuxt-link></button>
          </div>
          <div class="col">
            <img class="mx-auto w-full rounded" src='~/assets/kim_potter_dog_training_reading_berkshire.jpg'>
          </div>
        </div>

      </div>
    </section>

    <section class='marketing-summary'>
      <div class="p-6 text-center pt-0">
        <div class='row'>
          <div class="col summary">
            <h2>Professional dog trainer</h2>
            <p class="p-2">
              As a professional dog behaviourist and trainer, with over 25 years' experience, I am truly dedicated to dogs. Welcome to my website. Dogs are such fun, so intelligent, loving and loyal - and they ask so little from us.
            </p>
            <p class="p-2">
              As dog owners, we love them to bits, but we don't always understand them: they are still hunting, scavenging, sexual, pack animals, with their associated needs which often differ from ours. Let me teach you how to 'think dog'.
            </p>
            <button class="secondary">Testimonials</button>
          </div>
          <div class="col video">
            <h2 class="mb-4">Think like a dog</h2>
            <iframe id="home-youtube-embed" 
                  src="https://www.youtube.com/embed/3dILNZbqhp4" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- section.service-features -->
    <section>
        <div class='service-features'>
          <div class='services-features-inner'>
            <!-- single service-feature -->
            <div class='service-feature'>
              <img src='~/assets/icon-dog.png' class='w-24 mx-auto'>
              <h3 class='text-blue-200 font-bold'>I have over 20 years of experience as a professional trainer</h3>
            </div>

            <!-- single service-feature -->
            <div class='service-feature'>
              <img src='~/assets/icon-walkies.png' class='w-24 mx-auto'>
              <h3 class='text-black font-bold'>I can help customers with difficult dogs that might be rehomed or put down</h3>
            </div>

            <!-- single service-feature -->
            <div class='service-feature'>
              <img src='~/assets/icon-pawprint.png' class='w-24 mx-auto'>
              <h3 class='text-blue-200 font-bold'>I have worked throughout the UK and Europe</h3>
            </div>

            <!-- single service-feature -->
            <div class='service-feature border-b-2'>
              <img src='~/assets/icon-fetch.png' class='w-24 mx-auto'>
              <h3 class='text-black font-bold'>I offer home visits for your convenience</h3>
            </div>

          </div>

            <div class='hen-banner text-center'>
              <div class='cover'><h4>&nbsp;</h4></div>
              <div class='service-outline bg-white px-4'>
                  <h2 class="p-3">Your dog needs to fit in with your lifestyle!</h2>
                  <p class="p-3">
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
export default {
  components: {},
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
      this.isUncollapsed = !this.isUncollapsed
    },
  }
}
</script>

<style scoped>

#home-youtube-embed {
  min-height:30rem;
  @apply w-full
}

div.services-features-inner {
  @apply mx-auto bg-blue-100 w-full p-6 pb-12 flex flex-col
}

div.service-features .service-feature {
  @apply border-blue-200 bg-white border-l-2 border-r-2 border-t-2 p-8 
  text-center flex flex-col
}

div.service-features .hen-banner .cover {
  background-image: url('~assets/hen.png');
  @apply bg-scroll bg-no-repeat bg-cover bg-center border-none p-10
}

section.contact-form div { @apply bg-grey-100 }

@screen md {
  h1 {@apply text-left}
  section.hero button.primary {@apply float-left ml-auto}
  section.marketing-summary .summary { @apply text-left }
  section.marketing-summary p { @apply text-lg }
  section.marketing-summary .video { @apply pl-4 }
  div.services-features-inner { @apply flex-row }
  .service-feature { @apply w-1/4 mr-4 border-b-2 }
  .service-feature:last-child { @apply mr-0 }
  .hen-banner { @apply flex }
  .hen-banner .cover, .hen-banner .service-outline { @apply w-1/2 }
  .hen-banner .service-outline { @apply text-left py-8 }

}

</style>
