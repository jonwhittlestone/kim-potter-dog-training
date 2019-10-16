<template>
  <div class="w-full">
    <header>
      <!-- <logo /> -->
      <!-- <h1 class="title">
        kim-potter-dog-training
      </h1>
      <h2 class="subtitle">
        Kim Potter Dog Training - Dedicated to dogs
      </h2> -->
     
    </header>
    <section>
      <h1>Professional Dog Behaviourist offering home visits in Reading, Berkshire, Thames Valley, Oxford &amp; London</h1>
      <button>About Me</button>
      <img src='~/assets/kim_potter_dog_training_reading_berkshire.jpg'>

    </section>
    <section>
      <h2>Professional dog trainer</h2>
      <p>
        As a professional dog behaviourist and trainer, with over 25 years' experience, I am truly dedicated to dogs. Welcome to my website. Dogs are such fun, so intelligent, loving and loyal - and they ask so little from us.
      </p>
      <p>
        As dog owners, we love them to bits, but we don't always understand them: they are still hunting, scavenging, sexual, pack animals, with their associated needs which often differ from ours. Let me teach you how to 'think dog'.
      </p>

      <button>Testimonials</button>
    </section>

    <section>
      <h2>Think like a dog</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/3dILNZbqhp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>

    <section class='service-features'>
        <div class='mx-auto bg-blue-100 w-full p-4'>

          <!-- single service-feature -->
          <div class='service-feature border-2 border-gray-600 p-3 text-center'>
            <img src='~/assets/icon-dog.png'>
            <h3>I can help customers with difficult dogs that might be rehomed or put down</h3>
          </div>

        </div>

    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>

/* Colors todo */
section.service-features .container .service-feature {
  border-color: #007ecd
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
