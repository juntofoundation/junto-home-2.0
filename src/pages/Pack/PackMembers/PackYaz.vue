
<template>
    <div class="pack">
        <!-- navigation -->
        <junto-nav></junto-nav>

        <div class="packMember">
            <div style="display: flex">
                <div class="packMember__left">
                    <div class="packMember__photo">
                        <img slot="packMemberPhoto" class="packMember__photo--image" src="../../../assets/images/junto-home-2.0__headshot--yaz.png" alt="">        
                    </div>
                    <div class="packMember__socials">
                        <img src="" alt="" class="packMember__social">
                    </div>
                </div>
                <div class="packMember__right">
                    <h2 slot="packMemberName" class="packMember__name">Yaz Owainati</h2>
                    <h2 slot="packMemberTitle" class="packMember__title">Head of Outreach</h2>            
                    
                    <p class="packMember__bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo esse accusamus, est voluptatum aspernatur deleniti ex tempora rem nesciunt itaque? Dolorem itaque consequatur, officiis hic facere nobis tenetur in illum.<br><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam officiis corporis sint doloribus maxime non tempora error quasi maiores, illo earum expedita velit? Dolorem eligendi nemo quis provident itaque?
                    <br><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem esse iure molestiae, velit expedita beatae hic, reiciendis unde totam fuga minus non, cum fugit corporis deserunt neque ex! Itaque!
                    <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis distinctio repellendus a nesciunt, id cumque similique, tempora error alias dignissimos earum? Placeat minus quos, iure beatae recusandae dolorem enim mollitia?</p>
                </div>

            </div>

        </div>        

        <!-- footer-->
        <junto-footer></junto-footer>                

    </div>
</template>

<script>
    import juntoNav from '../../../components/Nav/Nav.vue';
    import juntoFooter from '../../../components/Footer/Footer.vue';

    export default {
        components: {
            juntoNav,
            juntoFooter
        }
    }
</script>
