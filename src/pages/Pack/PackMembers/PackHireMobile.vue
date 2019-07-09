
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
                        <img slot="packMemberPhoto" class="packMember__photo--image packMember__photo--image--hire" src="../../../assets/images/junto-home-2.0__logo--outline.png" alt="">        
                    </div>
                    <div class="packMember__socials">
                        <img src="" alt="" class="packMember__social">
                    </div>
                </div>
                <div class="packMember__right">
                    <h2 slot="packMemberName" class="packMember__name">??</h2>
                    <h2 slot="packMemberTitle" class="packMember__title">Lead Mobile Developer</h2>            
                    
                    <div class="packMember__bio">
                        Hey there! We're looking for a passionate software engineer 
                        who can lead our mobile development efforts, mentor new members moving forward,
                        and lay a strong foundation for Junto to scale with minimal friction. 
                        If you feel called to apply, please send us an email introducing yourself attached with your CV!          

                    <p class="packMember__bio--section">Why Junto</p>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text"><em>The work matters</em></p>
                    </div>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">This is an opportunity to tackle a large, meaningful problem and facilitate a more open era of human connection.</p>
                    </div>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">Junto is more than a digital interface. We plan to continue holding space for people from all walks of life in the spirit of this project.</p>
                    </div>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">You’ll be joining a diverse, non-hierarchical and tight-knit team. We invite you to co-live and create with us.</p>
                    </div>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">We are a small team, so your contributions will have significant weight. This is a leadership position with large upside for growth.</p>
                    </div>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">We value radical transparency and difficult, but necessary conversations.</p>
                    </div>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">This is a startup, so long hours are to be expected. That being said, we make an effort to prioritize self-care and ensure balance. </p>
                    </div>

                    <p class="packMember__bio--section">High Level</p>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">You feel a strong conviction to forward this cause.</p>
                    </div>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">You’re a team player who’s also comfortable in a self-directed role.</p>
                    </div>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">You are a student of your craft and pay relentless attention to detail.</p>
                    </div>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">You have a gift for simplifying and communicating technical details.</p>
                    </div>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">You believe less is more. You prefer elegant, minimalist solutions over unnecessarily rigid and complex architectures.</p>
                    </div>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">You’re interested in the potential of decentralization and are not afraid to work with new, cutting-edge technologies.</p>
                    </div>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">You measure twice and cut once. You care about doing things the right way, but know how to get things done in a timely manner.</p>
                    </div>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">You hold yourself and others around you accountable.</p>
                    </div>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">You see yourself as more than a software engineer. You want to be involved in a number of moving parts and are comfortable in a leadership position..</p>
                    </div>


                    <p class="packMember__bio--section">Specifics</p>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">You have experience building and shipping mobile, consumer-facing products.</p>
                    </div>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">You have an ability to work with design on UX/UI.</p>
                    </div>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">You are proficient in iOS, android or modern cross-platform frameworks like Flutter or React Native.</p>
                    </div>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">Experience or interest in learning Flutter is a plus.</p>
                    </div>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">Experience in both web and mobile development is even better news :)</p>
                    </div>
                    <div class="packMember__bio--bullet">
                        <img class="packMember__bio--bullet--icon" src="../../../assets/images/junto-home-2.0__bullet.png">
                        <p class="packMember__bio--bullet--text">You’re an interdisciplinary software engineer. You don’t confine yourself to mobile development and have an innate drive to explore new technologies.                       </p>
                    </div>
                </div>
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