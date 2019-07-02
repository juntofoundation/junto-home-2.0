<template>
    <div class="faqHeader">
        <h2 class="faqHeader__title">FAQs</h2>
        <p class="faqHeader__subtitle"> Here's a list of questions we receive on a frequent basis.
            Reach out to us at hi@junto.foundation if there's anything you'd still like clarity on!
        </p>    
        <div class="faqHeader__nav">
            <p class="faqHeader__nav--item" :class="{ active: all }" @click="setCategory('all')">ALL</p>
            <p class="faqHeader__nav--item" :class="{ active: community }" @click="setCategory('community')">COMMUNITY</p>
            <p class="faqHeader__nav--item" :class="{ active: design }" @click="setCategory('design')">DESIGN</p>
            <p class="faqHeader__nav--item" :class="{ active: technology }" @click="setCategory('technology')">TECHNOLOGY</p>
            <p class="faqHeader__nav--item" :class="{ active: fundraising }" @click="setCategory('fundraising')">FUNDRAISING</p>
        </div>

        <div class="faqHeader__faqs">
            <div class="faqHeader__faq" v-for="faq in faqs" v-if="all">
                <p class="faqHeader__faq--question"> {{ faq.question }}</p>
                <p class="faqHeader__faq--answer">{{ faq.answer }}</p>
            </div>

            <div class="faqHeader__faq" v-for="faq in faqs" v-if="community">
                <p class="faqHeader__faq--question" v-if="faq.type == 'community'" @click="toggleVisibility(faq.id)"> {{ faq.question }}</p>
                <p class="faqHeader__faq--answer" v-if="faq.type == 'community' && isVisible">{{ faq.answer }}</p>
            </div>            

            <div class="faqHeader__faq" v-for="faq in faqs" v-if="design">
                <p class="faqHeader__faq--question" v-if="faq.type == 'design'"> {{ faq.question }}</p>
                <p class="faqHeader__faq--answer" v-if="faq.type == 'design'">{{ faq.answer }}</p>
            </div>            

            <div class="faqHeader__faq" v-for="faq in faqs" v-if="technology">
                <p class="faqHeader__faq--question" v-if="faq.type == 'technology'"> {{ faq.question }}</p>
                <p class="faqHeader__faq--answer" v-if="faq.type == 'technology'">{{ faq.answer }}</p>
            </div>            

            <div class="faqHeader__faq" v-for="faq in faqs" v-if="fundraising">
                <p class="faqHeader__faq--question" v-if="faq.type == 'fundraising'"> {{ faq.question }}</p>
                <p class="faqHeader__faq--answer" v-if="faq.type == 'fundraising'">{{ faq.answer }}</p>
            </div>                        
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isVisible: false,
                all: true,
                community: false,
                design: false,
                technology: false, 
                fundraising: false, 
                faqs: [
                    { 
                      question: 'What was the inspiration behind Junto?', 
                      answer: 'Authenticity', 
                      type: 'community',
                      id: 0
                    },
                    { 
                      question: 'What does Junto mean and how do you pronounce it?', 
                      answer: 'Authenticity', 
                      type: 'community',
                      id: 1

                    },
                    { 
                      question: 'What is Junto for?', 
                      answer: 'Authenticity', 
                      type: 'community',
                      id: 2

                    },
                    { 
                      question: 'What does decentralized technology mean and what value does it provide?', 
                      answer: 'What does decentralized technology mean and what value does it provide?', 
                      type: 'technology'
                    },          
                    { 
                      question: 'How are you addressing privacy concerns with data?', 
                      answer: 'We don’t own, track, or sell information. We’re also a nonprofit and have no incentive to do so. Your best interest is our best interest.', 
                      type: 'design'
                    },

                    { 
                      question: 'How are you funding this project?', 
                      answer: 'Authenticity', 
                      type: 'fundraising'
                    },                                                                                

                ]
            }
        },

        methods: {
            setCategory(category) {
                this.all = false;
                this.community = false;
                this.design = false;
                this.technology = false;
                this.fundraising = false;

                if(category == 'all') {
                    this.all = true;
                } else if (category == 'community') {
                    this.community = true;
                } else if (category == 'design') {
                    this.design = true;
                } else if (category == 'technology') {  
                    this.technology = true;
                } else if (category == 'fundraising') {
                    this.fundraising = true;
                }
            },

            toggleVisibility(id) {
                if(this.isVisible == false) {
                    this.isVisible == true; 
                }
            }
        },        

    }
</script>

<style>
    .active {
        color: #333;
    }
</style>

