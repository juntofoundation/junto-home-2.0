
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
                        <img slot="packMemberPhoto" class="packMember__photo--image" src="../../../assets/images/junto-home-2.0__headshot--drea.png" alt="">        
                    </div>
                    <div class="packMember__socials">
                        <img src="" alt="" class="packMember__social">
                    </div>
                </div>
                <div class="packMember__right">
                    <h2 slot="packMemberName" class="packMember__name">Drea Bennett</h2>
                    <h2 slot="packMemberTitle" class="packMember__title">Creative Director</h2>            
                    
                    <p class="packMember__bio">
                        hELLoO I’m Drea. 
                        <br><br>
                        Find me harmonizing meows with my cats, crafting spaces of primarily oriental rugs, colored lighting and plants, falling off my skateboard, aspiring to be the most nonjudgmental version of myself, drifting in a sea of mac demarco, consuming mass amounts of cauliflower, and pretending I stopped caring about astrology a few years back. Most importantly, my favorite line is a spiral. 
                        <br><br>
                        In august of 2017, Yas and I decided that technology in its current form is kind of tearing us all apart. By the time I cease to exist, I will have spent multiple YEARS of my life staring at a screen just like the one I’m using to type right now. Even if you don’t spend your days constructing an unintentionally egotistical cyber-identity from which you inadvertently begin to draw your self-worth from, you’re probably still using your phone as a social crutch from time to time. 
                        <br><br>
                        So if technology HAS the potential to structure connections that foster the depth and creativity we are all capable of, why aren’t we using it this way ???? 
                        <br><br>
                        Hopefully, we’ve thought of everything. But when you do notice something that could improve, don’t hesitate to reach out so we can make it happen. 
                        <br><br>
                        : )                        
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