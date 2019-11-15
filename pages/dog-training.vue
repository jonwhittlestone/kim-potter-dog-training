<template>
      <div>
        <section class='hero text-center'>
            <div class="main-content">
                <h1>Dog Training in Berkshire, Thames Valley, Oxfordshire and London</h1>
                <div class="row">
                    <div class="col copy">
                        <h2 class='secondary'>What is dog training?</h2>
                        <p class="mb-4">
                            We must use our touch, voice and body language, always in a calm, defined and consistent way, so that your dog can fully understand you.
                        </p>
                        <p class="mb-4">
                            We want to win them mentally by having firm but fair boundaries and making ourselves fun to be with, so that they want to please us.
                        </p>
                        <p class="mb-4">
                            There is no excuse at all for any shouting or smacking, I will help you work with a variety of issues such as dog aggression problems.
                        </p>
                        <p>
                            To view some images of the professional dog training I provide, <nuxt-link to="/gallery">please feel free to view my dog training gallery.</nuxt-link>
                        </p>
                    </div>

                    <div class="col desktop-img-container">
                        <img class="mx-auto w-full rounded" src='~assets/puppy.jpg'>
                    </div>
                </div>
            </div>
        </section>
        <section class=''>
            <!-- Mobile full width cover/banner -->
            <div class='mobile-banner reasons'>
                <div class="cover"><h4>&nbsp;</h4></div>
            </div>

            <div class="reasons-list-container">
                <div class="row">
                    <div class="col banner">
                        <img class="mx-auto w-full rounded" src='~assets/cat.jpg'>
                    </div>
                    <div class="col copy">
                        <h2 class="secondary pb-4">What can Kim Potter do for you and your dog?</h2>
                        <ul class="list-disc pb-4 px-6">
                            <li>Your dog needs to fit your lifestyle. Please tell me how you want to live with your dog and then I will teach you more than you can imagine</li>
                            <li>By the time I leave your home, I will have made sure that you know what to do for all the dog behaviours that you wanted corrected (and any potential future ones)</li>
                            <li>You will be more confident and your dog will feel that, resulting in a much more relaxed relationship</li>
                            <li>I am always happy to be phoned for any queries, free follow-up advice, general support and progress reports</li>
                            <li>Then free phone support. People truly often say that their dog is ‘so much happier’ after my dog training courses. So to find out more, please call me today</li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col copy">
                        <h2 class="secondary pb-4">What results can you expect?</h2>
                        <ul class="list-disc pb-4 px-6">
                            <li>Introducing your new pet to children/pets</li>
                            <li>Puppy house trained</li>
                            <li>Puppy toilet trained</li>
                            <li>No pulling on lead</li>
                            <li>No barking or biting</li>
                            <li>No dog aggression problems</li>                    
                            <li>Can be left alone</li>                    
                            <li>No separation anxiety issues</li>                    
                            <li>Fun, safe recall</li>                    
                            <li>Good social manners indoors and out</li>                    
                            <li>Plus so much more...</li>                    
                        </ul>
                        <nuxt-link to="/contact"><button class="primary">Contact</button></nuxt-link>
                    </div>

                    <div class="col banner">
                        <img class="mx-auto w-full rounded" src='~assets/scarf.jpg'>
                    </div>
                </div>
            </div>
            <div class='mobile-banner scarf'>
                <div class="cover"><h4>&nbsp;</h4></div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
.reasons-list-container { @apply p-6 }
.reasons-list-container li { @apply text-sm }
.reasons-list-container .row:not(:first-child) {@apply mt-6}
.mobile-banner .cover {
    @apply bg-no-repeat bg-cover bg-top border-none p-24
}
.mobile-banner.reasons .cover {
    background-position: 50% 22% !important;
    background-image:url('~assets/cat.jpg');
}

.mobile-banner.scarf .cover {
    background-position: 50% 15% !important;
    background-image:url('~assets/scarf.jpg');
    @apply p-32
}

.testimonial {
    @apply mt-4 italic text-sm
}

@screen lg {
  .reasons-list-container {@apply px-16}
}

@screen xl {
  .reasons-list-container {@apply px-32}
}
</style>