<template>
    <div class="media">                
        <div class="media__top">
            <div class="media__logo">
                <img class="media__logo--image" src="../../assets/images/junto-home-2.0__logo.png" alt="">
                <p class="media__logo--name">JUNTO VIDEO LIBRARY</p>
            </div>
            <slot name="back"></slot>
        </div>                

        <div class="media__bottom">
            <div class="media__main">
                
                <iframe v-if="videoOne" class="media__main--video" src="https://www.youtube.com/embed/HsWSHH7hHRI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe v-if="videoTwo" class="media__main--video" src="https://www.youtube.com/embed/tsMeJrVQis8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                
                <iframe v-if="videoThree" class="media__main--video" src="https://player.vimeo.com/video/341139447" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>                
                <iframe v-if="videoFour" class="media__main--video" src="https://www.youtube.com/embed/k7a_c20vaC8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            
                <iframe v-if="videoFive" class="media__main--video" src="https://www.youtube.com/embed/yaZCqaJw8yc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            </div>
            <div class="media__videos">
                <p class="media__videos--title">PLAYLIST</p>
                <div class="media__video" @click="updateVideo('one')">
                    <img class="media__video--thumbnail" src="../../assets/images/junto-home-2.0__thumbnail--flows.png" alt="">
                    <div class="media__video--details">
                        <p class="media__video--title">Expression that Flows</p>
                        <p class="media__video--date">Jan 26, 2019</p>
                    </div>
                </div>

                <div class="media__video" @click="updateVideo('two')">
                    <img class="media__video--thumbnail" src="../../assets/images/junto-home-2.0__thumbnail--hcxjunto.png" alt="">
                    <div class="media__video--details">
                        <p class="media__video--title">Powered by Holochain Interview Series: Junto</p>
                        <p class="media__video--date">Jan 27, 2019</p>
                    </div>                        
                </div>   

                <div class="media__video" @click="updateVideo('three')">
                    <img class="media__video--thumbnail" src="../../assets/images/junto-home-2.0__thumbnail--demo.png" alt="">
                    <div class="media__video--details">
                        <p class="media__video--title">Junto Demo #1</p>
                        <p class="media__video--date">Jun 8, 2019</p>
                    </div>                       
                    </div>                             

                <div class="media__video" @click="updateVideo('four')">
                    <img class="media__video--thumbnail" src="../../assets/images/junto-home-2.0__thumbnail--decentralization.png" alt="">
                    <div class="media__video--details">
                        <p class="media__video--title">Why Does Decentralization Matter?</p>
                        <p class="media__video--date">Mar 11, 2019</p>
                    </div>                       
                    </div>   

                <div class="media__video" @click="updateVideo('five')">
                    <img class="media__video--thumbnail" src="../../assets/images/junto-home-2.0__thumbnail--communitysm.png" alt="">
                    <div class="media__video--details">
                        <p class="media__video--title">Junto Community Series - How Do You Feel About Social Media?</p>
                        <p class="media__video--date">Feb 7, 2019</p>
                    </div>                        
                </div>                                                                                                
            </div>                    
        </div>
    </div>       

</template>

<script>
    export default {
        data: function() {
            return {
                videoOne: true,
                videoTwo: false,
                videoThree: false,
                videoFour: false,
                videoFive: false,
                videoSix: false,
            }
        },
         
         methods: {
             updateVideo(video) {
                 this.videoOne = false;
                 this.videoTwo = false;
                 this.videoThree = false;
                 this.videoFour = false;
                 this.videoFive = false;

                if(video == 'one') {
                    this.videoOne = true;
                } else if (video == 'two') {
                    this.videoTwo = true;
                } else if (video =='three') {
                    this.videoThree = true;
                } else if (video == 'four') {
                    this.videoFour = true;
                } else if (video =='five') {
                    this.videoFive = true;
                }
             }
         }
    }
</script>
