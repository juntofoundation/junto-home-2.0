
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
                        <img slot="packMemberPhoto" class="packMember__photo--image" src="../../../assets/images/junto-home-2.0__headshot--riley.png" alt="">        
                    </div>
                    <div class="packMember__socials">
                        <img src="" alt="" class="packMember__social">
                    </div>
                </div>
                <div class="packMember__right">
                    <h2 slot="packMemberName" class="packMember__name">Riley Wagner</h2>
                    <h2 slot="packMemberTitle" class="packMember__title">Secretary, Board Member</h2>            
                    
                    <p class="packMember__bio">
                    Hi, I’m Riley. 
                    <br><br>
                    I love to dance, bake cookies when I should be working, and wander through elaborate markets (farmers, flea, winter - you name it, I’m there). 
                    <br><br>

                    For the past five years I've been studying Blomberg Rhythmic Movement Training (BRMT), a primitive reflex integration program that originated in Sweden. I recently began traveling and teaching as a BRMT consultant alongside my mom, who has become my best friend and mentor throughout this journey. I’ve met so many wonderful, passionate people while attending classes and teaching with her, and seeing the positive changes that she makes in people’s lives has inspired me to pursue a career spreading this work around the world. 
                    <br><br>

                    I’ve started working towards a masters degree in occupational therapy with plans to eventually open up my own BRMT clinic. Until then, I will continue to travel, teach, and learn as much as possible about healing and wellness. 
                    <br><br>

                    And hey, no matter how crazy or stressful life can get, there’s always time for a walk in the park. 
                    <br><br>

                    Peace, love, junto
                    ✌️❤️🐺                        


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