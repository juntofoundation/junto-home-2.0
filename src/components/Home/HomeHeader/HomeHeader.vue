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

            <div class="media" v-if="visible">
                
                <div class="media__top">
                    <div class="media__logo">
                        <img class="media__logo--image" src="../../../assets/images/junto-home-2.0__logo.png" alt="">
                        <p class="media__logo--name">JUNTO VIDEO LIBRARY</p>
                    </div>
                    <p class="media__back" @click="visible=false">BACK</p>
                </div>                

                <div class="media__bottom">

                    <div class="media__main">
                        <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/yaZCqaJw8yc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                         -->
                        <iframe class="media__main--video" src="https://www.youtube.com/embed/tsMeJrVQis8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                    </div>
                    <div class="media__videos">
                        <div class="media__video">
                            <img class="media__video--thumbnail" src="../../../assets/images/junto-home-2.0__thumbnail--flows.png" alt="">
                            <div class="media__video--details">
                                <p class="media__video--title">Expression that Flows</p>
                                <p class="media__video--date">Jan 26, 2019</p>
                            </div>
                        </div>

                        <div class="media__video">
                            <img class="media__video--thumbnail" src="../../../assets/images/junto-home-2.0__thumbnail--hcxjunto.png" alt="">
                            <div class="media__video--details">
                                <p class="media__video--title">Powered by Holochain Interview Series: Junto</p>
                                <p class="media__video--date">Jan 27, 2019</p>
                            </div>                        
                        </div>   

                        <div class="media__video">
                            <img class="media__video--thumbnail" src="../../../assets/images/junto-home-2.0__thumbnail--demo.png" alt="">
                            <div class="media__video--details">
                                <p class="media__video--title">Junto Demo #1</p>
                                <p class="media__video--date">Jun 8, 2019</p>
                            </div>                       
                         </div>                             

                        <div class="media__video">
                            <img class="media__video--thumbnail" src="../../../assets/images/junto-home-2.0__thumbnail--decentralization.png" alt="">
                            <div class="media__video--details">
                                <p class="media__video--title">Why Does Decentralization Matter?</p>
                                <p class="media__video--date">Mar 11, 2019</p>
                            </div>                       
                         </div>   

                        <div class="media__video">
                            <img class="media__video--thumbnail" src="../../../assets/images/junto-home-2.0__thumbnail--communitysm.png" alt="">
                            <div class="media__video--details">
                                <p class="media__video--title">Junto Community Series - How Do You Feel About Social Media?</p>
                                <p class="media__video--date">Feb 7, 2019</p>
                            </div>                        
                        </div>                                                                                                
                    </div>                    
                </div>


            </div>      
    </div>
</template>

<script>    
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
        }
    }
</script>

 