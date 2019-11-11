<template>
    <div>
        <section>
            <div class="service-features">
                <div class='keyword-banner p-12' v-show="!isPage('contact')">
                    <div v-show="isPage('index') || isPage('dog-training')">
                    <h2 class="mb-2">Kim Potter (Dedicated to Dogs) was founded in 1995.</h2>
                    <h2>Call me on 07941 392 521 to discuss your pet's requirements.</h2>
                    </div>

                    <div v-show="isPage('About-Me')">
                    <h2>Call me on 07941 392 521 to find out more about my dog training work.</h2>
                    </div>

                    <div v-show="isPage('gallery')">
                    <h2>Call me on 07941 392 521 to find out more about my dog behaviour services.</h2>
                    </div>

                    <div v-show="isPage('testimonials')">
                    <h2>Contact me on 07941 392 521 to find out more about my dog training.</h2>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  methods:{
    isPage(name) {
      if (this.$route.name == name) {
        return true;
      }
    }
  },
}
</script>

<style>

.keyword-banner {
  background-image: url('~assets/pawbg.png');
  background-color: rgba(0,126,205,1);
  background-repeat: no-repeat;
  background-size:cover;

  @apply text-center pt-6 pb-6
}
.keyword-banner h2 {
  @apply p-0 text-xl font-bold text-white
}
</style>