<template>
  <div>
        <section class='hero text-center'>
            <div class="main-content p-6">
                <h1 class="text-2xl pt-0 p-8 font-extrabold leading-normal">Assisting with your dog behavioural and training issues</h1>
                <p>
                    Contact Kim Potter (Dedicated to Dogs) for more details about my services. I work with clients across  Berkshire, Thames Valley, Oxford and London. Please see through the gallery below.
                </p>

                <ul class='gallery-thumbnails flex flex-wrap'>
                    <li v-for="(image, index) in images"
                        style="display:inline-block"
                        @click="openGallery(index)"
                        class="cursor-pointer w-1/3 p-2"
                    >
                        <img
                            v-lazy="image.src"
                            class="h-full w-full object-cover">
                    </li>

                </ul>
            </div>
            <client-only>
                <light-box 
                    :images="images" 
                    ref="lightbox"
                    :show-caption="false"
                    :show-light-box="false"
                />
            </client-only>
            <div class="mt-0 main-content p-6 pt-0">
                <h2>Dog behaviourist</h2>
                <p> 
                    Kim Potter (Dedicated to Dogs) has over 20 years of experience. I offer dog training at reasonable prices. Contact me today.
                </p>
            </div>
        </section>
   </div>
</template>


<script>
const images = [
  {
    thumb: '/img/gallery/6670177_196x248.jpg',
    src: '/img/gallery/6670177_196x248.jpg',
    caption: '',
  },

  {
    thumb: '/img/gallery/2_6670193.jpg',
    src: '/img/gallery/2_6670193.jpg',
    caption: '',
  },

  {
    thumb: '/img/gallery/3_6704988.jpg',
    src: '/img/gallery/3_6704988.jpg',
    caption: '',
  },
  {
    thumb: '/img/gallery/4_6670180.jpg',
    src: '/img/gallery/4_6670180.jpg',
    caption: '',
  },
  {
    thumb: '/img/gallery/5_6670183.jpg',
    src: '/img/gallery/5_6670183.jpg',
    caption: '',
  },
  {
    thumb: '/img/gallery/6_6670185.jpg',
    src: '/img/gallery/6_6670185.jpg',
    caption: '',
  },
  {
    thumb: '/img/gallery/7_6670179.jpg',
    src: '/img/gallery/7_6670179.jpg',
    caption: '',
  },
  {
    thumb: '/img/gallery/8_6670187.jpg',
    src: '/img/gallery/8_6670187.jpg',
    caption: '',
  },
  {
    thumb: '/img/gallery/9_6670189-5666b103.jpg',
    src: '/img/gallery/9_6670189-5666b103.jpg',
    caption: '',
  },
  {
    thumb: '/img/gallery/10_6670192.jpg',
    src: '/img/gallery/10_6670192.jpg',
    caption: '',
  },
  {
    thumb: '/img/gallery/11_6670196.jpg',
    src: '/img/gallery/11_6670196.jpg',
    caption: '',
  },
  {
    thumb: '/img/gallery/12_6670197.jpg',
    src: '/img/gallery/12_6670197.jpg',
    caption: '',
  },
]

export default {

    methods: {
        openGallery(index) {
            this.$refs.lightbox.showImage(index)
        }
    },
    data() {
        return {images}
    },

}
</script>

<style>

</style>