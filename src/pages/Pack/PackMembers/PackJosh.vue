
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
                        <img slot="packMemberPhoto" class="packMember__photo--image" src="../../../assets/images/junto-home-2.0__headshot--josh.png" alt="">        
                    </div>
                    <div class="packMember__socials">
                        <div class="packMember__social">
                            <img src="../../../assets/images/junto-home-2.0__email--black.png" alt="" class="packMember__social--icon">
                            <p class="packMember__social--text">josh@junto.foundation</p>
                        </div>
                         <div class="packMember__social">
                            <img src="../../../assets/images/junto-home-2.0__logo.png" alt="" class="packMember__social--icon">
                            <p class="packMember__social--text">@josh</p>
                        </div>
                    </div>
                    
                </div>
                <div class="packMember__right">
                    <h2 slot="packMemberName" class="packMember__name">Josh Parkin</h2>
                    <h2 slot="packMemberTitle" class="packMember__title">CTO &amp; Systems Architect</h2>            
                    
                    <p class="packMember__bio">
                        Aloha! Ever since I can remember I have always been obsessed with creation. Whether that be creating software, music, drones or a powerful connection it completely captivates me. When I first heard about Junto, I found something I was looking for. A social network which truly connects people, something which can create a real sense of community and inclusivity, a safe place where you can learn and share with no holding back. I'm excited to embark on this adventure with you. See you on Junto!                        
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
