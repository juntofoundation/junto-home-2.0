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
            <div class="faqHeader__faq" v-for="faq in faqs" v-if="all" @click="toggleVisibility(faq.id)">
                <p class="faqHeader__faq--question"> {{ faq.question }}</p>
                <p class="faqHeader__faq--answer" style="display: none" :id=faq.id>{{ faq.answer }}</p>
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
                      question: 'What is Junto?', 
                      answer: 'Junto is a nonprofit organization creating online and offline tools to inspire authenticty and deeeper connectivity. To start, we are introducing a new breed social media while simultaneously growing a distributed network of physical communities. Join the movement!'   , 
                      type: 'community',
                      id: 0   

                    },                    
                    { 
                      question: 'What was the inspiration behind Junto?', 
                      answer: 'Junto was created to inspire authenticity and deeper connectivity. We want to harness the potential technology has to activate rich self-expression, grassroots movements, and meaningful collaboration.', 
                      type: 'community',
                      id: 1
                    },
                    { 
                      question: 'What does Junto mean and how do you pronounce it?', 
                      answer: 'Junto means “together” in Spanish and Portuguese. Our team pronounces it “june-toe,” but you can pronounce it however you want!', 
                      type: 'community',
                      id: 2

                    },
                    { 
                      question: 'Who is Junto for?', 
                      answer: 'Everyone! We welcome all walks of life to participate in this.', 
                      type: 'community',
                      id: 3
                    },                    
                    { 
                      question: 'What makes Junto different?', 
                      answer: 'Junto is more consciously designed, built on distributed technology, and is not for profit. Feel free to read into everything in more depth here!', 
                      type: 'community',
                      id: 4
                    },          
                    { 
                      question: 'How are you addressing privacy concerns with data?', 
                      answer: 'We do not own, track, or sell your data. We are also a nonprofit and have no incentive to do so. Your best interest is our best interest.', 
                      type: 'technology',
                      id: 5
                    },
                    { 
                      question: 'What does distributed technology mean and what value does it provide?', 
                      answer: 'In short, decentralized technology cuts out the need for the middle-man. Today, most web traffic passes through corporate web servers and in the case of social media, this puts corporations in between our interactions. As a result, they have a license to track and sell our data. Their centralized nature is also more prone to hacks and censorship. Built on decentralized technology, Junto is more secure than its centralized counterparts. It is more resilient to censorship and provides its members with ownership of their information. In short, we are unable to track or sell your data even if we wanted to. For more depth, visit our article on decentralization here.',      
                      type: 'technology',
                      id: 6

                    },          
                    { 
                      question: 'What kind of decentralized technology are you using?', 
                      answer: 'In short, decentralized technology cuts out the need for the middle-man. Today, most web traffic passes through corporate web servers and in the case of social media, this puts corporations in between our interactions. As a result, they have a license to track and sell our data. Their centralized nature is also more prone to hacks and censorship. Built on decentralized technology, Junto is more secure than its centralized counterparts. It is more resilient to censorship and provides its members with ownership of their information. In short, we are unable to track or sell your data even if we wanted to. For more depth, visit our article on decentralization here.',      
                      type: 'technology',
                      id: 7
                    },                                        

                    { 
                      question: 'Will you have a cryptocurrency or initial coin offering (ICO)?', 
                      answer: 'No.',      
                      type: 'fundraising',
                      id: 8
                    },          
                    { 
                      question: 'How are you funding this project?', 
                      answer: 'Junto is crowdfunded by the generosity of its supporters during these early stages. We launched a successful Kickstarter in January 2019, raising $106,949 from 678 backers. We plan on raising more money from institutional donors and will soon implement a sustainble revenue model. Right now, we are leaning towards a subscription/freemium model.',      
                      type: 'fundraising',
                      id: 9
                    },                              
                    { 
                      question: 'When does Junto come out?', 
                      answer: 'Junto is launching in 2019. Once we open, only those who signed up pre-release or contributed to our crowdfunding campaign will be able to access the app. Reserve your spot here.', 
                      type: 'community',
                      id: 10
                    },       
                    { 
                      question: 'How can I help?', 
                      answer: 'Junto is launching in 2019. Once we open, only those who signed up pre-release or contributed to our crowdfunding campaign will be able to access the app. Reserve your spot here.', 
                      type: 'community',
                      id: 11
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
                
                if(document.getElementById(id).style.display == 'none') {
                    document.getElementById(id).style.display = 'block';
                } else {
                    document.getElementById(id).style.display = 'none';
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

