
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
                        <img slot="packMemberPhoto" class="packMember__photo--image" src="../../../assets/images/junto-home-2.0__headshot--art.png" alt="">        
                    </div>
                    <div class="packMember__socials">
                        <img src="" alt="" class="packMember__social">
                    </div>
                </div>
                <div class="packMember__right">
                    <h2 slot="packMemberName" class="packMember__name">Arthur Brock</h2>
                    <h2 slot="packMemberTitle" class="packMember__title">Advisor, Co-founder of Holochain</h2>            
                    
                    <p class="packMember__bio">
                        Arthur is the co-founder of Holochain and Holo, which are stepping stones towards
                        fulfilling other projects he co-founded called Ceptr and MetaCurrency.
                        <br><br>
                        Arthur Brock has a history of building targeted currencies which shape the social dynamics of our emerging post-industrial economy. He has created more than a hundred designs for multi-currency systems and his software company has built and deployed dozens of those systems.
                        <br><br>
                        Initially, Arthur put his experience Artificial Intelligence to use at GM, Chrysler & Hughes, but shifted his focus to building intelligence into social architectures rather than to computers. He started student-run schools and award-winning, employee-run businesses and discovered the engine that runs these types of organizations involve specific patterns of incentives and feedback. He began to unlock secrets of the Social DNA by which people operate and the critical role of currencies for programming these patterns. 
                        <br><br>
                        Arthur’s designs include currency systems for: collaborative scientific research, sustainable fishery management, corporate compensation plans, employee stock options, community-based economic development, business barter and exchange, triple-bottom-line trade credits, open source software development, customer loyalty programs, water rights, recirculating gift certificates, community service, employee performance management, arts & culture development, efficient resource sharing & management, and community & environmental impact assessment.                        
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