
<template>
    <div class="foundationHeader">
        <h2 class="foundationHeader__title">Support the Junto Foundation</h2>
        <p class="foundationHeader__subtitle"> Junto is a nonprofit organization registered
            in New York. This is to ensure the independence and integrity of this organization is sustainable long term. 
            Any contribution to help move Junto forward is much appreciated!            
        </p>

         <div class="foundationHeader__pillars">    
             <div class="foundationHeader__pillar">
                 <div class="foundationHeader__pillar--left foundationHeader__pillar--left--founder">&nbsp;</div>
                 <div class="foundationHeader__pillar--right">
                     <p class="foundationHeader__pillar--title">Founder's Pack</p>
                     <p class="foundationHeader__pillar--body">In 2020, we will offer
                         an optional subscription with a full suite of premium features and customizability. Contribute $25 today to receive free lifetime premium access and a founder's emblem on your profile! 
                     </p>
                     <a target="blank" class="removelink">
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="blank" >
                            <input type="hidden" name="cmd" value="_s-xclick" />
                            <input type="hidden" name="hosted_button_id" value="L4YFCX74BE57S" />
                            <button class="foundationHeader__pillar--button">Donate $25</button>
                        </form>                                 
                     </a>
           
                 </div>
             </div>

             <div class="foundationHeader__pillar">
                 <div class="foundationHeader__pillar--left foundationHeader__pillar--left--sponsor">&nbsp;</div>
                 <div class="foundationHeader__pillar--right">
                     <p class="foundationHeader__pillar--title">Become A Sponsor/Philanthropist</p>
                     <p class="foundationHeader__pillar--body">If you would 
                         like to sponsor Junto to be highlighted on our home page or contribute a larger donation, send an email to eric@junto.foundation!
                         </p>
                     <a href="mailto:eric@junto.foundation" target="blank" class="removelink"><button class="foundationHeader__pillar--button">Email Us!</button></a>
                 </div>
             </div>            
             
              
<!-- 

            <div class="foundationHeader__pillar">
                <p class="foundationHeader__pillar--title">ONE-TIME DONATIONS</p>
                <p class="foundationHeader__pillar--body">We accept donations through 
                    <a href="https://www.indiegogo.com/projects/junto-a-new-breed-of-social-media--2" target="blank" class="addlink">Indiegogo</a> and Holo Tokens. 
                    View our $HOT address below.
                </p>                                        
            </div>

            <div class="foundationHeader__pillar foundationHeader__pillar--middle">
                <p class="foundationHeader__pillar--title">BECOME A SPONSOR</p>
                <p class="foundationHeader__pillar--body">If you're an individual or organization that 
                    would like to sponsor Junto and be highlighted on our home page, send us an email <a href="mailto:hi@junto.foundation" class="addlink">here!</a> 
                </p>            
            </div>   -->


            <!-- <div class="foundationHeader__pillar foundationHeader__pillar--middle">
                <p class="foundationHeader__pillar--title">JUNTO MERCH</p>
                <p class="foundationHeader__pillar--body">We are opening up a Junto merch store soon. All proceeds 
                    go towards moving this initiative forward. Stay tuned!
                </p>            
            </div>                                  -->
        </div> 

        <!-- <div class="foundationHeader__hot">
            <img src="../../../assets/images/junto-home-2.0__holo.jpg" alt="" class="foundationHeader__hot--icon">
            <p class="foundationHeader__hot--title">Holo Token Address:</p>
            <p class="foundationHeader__hot--address">0xCD75b4046A99101a232bB105915F182C7b7E136E</p>
        </div> -->

    </div>
</template>


<script>
    export default {
        data() {
            return {
                hotOn: false                    
            }
        },

        methods: {
            showAddress() {

            }
        }
    }

</script>


