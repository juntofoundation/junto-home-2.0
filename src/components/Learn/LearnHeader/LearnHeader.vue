
<template>
    <div class="learnHeader">
        <h2 class="learnHeader__title">Rebalancing Our Relationship With Technology</h2>
        <p class="learnHeader__subtitle"> 
            Junto holistically integrates new patterns of design, technology, and governance to create
            sustainable online and offline tools dedicated to activating the vast resovoir of human potential.
        </p>
        <div class="learnHeader__nav">
            <p class="learnHeader__nav--item" :class="{ active: design }" @click="setCategory('design')">DESIGN</p>
            <p class="learnHeader__nav--item" :class="{ active: technology }" @click="setCategory('technology')">TECHNOLOGY</p>
            <p class="learnHeader__nav--item" :class="{ active: nonprofit }" @click="setCategory('nonprofit')">NOT FOR PROFIT</p>
        </div>
       
        <junto-learn-header-design v-if="design"></junto-learn-header-design>
        <junto-learn-header-technology v-if="technology"></junto-learn-header-technology>
        <junto-learn-header-nonprofit v-if="nonprofit"></junto-learn-header-nonprofit>

        <div class="learnHeader__section--reads">

        </div>
        
                 
    </div>    
</template>

<script>
    import juntoLearnHeaderDesign from './LearnHeaderDesign/LearnHeaderDesign.vue';
    import juntoLearnHeaderTechnology from './LearnHeaderTechnology/LearnHeaderTechnology.vue';
    import juntoLearnHeaderNonprofit from './LearnHeaderNonprofit/LearnHeaderNonprofit.vue';

    export default {
        data() {
            return {
                design: true,
                technology: false,
                nonprofit:false

            }
        },
        methods: {
            setCategory(category) {
                this.design = false;
                this.technology = false;
                this.nonprofit = false;

                if(category == 'design') {
                    this.design = true;
                } else if(category == 'technology') {
                    this.technology = true;
                } else if(category == 'nonprofit') {
                    this.nonprofit = true;
                }
            }
        },
        components: {
            juntoLearnHeaderDesign,
            juntoLearnHeaderTechnology,
            juntoLearnHeaderNonprofit,


        }
    }
</script>

<style>
    .active {
        color: #333; 
    }
</style>
