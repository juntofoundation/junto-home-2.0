
<template>
    <div class="pack">
        <!-- navigation -->
        <junto-nav>
            <div slot="navIcon" class="nav__icon" @click="navOpen = true">
                <a class="removelink">
                    <img src="../../assets/images/junto-home-2.0__moon.png" alt="" class="nav__icon--image">
                </a>
            </div>                    
        </junto-nav>

        <!-- navigation -->
        <transition name="fade"> 
            <junto-nav-open v-if="navOpen">
                <p @click="navOpen = false" slot="navClose" class="navOpen__nav--item">CLOSE</p>
            
            </junto-nav-open>        
        </transition>

        <!-- pack header -->
        <junto-pack-header></junto-pack-header>

        <!-- flux-->
        <!-- <junto-flux></junto-flux>       -->

        <!-- footer-->
        <junto-footer></junto-footer>                

    </div>
</template>

<script>
    import juntoNav from '../../components/Nav/Nav.vue';
    import juntoNavOpen from '../../components/NavOpen/NavOpen.vue';
    import juntoPackHeader from '../../components/Pack/PackHeader/PackHeader.vue';
    import juntoFlux from '../../components/Flux/Flux.vue';
    import juntoFooter from '../../components/Footer/Footer.vue';

    export default {
        data() {
            return {
                navOpen: false  
            }
        },        
        components: {
            juntoNav,
            juntoNavOpen,
            juntoPackHeader,
            juntoFlux,
            juntoFooter
        }
    }
</script>


<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .2s
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }
</style>