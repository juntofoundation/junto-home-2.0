
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
                        <div class="packMember__social">
                            <img src="../../../assets/images/junto-home-2.0__email--black.png" alt="" class="packMember__social--icon">
                            <p class="packMember__social--text">drea@junto.foundation</p>
                        </div>
                    </div>
                </div>
                <div class="packMember__right">
                    <h2 slot="packMemberName" class="packMember__name">Drea Bennett</h2>
                    <h2 slot="packMemberTitle" class="packMember__title">Creative Lead</h2>            
                    
                    <p class="packMember__bio">
                        Hello! Lovely to have you here.
                        <br><br>
                        If you’re reading this, you’re likely deep-diving in the wonders of how social technology can be leveraged to complement the offline social networks we naturally form in our lives.
                        <br><br>
                        Considering the roles we adopt in the attention economy, it occurred to me that our autonomy of thought isn’t being respected in current social media platforms. Monolithic internet structures hold massive influence over society, so I encourage you to never stop questioning who owns the data we spend years of our lives accumulating - and why that data is sold.
                        <br><br>
                        Nonetheless, having a space to dynamically connect and share what’s important to us is essential. Since our brains constantly adapt to new content formats, flexibility remains paramount. We shape it, then it shapes us.
                        <br><br>
                        These reflections in mind, my contribution to Junto is multidisciplinary - but generally circulates around creative initiatives. In addition to the typical ambitions of an artist in residence, my daily activities range from video and podcast production, drafting and editing written pieces, and event facilitation to community building and input in UX design / Junto’s overall vision.
                        <br><br>
                        In the same spirit of authenticity, I also spend my time making art and music with the goal of expanding the range of possibility non-verbal communication has. If you’d like to check out where my awareness has traveled, check out my <a href="https://bydrea.space" target="blank" class="addlink"> website</a> and my art available for purchase at <a href="https://society6.com/bydrea" target="blank" class="addlink">Society6</a>.
                        <br><br>
                        Infinite gratitude to you, have a lovely day!
                        =)                    
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