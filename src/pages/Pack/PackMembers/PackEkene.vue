
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
                        <img slot="packMemberPhoto" class="packMember__photo--image" src="../../../assets/images/junto-home-2.0__headshot--ekene.png" alt="">        
                    </div>
                    <div class="packMember__socials">
                        <img src="" alt="" class="packMember__social">
                    </div>
                </div>
                <div class="packMember__right">
                    <h2 slot="packMemberName" class="packMember__name">Ekene Nkem-Mmekam</h2>
                    <h2 slot="packMemberTitle" class="packMember__title">Treasurer, Board Member</h2>            
                    
                    <p class="packMember__bio">
                        What’s good? I’m Ekene and I’m excited to see that you’re interested in Junto’s mission. Having emigrated to America from Nigeria with my family, I’ve experienced firsthand how kindness can alter the course of someone’s life. That’s why I’ve devoted a large amount of my time to social impact initiatives that I believe have potential to alleviate human suffering. I believe social media has tremendous potential to bring us together. However, until now, we’ve put our trust in companies that do not have our best interest at heart. As a society, we can and will do better. That change starts now. As treasurer and member of the board, I am dedicated to ensuring that Junto stays user-centric, open, and financially sustainable. Anything less is a breach of your trust. This is your movement; this is your team.
                        <br><br>
                        In my free time you’ll probably find me playing basketball, reading a book, writing some bad poetry, or eulogizing about the failures of our two-party system.
                        <br><br>
                        Much love homies.
                        <br><br>
                        P.S. You are fantastic. Keep doing you.                         
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