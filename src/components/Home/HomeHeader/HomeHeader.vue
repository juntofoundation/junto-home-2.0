<template>
    <div class="homeHeader">
        <!-- backdrop -->
            <div class="homeHeader__content">
                <h2 class="homeHeader__title">JUNTO</h2>
                <h3 class="homeHeader__subtitle">A Movement for Authenticity</h3>
                <p class="homeHeader__description">Junto is a new breed of social media founded
                    in the spirit of authenticity. Our goal is to rebalance our relationship with technology
                    and activate a wave of agency, privacy, and free expression.
                </p>
                <a class="removelink" @click="visible = true">
                    <div class="homeHeader__action">
                        <img src="../../../assets/images/junto-home-2.0__play.png" alt="" class="homeHeader__action--icon">
                        <p class="homeHeader__action--text">OUR STORY</p>
                    </div>
                </a>
            </div>
            <img class="homeHeader__mockups" src="../../../assets/images/junto-home-2.0__mockups.png" alt="">  

            <transition name="fade">
                <junto-media v-if="visible">
                    <p slot="back" class="media__back" @click="visible=false">BACK</p>
                </junto-media>
                <div v-else></div>        
            </transition>

    </div>
</template>

<script>    
    import juntoMedia from '../../Media/Media.vue';

    export default {        
        data: function () {
            return {
                visible: false
            }
        },

        methods: {
            showMedia() {
                console.log('working');
                if(this.visible == false) {
                    this.visible == true;
                } else {
                    this.visible == false;
                }
            }
        },

        components: {
            juntoMedia
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
