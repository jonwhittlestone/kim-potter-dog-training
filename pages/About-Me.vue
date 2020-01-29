<template>
      <div>
        <section class='hero text-center'>
            <div class="main-content">
                <h1 class="">Professional behavioural and obedience training in Berkshire, Thames Valley, Oxfordshire and London</h1>
                <div class="row">
                    <div class="col about copy">
                        <h2 class='secondary'>About Kim Potter</h2>
                        <p class="mb-4">
                            As a full-time professional dog trainer and behaviourist, with over 25 years' experience, I am truly dedicated to dogs.
                        </p>
                        <p>
                            We need to know how to communicate our wishes to them and how to change their behaviours which get them into trouble. With this in mind, I provide home visits specialising in one-to-one personalised dog training sessions at your home and walking areas, to suit your specific needs. 
                        </p>
                    </div>
                    <div class="col banner">
                        <img class="mx-auto w-full rounded" src='~assets/hen.png'>
                    </div>
                </div>
            </div>
            <!-- Mobile full width cover/banner -->
            <div class='reasons-banner mobile-banner'>
                <div class="cover"><h4>&nbsp;</h4></div>
            </div>
            <!-- /Mobile full width cover/banner -->

            <div class="reasons-list-container p-6">
                <div class="row">
                    <div class="col banner">
                        <img class="mx-auto w-full rounded" src='~assets/about_banner_196x248.jpg'>
                    </div>
                    <div class="col copy">
                        <h2 class="secondary pb-4">Why rely on me as your dog trainer?</h2>
                        <ul class="list-disc pb-4 px-6">
                            <li>Over 25 years' experience</li>
                            <li>Truly dedicated to dogs</li>
                            <li>Free telephone advice</li>
                            <li>One-to-one home visits</li>
                            <li>Then free phone support</li>
                            <li>Recommended by vets</li>
                            <li>All aspects of dog training covered</li>
                            <li>Introduction of your new pet to family/pets</li>
                            <li>Personalised dog training classes/sessions to suit you &amp; your dog</li>
                            <li>I often work with Binfield Dog Rescue</li>
                        </ul>
                        <p>
                            I am experienced in dealing with all breeds including Staffy Crosses and Bull Breeds and I'm often used to correct the trickier behavioural problems. 
                        </p>
                    </div>
                </div>

                <div class='testimonial'>
                        "Kim's rapport with dogs is truly inspirational. From our first training session with our terrier dog, Misha, Kim offered encouragement and clear instructions as to how we needed to change in order to solve our problems with Misha. Kim was supportive throughout the training and is always there to offer further advice, if needed. Misha responded to Kim immediately - we had to work a little harder to gain the same respect! But we are definitely getting there and Misha, I am delighted to say, is improving every week. Thanks, Kim!"
                        - Sarah Palmer, Henley
                </div>

                <nuxt-link to="/contact"><button class="primary">Contact</button></nuxt-link>
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
.reasons-banner .cover {
    background-image:url('~assets/about_banner_196x248.jpg');
    background-position: 50% 42% !important;
    @apply bg-scroll bg-no-repeat bg-center border-none bg-cover pt-12 pb-64
}



@screen md {
    .hen-container { @apply block }
    .col.banner {@apply block}
    .col.about { @apply text-left }
    .reasons-banner { @apply hidden }
    .testimonial { @apply p-12 text-lg}
}

</style>