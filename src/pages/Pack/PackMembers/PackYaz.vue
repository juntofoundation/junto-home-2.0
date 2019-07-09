
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
                        <img slot="packMemberPhoto" class="packMember__photo--image" src="../../../assets/images/junto-home-2.0__headshot--yaz.png" alt="">        
                    </div>
                    <div class="packMember__socials">
                        <img src="" alt="" class="packMember__social">
                    </div>
                </div>
                <div class="packMember__right">
                    <h2 slot="packMemberName" class="packMember__name">Yaz Owainati</h2>
                    <h2 slot="packMemberTitle" class="packMember__title">Head of Outreach</h2>            
                    
                    <p class="packMember__bio">
                        Hi - I’m Yaz!! Firstly, I’m flattered that you clicked on me. 
                        <br><br>
                        Aside from impromptu dancing, making and listening to music are definitely some of my top priorities. I’m heavily influenced by 80s synth pop, but enjoy a range of styles from heavier beats, rap, indie rock, dreamy-sounding tunes and everything in between. Outside the realm of auditory experience, I’m very partial to lounging with kittens. A lover of rabbithole-esque conversation, unstructured and frequent writing, enthusiastic peoples and sun! 
                        <br><br>
                        My best pal, Drea, serendipitously met Eric in August of 2017 and I met him soon after. Having extensively contemplated the implications of social interactions facilitated by technology, I was astounded when I heard about the concept Eric was working on. When offered the opportunity to join the team, I decided to leave my junior year at the University of Rochester and move to NYC to fully dedicate myself to materializing this idea. 
                        <br><br>
                        In the spirit of personal creative fulfillment, I’m so happy to introduce Junto to you! You, reading this, are one of the first to see. We’re counting on word of mouth to get this off the ground. 
                        <br><br>
                        ⁃Yaz 
                        <br><br>
                        Ps. Seriously huge shoutouts to my amazing family and friends. You guys are the whole point of doing any of this!                        
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