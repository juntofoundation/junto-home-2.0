
<template>
    <div class="home">
        <!-- navigation -->
        <junto-nav></junto-nav>

        <!--  header-->
        <junto-home-header> </junto-home-header>

        <!--  pillars-->
        <junto-home-pillars></junto-home-pillars>

        <!-- sponsors-->
        <junto-home-sponsors></junto-home-sponsors>

        <!-- flux-->
        <junto-flux></junto-flux>      

        <!-- footer-->
        <junto-footer></junto-footer>                

    </div>
</template>

<script>
    import juntoNav from '../../components/Nav/Nav.vue';
    import juntoHomeHeader from '../../components/Home/HomeHeader/HomeHeader.vue';
    import juntoHomePillars from '../../components/Home/HomePillars/HomePillars.vue';
    import juntoHomeSponsors from '../../components/Home/HomeSponsors/HomeSponsors.vue';
    import juntoFlux from '../../components/Flux/Flux.vue';
    import juntoFooter from '../../components/Footer/Footer.vue';

    export default {
        components: {
            juntoNav,
            juntoHomeHeader,
            juntoHomePillars,
            juntoHomeSponsors,
            juntoFlux,
            juntoFooter
        }
    }
</script>
