
<template>
    <div class="pack">
        <!-- navigation -->
        <junto-nav>
            <div slot="navIcon" class="nav__icon" @click="navOpen = true">
                <a class="removelink">
                    <img src="../../../assets/images/junto-home-2.0__moon.png" alt="" class="nav__icon--image">
                </a>
            </div>                    
        </junto-nav>

        <!-- navigation -->
        <transition name="fade"> 
            <junto-nav-open v-if="navOpen">
                <img @click="navOpen = false" slot="navClose" class="navOpen__nav--icon" src="../../../assets/images/junto-home-2.0__moon--filled.png">                        
            </junto-nav-open>        
        </transition>

        <div class="packMember">
                <div class="packMember__left">
                    <div class="packMember__photo">
                        <img slot="packMemberPhoto" class="packMember__photo--image" src="../../../assets/images/junto-home-2.0__headshot--eric.png" alt="">        
                    </div>
                    <div class="packMember__socials">
                        <div class="packMember__social">
                            <img src="../../../assets/images/junto-home-2.0__email--black.png" alt="" class="packMember__social--icon">
                            <p class="packMember__social--text">eric@junto.foundation</p>
                        </div>
                    </div>
                </div>
                <div class="packMember__right">
                    <h2 slot="packMemberName" class="packMember__name">Eric Yang</h2>
                    <h2 slot="packMemberTitle" class="packMember__title">Founder, Executive Director</h2>            
                    
                    <p class="packMember__bio">
                        Hey, Eric here.
                        <br><br>
                        I'm a Houston native with parents who emigrated from Taiwan. 
                        I would not be able to do the work I am today without the
                        sacrifices they have made. 
                        <br><br>
                        The first concept of Junto came to me in the summer of 2015. The 
                        potential that consciously crafted social technologies could have 
                        on shaping more harmonious social flows, enhancing self-determination, and activating our expressive capacities
                        inspired me to dedicate the past few years manifesting this vision.
                        <br><br>
                        This has been an incredible journey so far and I'm excited to grow
                        this movement with you. Reach out if you need me and see you on Junto!
                    </p>
                </div>


        </div>        

        <!-- footer-->
        <junto-footer></junto-footer>                

    </div>
</template>

<script>
    import juntoNav from '../../../components/Nav/Nav.vue'; 
    import juntoNavOpen from '../../../components/NavOpen/NavOpen.vue';
    import juntoFooter from '../../../components/Footer/Footer.vue';

    export default {
        data() {
            return {
                navOpen: false  
            }
        },          
        components: {
            juntoNav,
            juntoNavOpen,
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