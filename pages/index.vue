<template>
  <div class="w-full text-base font-sans">
    <section>
      <div>
        <header>
            <nav class="flex items-center justify-between flex-wrap bg-blue-100 p-0 fixed w-full z-10 top-0 shadow-xl">
              <div class="block w-2/5 lg:hidden">
                <button id="nav-toggle" 
                        @click="toggleVisibility"
                        class="flex items-center px-3 py-2 text-gray-500">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
              </div>
              <div class="flex w-3/5 items-center flex-shrink-0 text-white">
                <div></div>
                <div>
                  <a class="text-black no-underline hover:text-white hover:no-underline" href="#">
                    <img src='~/assets/logo.png' class='mx-auto' id='logo'>
                  </a>
                </div>
                <div></div>
              </div>

              <!-- to hide menu, add 'hidden' class -->
              <div  :class="{'hidden': !isUncollapsed}"
                    class="w-full flex-grow
                    pt-6
                    lg:flex lg:items-center lg:w-auto lg:block lg:pt-0 lg:bg-blue-200" 
                    id="nav-content">
                <ul class="list-reset lg:flex justify-end 
                          flex-1 items-center">
                  <li class="active mr-3">
                    <a class="inline-block py-2 px-4 no-underline" href="#">Home</a>
                  </li>
                  <li class="mr-3">
                    <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">About Me</a>
                  </li>
                  <li class="mr-3">
                    <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">Dog Training</a>
                  </li>
                  <li class="mr-3">
                    <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">Lovable Rogues Gallery</a>
                  </li>

                  <li class="mr-3">
                    <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">Testimonials</a>
                  </li>

                  <li class="mr-3">
                    <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          <!-- <logo /> -->
        </header>
      </div>
    </section>
    <section>
      <div class='mt-24 p-6 text-center'>
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
            </div>

            <div class='founded-banner'>
                <h2 class="mb-2">Kim Potter (Dedicated to Dogs) was founded in 1995.</h2>
                <h2>Call me on 07941 392 521 to discuss your pet's requirements.</h2>
            </div>
        </div>
    </section>

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
          <a href=":+44 7941 392 521">07941 392 521</a><br>
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
              <li>Powered by <a href="https://howapped.com">HowApped</a></li>
            </ul>
          </nav>
      </div>
    </section> <!-- /.footers -->
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

<style>
a {
  @apply outline-none
}

#logo {
  width:130px;
  height:48px
}
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

h2 {
  @apply text-2xl text-blue-200 font-extrabold
}

p {
  @apply text-sm
}

#footers nav li {
  @apply text-sm text-white
}


#footers nav li.active a {
  @apply text-blue-100
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
