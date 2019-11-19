<template>
  <div>
    <button class="share-button primary">Share</button> 
    <div id="social-sharing-container">
        <social-sharing url="https://kimpotterdogtraining.co.uk"
                    title="Dog behaviourist | Kim Potter (Dedicated to Dogs)"
                    description="Does your dog have behavioural problems? Do you want an experienced dog behaviourist to help your pet? I offer home visits to make it easy for you and your pet. Kim Potter (Dedicated to Dogs) works with clients across Berkshire, Thames Valley, Oxford and London. Get in touch with me for more details."
                    quote="Dog behaviourist | Kim Potter (Dedicated to Dogs)"
                    hashtags="Dog Training,Dog Behaviourist,dog training Berkshire"
                    twitter-user=""
                    inline-template>
        <div>
            <network network="facebook" class="px-2 py-1 border border-white rounded-lg mr-3 cursor-pointer opacity-50 hover:opacity-100">
                <i class="fa fa-facebook"></i> Share
            </network>
            <!-- <network network="whatsapp" class="md:hidden px-2 py-1 border border-white rounded-lg">
                <i class="fa fa-whatsapp"></i> Share
            </network> -->
            <network network="twitter" class="px-2 py-1 border border-white rounded-lg mr-3 cursor-pointer opacity-50 hover:opacity-100">
                <i class="fa fa-twitter"></i> Share
            </network>
            <network network="linkedin" class="px-2 py-1 border border-white rounded-lg mr-3 cursor-pointer opacity-50 hover:opacity-100">
                <i class="fa fa-linkedin"></i> Share
            </network>
            <network network="email"  class="px-2 py-1 border border-white rounded-lg cursor-pointer opacity-50 hover:opacity-100">
                <i class="fa fa-envelope"></i> Email
            </network>
        </div>
        </social-sharing>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.share-button {
    @apply hidden w-full border border-white p-0 m-0 p-3 text-center
    /* 
        Hiding the mobile [SHARE] button because we can resposively
        style it with tailwind
    */
}
#social-sharing-container {
    @apply mt-4 text-center text-xl 
}

@screen md {
    .share-button { @apply hidden }
}
</style>