
<template>
    <div class="home">
        <!-- navigation -->
        <junto-nav></junto-nav>

        <!--  -->
        <junto-home-header> </junto-home-header>
    </div>
</template>

<script>
    import juntoNav from '../../components/Nav/Nav.vue';
    import juntoHomeHeader from '../../components/Home/HomeHeader/HomeHeader.vue';

    export default {
        components: {
            juntoNav,
            juntoHomeHeader
        }
    }
</script>
