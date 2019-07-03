
<template>
    <div>
        <div class="packHeader" v-if="memberOpen != true">         
            <h2 class="packHeader__title">Mission</h2>
            <p class="packHeader__subtitle"> We are a group of individuals who have come together from
                many walks of life to help realign technology with humanity. We envision social technology
                as a tool to activate our creative, collaborative, and expressive capacities and 
                welcome anyone who feels called to participate to join this movement.
            </p>

            <div class="packHeader__section">
                <h2 class="packHeader__title">Pack</h2>        
                <div class="packHeader__pack">

                    <div class="packHeader__member">
                        <a href="/pack-eric" class="removelink">
                            <div class="packHeader__member--photo">
                                <p class="packHeader__member--cover--text">Eric's Story</p>
                                <div class="packHeader__member--cover">&nbsp;</div>
                                <img src="../../../assets/images/junto-home-2.0__headshot--eric.png" alt="" class="packHeader__member--photo--image">                                                        
                            </div>
                            
                            <div class="packHeader__member--details"  @click="navMember('eric')">
                                <p class="packHeader__member--name">Eric Yang</p>
                                <p class="packHeader__member--title">Founder, Executive Director</p>
                            </div>      

                        </a>                  
                        
                        
                        
                    </div>

                    <div class="packHeader__member">
                        <a href="/pack-yaz" class="removelink">

                            <div class="packHeader__member--photo" @click="navMember('yaz')">
                                <p class="packHeader__member--cover--text">Yaz's Story</p>
                                <div class="packHeader__member--cover">&nbsp;</div>                        
                                <img style="transform: translateY(-4rem);" src="../../../assets/images/junto-home-2.0__headshot--yaz.png" alt="" class="packHeader__member--photo--image">
                            </div>
                            <div class="packHeader__member--details" @click="navMember('yaz')">
                                <p class="packHeader__member--name">Yaz Owainati</p>
                                <p class="packHeader__member--title">Head of Outreach</p>
                            </div>
                        </a>
                    </div>

                    <div class="packHeader__member">
                        <a href="/pack-josh" class="removelink">
                            <div class="packHeader__member--photo" @click="navMember('josh')">
                                <p class="packHeader__member--cover--text">Josh's Story</p>
                                <div class="packHeader__member--cover">&nbsp;</div>                              
                                <img src="../../../assets/images/junto-home-2.0__headshot--josh.png" alt="" class="packHeader__member--photo--image">
                            </div>
                            <div class="packHeader__member--details" @click="navMember('josh')">                    
                                <p class="packHeader__member--name">Josh Parkin</p>
                                <p class="packHeader__member--title">Chief Technology Officer</p>
                            </div>
                        </a>
                    </div>       


                    <div class="packHeader__member">
                        <a href="/pack-dora" class="removelink">
                            <div class="packHeader__member--photo" @click="navMember('dora')">
                                <p class="packHeader__member--cover--text">Dora's Story</p>
                                <div class="packHeader__member--cover">&nbsp;</div>                          
                                <img src="../../../assets/images/junto-home-2.0__headshot--dora.png" alt="" class="packHeader__member--photo--image">
                            </div>
                            <div class="packHeader__member--details" @click="navMember('dora')">                            
                                <p class="packHeader__member--name">Dora Czovek</p>
                                <p class="packHeader__member--title">Head of Operations</p>
                            </div>
                        </a>
                    </div>              
                </div>      

                    <div class="packHeader__pack">
                        <div class="packHeader__member">
                            <a href="/pack-drea" class="removelink">
                                <div class="packHeader__member--photo" @click="navMember('drea')">
                                    <p class="packHeader__member--cover--text">Drea's Story</p>
                                    <div class="packHeader__member--cover">&nbsp;</div>                            
                                    <img src="../../../assets/images/junto-home-2.0__headshot--drea.png" alt="" class="packHeader__member--photo--image">
                                </div>
                                <div class="packHeader__member--details" @click="navMember('drea')">                          
                                    <p class="packHeader__member--name">Drea Bennett</p>
                                    <p class="packHeader__member--title">Creative Director</p>
                                </div>
                            </a>
                        </div>     

                        <div class="packHeader__member">
                            <a href="/pack-hire-mobile" class="removelink">
                                <div class="packHeader__member--hire" @click="navMember('drea')">
                                    <img class="packHeader__member--hire--image"  src="../../../assets/images/junto-home-2.0__logo--outline.png" alt="">
                                    <p class="packHeader__member--hire--text">Create With Us</p>
                                </div>
                                <div class="packHeader__member--details" @click="navMember('drea')">                          
                                    <p class="packHeader__member--name">???</p>
                                    <p class="packHeader__member--title">Lead Mobile Developer</p>
                                </div>
                            </a>
                        </div>     
                        <div class="packHeader__member">
                            <a href="/pack-hire-web" class="removelink">
                                <div class="packHeader__member--hire" @click="navMember('drea')">
                                    <img class="packHeader__member--hire--image"  src="../../../assets/images/junto-home-2.0__logo--outline.png" alt="">
                                    <p class="packHeader__member--hire--text">Create With Us</p>
                                </div>
                                <div class="packHeader__member--details" @click="navMember('drea')">                          
                                    <p class="packHeader__member--name">???</p>
                                    <p class="packHeader__member--title">Lead Web Developer</p>
                                </div>
                            </a>
                        </div>     

                        <div class="packHeader__member packHeader__member--invisible">
                            &nbsp;
                        </div>                             

                                                 

                                          
                        
                                                                                                                    
                        
                    </div>                              
            </div>        

            <div class="packHeader__section">
                <h2 class="packHeader__title">Board of Directors</h2>        
                <div class="packHeader__pack">
                    <div class="packHeader__member">
                        <a href="/pack-eric" class="removelink">

                            <div class="packHeader__member--photo">
                                    <p class="packHeader__member--cover--text">Eric's Story</p>
                                    <div class="packHeader__member--cover">&nbsp;</div>                            
                                <img src="../../../assets/images/junto-home-2.0__headshot--eric.png" alt="" class="packHeader__member--photo--image">
                            </div>
                            <div class="packHeader__member--details">
                                <p class="packHeader__member--name">Eric Yang</p>
                                <p class="packHeader__member--title">President, Board Member</p>
                            </div>
                        </a>
                    </div>

                    <div class="packHeader__member">
                        <a href="/pack-riley" class="removelink">
                            <div class="packHeader__member--photo">
                                <p class="packHeader__member--cover--text">Riley's Story</p>
                                <div class="packHeader__member--cover">&nbsp;</div>                             
                                <img src="../../../assets/images/junto-home-2.0__headshot--riley.png" alt="" class="packHeader__member--photo--image">
                            </div>
                            <div class="packHeader__member--details">
                                <p class="packHeader__member--name">Riley Wagner</p>
                                <p class="packHeader__member--title">Secretary, Board Member</p>
                            </div>
                        </a>
                    </div>

                    <div class="packHeader__member">
                        <a href="/pack-ekene" class="removelink">
                            <div class="packHeader__member--photo">
                                <p class="packHeader__member--cover--text">Ekene's Story</p>
                                <div class="packHeader__member--cover">&nbsp;</div>                             
                                <img src="../../../assets/images/junto-home-2.0__headshot--ekene.png" alt="" class="packHeader__member--photo--image">
                            </div>
                            <div class="packHeader__member--details">
                                <p class="packHeader__member--name">Ekene Nkem-Mmekam</p>
                                <p class="packHeader__member--title">Treasurer, Board Member</p>
                            </div>
                        </a>
                    </div>             

                    <div class="packHeader__member">
                        <a href="/pack-kyle" class="removelink">
                            <div class="packHeader__member--photo">
                                <p class="packHeader__member--cover--text">Kyle's Story</p>
                                <div class="packHeader__member--cover">&nbsp;</div>                             
                                <img src="../../../assets/images/junto-home-2.0__headshot--kyle.png" alt="" class="packHeader__member--photo--image">
                            </div>
                            <div class="packHeader__member--details">
                                
                                <p class="packHeader__member--name">Kyle Hornick</p>
                                <p class="packHeader__member--title">Board Member</p>
                            </div>
                        </a>
                    </div>                              
                </div>      
            </div>

            <h2 class="packHeader__title">Advisors</h2>        
            <div class="packHeader__pack">
                <div class="packHeader__member">
                    <a href="/pack-art" class="removelink">
                        <div class="packHeader__member--photo">
                            <p class="packHeader__member--cover--text">Art's Story</p>
                            <div class="packHeader__member--cover">&nbsp;</div>                           
                            <img src="../../../assets/images/junto-home-2.0__headshot--art.png" alt="" class="packHeader__member--photo--image">
                        </div>
                        <div class="packHeader__member--details">
                            <p class="packHeader__member--name">Arthur Brock</p>
                            <p class="packHeader__member--title">Co-founder of Holochain</p>
                        </div>
                    </a>
                </div>

                <div class="packHeader__member">
                    <a href="/pack-ray" class="removelink">
                        <div class="packHeader__member--photo">
                            <p class="packHeader__member--cover--text">Ray's Story</p>
                            <div class="packHeader__member--cover">&nbsp;</div>                           
                            <img src="../../../assets/images/junto-home-2.0__headshot--ray.png" alt="" class="packHeader__member--photo--image">
                        </div>
                        <div class="packHeader__member--details">
                            <p class="packHeader__member--name">Raymond Powell</p>
                            <p class="packHeader__member--title">Founder of CoGov</p>
                        </div>
                    </a>
                </div>

                <div class="packHeader__member">
                    <a href="/pack-douglas" class="removelink">
                        <div class="packHeader__member--photo">
                            <p class="packHeader__member--cover--text">Douglas' Story</p>
                            <div class="packHeader__member--cover">&nbsp;</div>                           
                            <img src="../../../assets/images/junto-home-2.0__headshot--rushkoff.png" alt="" class="packHeader__member--photo--image">
                        </div>
                        <div class="packHeader__member--details">
                            <p class="packHeader__member--name">Douglas Rushkoff</p>
                            <p class="packHeader__member--title">Activist, Author</p>
                        </div>
                    </a>
                </div>             

                <div class="packHeader__member">
                    <a href="/pack-nick" class="removelink">
                        <div class="packHeader__member--photo">
                            <p class="packHeader__member--cover--text">Nick's Story</p>
                            <div class="packHeader__member--cover">&nbsp;</div>                           
                            <img src="../../../assets/images/junto-home-2.0__headshot--nick.png" alt="" class="packHeader__member--photo--image">
                        </div>
                        <div class="packHeader__member--details">
                            <p class="packHeader__member--name">Nick Manning</p>
                            <p class="packHeader__member--title">Software Engineer</p>
                        </div>
                    </a>
                </div>                              
            </div>                    
        </div>





        <junto-flux v-if="memberOpen != true"></junto-flux>
    </div>
    
</template>


<script>
    import juntoFlux from '../../Flux/Flux.vue';

    export default {

        components: {
            juntoFlux
        }
    }
</script>
