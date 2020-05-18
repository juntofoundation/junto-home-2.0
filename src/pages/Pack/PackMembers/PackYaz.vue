
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
                        <img slot="packMemberPhoto" class="packMember__photo--image" src="../../../assets/images/junto-home-2.0__headshot--yaz.png" alt="">        
                    </div>
                    <div class="packMember__socials">
                        <div class="packMember__social">
                            <img src="../../../assets/images/junto-home-2.0__email--black.png" alt="" class="packMember__social--icon">
                            <p class="packMember__social--text">yasmin@junto.foundation</p>
                        </div>
                    </div>
                </div>
                <div class="packMember__right">
                    <h2 slot="packMemberName" class="packMember__name">Yaz Owainati</h2>
                    <h2 slot="packMemberTitle" class="packMember__title">Director of Communication &amp; Experience Design</h2>            
                    
                    <p class="packMember__bio">
                        Hellooooo. Yaz here!
                        <br><br>
                        In addition to overseeing our community and outreach initiatives, I do a variety of things from written, video, audio and visual content creation to UX related matters and event hosting!
                        <br><br>
                        I came about the Junto team through Drea, my best friend from college. She had serendipitously met Eric in August of 2017 and introduced me soon after. Having extensively contemplated the implications of social interaction facilitated by technology, I was blown away upon learning about Junto. Having heard about the first alpha test at Vanderbilt that past summer, I felt immense drive and passion to help bring the project into existence. I ended up deciding to take a leave from my junior year at the University of Rochester and move to NYC to fully dedicate myself to materializing this idea.
                        <br><br>
                        I’m a lover of rabbithole-esque conversation, unstructured writing, enthusiastic peoples, musical creation and sun! 
                        <br><br>
                        In the spirit of personal creative fulfillment, I’m so happy to introduce Junto to you!
                        <br><br>
                        ⁃Yaz 
                        <br><br>    
                        Ps. Seriously huge shoutouts to everyone who has supported this team along our journey so far. It’s been quite a ride. Veeeery excited to see what’s to come.                                             
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