<template>
    <div>
        <section>
            <header>
                <nav>
                    <div class="block w-2/5 md:hidden lg:hidden xl:hidden">
                        <button id="nav-toggle" 
                                @click="toggleVisibility"
                                class="flex items-center px-3 py-2 text-gray-500">
                        <svg class="h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                    <div class="logo-container md:w-full md:text-center md:text-black md:p-6">
                        <div class="left-of-logo md:w-1/3 md:text-left">
                            <div class=""><a href="mailto:caninetrainerkp@gmail.com">caninetrainerkp@gmail.com</a></div>
                            <div class="xs:hidden"><b>07941 392 521</b></div>
                        </div>
                        <div class="md:w-1/3">
                            <div class="md:w-4/5 md:mx-auto">
                                <a class="text-black no-underline hover:text-white hover:no-underline" href="#">
                                    <nuxt-link to="/"><img src='~/assets/logo.png' class='mx-auto md:w-full md:h-full md:object-cover' id='logo'></nuxt-link>
                                </a>
                            </div>
                        </div>
                        <div class="right-of-logo md:w-1/3">
                           <div><em>"Dedicated to dogs"</em></div>
                        </div>
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
                            <nuxt-link to="/" class="inline-block py-2 px-4 no-underline">Home</nuxt-link>
                        </li>
                        <li class="mr-3">
                            <nuxt-link to="/About-Me" class="inline-block py-2 px-4 no-underline">About Me</nuxt-link>
                        </li>
                        <li class="mr-3">
                            <nuxt-link to="/dog-training" class="inline-block py-2 px-4 no-underline">Dog Training</nuxt-link>
                        </li>
                        <li class="mr-3">
                            <nuxt-link to="/gallery" class="inline-block py-2 px-4 no-underline">Loveable Rogues Gallery</nuxt-link>
                        </li>

                        <li class="mr-3">
                            <nuxt-link to="/testimonials" class="inline-block py-2 px-4 no-underline">Testimonials</nuxt-link>
                        </li>

                        <li class="mr-3">
                            <nuxt-link to="/contact" class="inline-block py-2 px-4 no-underline">Contact</nuxt-link>
                        </li>
                    </ul>
                </div>
                </nav>
            </header>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isUncollapsed: false
        }
    }, 
    methods: {
        toggleVisibility () {
            this.isUncollapsed = !this.isUncollapsed
        },
    }
}
</script>

<style scoped>

#logo {
  width:130px;
  height:48px
}

nav {
    @screen sm {
        @apply flex items-center justify-between 
        flex-wrap bg-blue-100 p-0 fixed w-full z-10 
        top-0 shadow-xl
    }
    /* iPad Portrait = md */
    @screen md {
        @apply shadow-2xl    
    }
}

.logo-container {
    @screen sm {
        @apply flex w-3/5 items-center flex-shrink-0 text-white
    }

    @screen md {

    }
}

#nav-content li.active a {
    @apply text-blue-200
}
</style>