<template>
  <div>
    <!-- page -->
    <section>
      <div class='main-content mt-16 p-6 text-center'>
        <h1 class="text-3xl font-extrabold leading-normal">Professional Dog Behaviourist offering home visits in Reading, Berkshire, Thames Valley, Oxford &amp; London</h1>

        <button class='primary'>About Me</button>

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
