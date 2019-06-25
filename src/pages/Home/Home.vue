
<template>
    <div class="home">
        <!-- navigation -->
        <junto-nav></junto-nav>

        <!--  -->
        <junto-home-header> </junto-home-header>

        <!--  -->
        <junto-home-pillars></junto-home-pillars>
    </div>
</template>

<script>
    import juntoNav from '../../components/Nav/Nav.vue';
    import juntoHomeHeader from '../../components/Home/HomeHeader/HomeHeader.vue';
    import juntoHomePillars from '../../components/Home/HomePillars/HomePillars.vue';

    export default {
        components: {
            juntoNav,
            juntoHomeHeader,
            juntoHomePillars
        }
    }
</script>
