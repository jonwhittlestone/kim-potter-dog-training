<template>
      <div>
        <section class='hero text-center'>
            <!-- Mobile full width cover/banner -->
            <div class='reasons-banner'>
                <div class="cover"><span>&nbsp;</span></div>
            </div>

            <div class="mt-4 pt-6 pb-0 main-content">
                <h1 class="text-2xl pt-0 p-8 font-extrabold leading-normal">
professional dog obedience training
                </h1>
                <p>Kim Potter (Dedicated to Dogs) offers flexible hours at your home to suit you and your dog. I m an experienced dog trainer and I can offer help with dog obedience training. Contact me to find out more.</p>
                <p>
                    <b>Telephone: <a href="tel: +44 7941 392 521">07941 392 521</a></b>
                </p>

                <p><b>Email: <a href='mailto:caninetrainerkp@gmail.com'>caninetrainerkp@gmail.com</a></b></p>
                <p>
                    <b>Address:</b> Kim Potter (Dedicated to Dogs)<br>
                    River Bend, Loddon Drive, Wargrave, Reading,<br>
                    Postcode: RG10 8HL
                </p>

                <h2 class="text-left pb-0">Business Hours</h2>

                <p class="text-left pb-0 mb-0">Mon - Sun<br>Open 24 Hours</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style>

p {
    @apply mb-4
}

.reasons-banner .cover {
    background-image:url('/img/kim_potter_dog_training_happy_dog_fetch.jpg');
    background-position: 50% 42% !important;
    @apply bg-scroll bg-no-repeat bg-center border-none bg-cover pt-12 pb-64
}

@screen md {
    .reasons-banner {@apply mt-20}
}

@screen lg {
    .reasons-banner {@apply mt-20}
}

@screen xl {
    .reasons-banner {@apply mt-40}
}

</style>