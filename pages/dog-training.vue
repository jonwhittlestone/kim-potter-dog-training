<template>
      <div>
        <section class='text-center'>
            <div class="main-content p-6">
                <h1 class="text-2xl pt-0 p-8 font-extrabold leading-normal">Dog Training in Berkshire, Thames Valley, Oxfordshire and London</h1>

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
            <!-- Mobile full width cover/banner -->
            <div class='mobile-banner reasons'>
                <div class="cover bg-fixed"><h4>&nbsp;</h4></div>
            </div>
            <div class="reasons-list-container p-6">
                <h2 class="secondary pb-4">What can Kim Potter do for you and your dog?</h2>
                <ul class="list-disc pb-4 px-6">
                    <li>Your dog needs to fit your lifestyle. Please tell me how you want to live with your dog and then I will teach you more than you can imagine</li>
                    <li>By the time I leave your home, I will have made sure that you know what to do for all the dog behaviours that you wanted corrected (and any potential future ones)</li>
                    <li>You will be more confident and your dog will feel that, resulting in a much more relaxed relationship</li>
                    <li>I am always happy to be phoned for any queries, free follow-up advice, general support and progress reports</li>
                    <li>Then free phone support. People truly often say that their dog is ‘so much happier’ after my dog training courses. So to find out more, please call me today</li>
                </ul>

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
            <div class='mobile-banner scarf'>
                <div class="cover bg-fixed"><h4>&nbsp;</h4></div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
.reasons-list-container li {
    @apply text-sm
}
.mobile-banner .cover {
    @apply bg-scroll bg-no-repeat bg-cover bg-top border-none p-24
}
.mobile-banner.reasons .cover {
    background-image:url('~assets/cat.jpg');
}

.mobile-banner.scarf .cover {
    background-image:url('~assets/scarf.jpg');
    @apply p-20
}

.testimonial {
    @apply mt-4 italic text-sm
}
</style>