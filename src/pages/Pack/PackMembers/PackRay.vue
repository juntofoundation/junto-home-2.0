
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
                        <img slot="packMemberPhoto" class="packMember__photo--image" src="../../../assets/images/junto-home-2.0__headshot--ray.png" alt="">        
                    </div>
                    <div class="packMember__socials">
                        <img src="" alt="" class="packMember__social">
                    </div>
                </div>
                <div class="packMember__right">
                    <h2 slot="packMemberName" class="packMember__name">Raymond Powell</h2>
                    <h2 slot="packMemberTitle" class="packMember__title">Advisor, Founder of CoGov</h2>            
                    
                    <p class="packMember__bio">
                        Ray started programming computers at the age of 7 and by the age of 19 was hired as a professional software engineer. Since then, he has stayed on the cutting edge of industry trends and he now applies that knowledge to co-create systems and blueprints that take on some of today’s most complex social problems.
                        <br><br>
                        Becoming an entrepreneur and obtaining success as a young man, in parallel with awakening to the reality of a world filled with oppression, Ray set out to create true inner wealth beyond money. He has been a pioneer in truly defining sovereignty, and revealing how from that place, people can create environments of true synergistic co-creation.
                        <br><br>
                        From capitalist, to activist, Ray has been bringing awareness to what was really going on in the world since 2007. When Ray became a father, he was pushed him even further along in the discovery of how to create profound changes in our political, social, and economical systems.

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