
<template>
    <div class="foundationHeader">
        <h2 class="foundationHeader__title">Support the Junto Foundation</h2>
        <p class="foundationHeader__subtitle"> Junto is a nonprofit organization registered
            in New York. This is to ensure the independence and integrity of this organization is sustainable long term. 
            Any contribution to help move Junto forward is much appreciated!            
        </p>

         <div class="foundationHeader__pillars">    
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
            </div>

            <div class="foundationHeader__pillar">
                <p class="foundationHeader__pillar--title">RECURRING PLEDGES</p>
                <p class="foundationHeader__pillar--body">Junto's founder Eric does not take
                    a salary from the organization. Feel free to find out why, read his story, and support his work
                    on Patreon <a href="https://www.patreon.com/ericyang" target="blank" class="addlink">here.</a>
                </p>
            </div>                        
        </div> 

        <div class="foundationHeader__hot">
            <img src="../../../assets/images/junto-home-2.0__holo.jpg" alt="" class="foundationHeader__hot--icon">
            <p class="foundationHeader__hot--title">Holo Token Address:</p>
            <p class="foundationHeader__hot--address">0xCD75b4046A99101a232bB105915F182C7b7E136E</p>
        </div>

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




  

