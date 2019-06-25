
<template>
    <div class="home">
        <!-- navigation -->
        <junto-nav></junto-nav>

        <!--  -->
        <junto-home-header> </junto-home-header>

        <!--  -->
        <junto-home-pillars></junto-home-pillars>

        <!--  -->
        <junto-home-sponsors></junto-home-sponsors>

    </div>
</template>

<script>
    import juntoNav from '../../components/Nav/Nav.vue';
    import juntoHomeHeader from '../../components/Home/HomeHeader/HomeHeader.vue';
    import juntoHomePillars from '../../components/Home/HomePillars/HomePillars.vue';
    import juntoHomeSponsors from '../../components/Home/HomeSponsors/HomeSponsors.vue';

    export default {
        components: {
            juntoNav,
            juntoHomeHeader,
            juntoHomePillars,
            juntoHomeSponsors
        }
    }
</script>
