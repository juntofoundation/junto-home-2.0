
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
                        <img slot="packMemberPhoto" class="packMember__photo--image" src="../../../assets/images/junto-home-2.0__headshot--kyle.png" alt="">        
                    </div>
                    <div class="packMember__socials">
                        <img src="" alt="" class="packMember__social">
                    </div>
                </div>
                <div class="packMember__right">
                    <h2 slot="packMemberName" class="packMember__name">Kyle Hornick</h2>
                    <h2 slot="packMemberTitle" class="packMember__title">Board Member</h2>            
                    
                    <p class="packMember__bio">
                        Hey Friends! Kyle here. I’m after authenticity and self-expression and that’s why I’m off the walls excited to be a part of Junto. My journey with the team began when I reconnected with Yaz after high school. She introduced me to the movement and inspired me to pursue the creative path. 
                        <br><br>
                        A few months later I broke my collarbone while skiing and during the recovery I became interested in philosophy, spirituality, and comics. I now spend my free time combining these passions in an effort to bring the gift of personal growth to others. I’m really interested in finding things that pull me forward and right now it’s building a strong foundation of love, respect, and resilience within myself and the people around me. 
                        <br><br>
                        A few months after the collarbone break I travelled to Varanasi, India where I lived for 4 months. This place gave me the desire to take initiative to push my passions all the way. I also left with un unquenchable thirst for MASALA CHAI! 
                        <br><br>
                        These days, If I’m not making comics I can be found reading, skateboarding, journaling, loving life, dancing like a maniac, bowing to existence while listening to Alice Coltrane, playing ukulele, or hugging my friends and family. 
                        <br><br>
                        

                        Random thoughts:
                        <br><br>
                        - Morning Routine SO IMPORTANT
                        <br>
                        - Reflect, Reflect, Reflect—maintain a positive dialogue with yourself
                        <br>
                        - The highest expression of any artform is divinity
                        <br>
                        - Nothing that is worth it is easy                        
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