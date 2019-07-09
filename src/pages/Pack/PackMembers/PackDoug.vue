
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
                        <img slot="packMemberPhoto" class="packMember__photo--image" src="../../../assets/images/junto-home-2.0__headshot--rushkoff.png" alt="">        
                    </div>
                    <div class="packMember__socials">
                        <img src="" alt="" class="packMember__social">
                    </div>
                </div>
                <div class="packMember__right">
                    <h2 slot="packMemberName" class="packMember__name">Douglas Rushkoff</h2>
                    <h2 slot="packMemberTitle" class="packMember__title">Advisor, Author of Team Human</h2>            
                    
                    <p class="packMember__bio">
                        Named one of the “world’s ten most influential intellectuals” by MIT, Douglas Rushkoff is an author and documentarian who studies human autonomy in a digital age. His twenty books include the just-published Team Human, based on his podcast, as well as the bestsellers Present Shock, Throwing Rocks and the Google Bus, Program or Be Programmed, Life Inc, and Media Virus. He also made the PBS Frontline documentaries Generation Like, The Persuaders, and Merchants of Cool. His book Coercion won the Marshall McLuhan Award, and the Media Ecology Association honored him with the first Neil Postman Award for Career Achievement in Public Intellectual Activity.
                        <br><br>
                        Rushkoff’s work explores how different technological environments change our relationship to narrative, money, power, and one another. He coined such concepts as “viral media,” “screenagers,” and “social currency,” and has been a leading voice for applying digital media toward social and economic justice. He a research fellow of the Institute for the Future, and founder of the Laboratory for Digital Humanism at CUNY/Queens, where he is a Professor of Media Theory and Digital Economics. He is a columnist for Medium, and his novels and comics, Ecstasy Club, A.D.D, and Aleister &amp; Adolf, are all being developed for the screen.

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