<template>
    <div>
        <section>
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
            console.log('clicked');
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

#header nav {
    /* @apply lg:bg-grey-300 */
}
#nav-content li.active a {
@apply text-blue-200
}
</style>