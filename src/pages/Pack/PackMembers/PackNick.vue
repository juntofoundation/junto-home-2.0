
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
                        <img slot="packMemberPhoto" class="packMember__photo--image" src="../../../assets/images/junto-home-2.0__headshot--nick.png" alt="">        
                    </div>
                    <div class="packMember__socials">
                        <img src="" alt="" class="packMember__social">
                    </div>
                </div>
                <div class="packMember__right">
                    <h2 slot="packMemberName" class="packMember__name">Nick Manning</h2>
                    <h2 slot="packMemberTitle" class="packMember__title">Advisor, Software Engineer</h2>            
                    
                    <p class="packMember__bio">
                        Nick has been a software engineering mentor, writer, software craftsman and entrepreneur for over 20 years.
                        <br><br>
                        Currently, Nick is a Senior Manager of Cloud Software Engineering at Capital One. He recently launched fluttercrashcourse.com in August, 2018 and has also held engineering, tech lead and consulting positions working with various Fortune 500 companies, including Adidas, Reebok, Benefit Cosmetics and TaylorMade in the past.                        
                        <br><br>
                        As for extra curricular projects, Nick founded the largest Golang meetup in the U.S. outside of Silicon Valley, as well as the NYC Neo4j meetup. He and his wife design and write mobile apps in their free time, such as Steady Calendar and Brewswap. He also writes about technology on a regular basis.
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