
<template>
    <div class="pack">
        <!-- navigation -->
        <junto-nav></junto-nav>

        <!-- pack header -->
        <junto-pack-header></junto-pack-header>

        <!-- flux-->
        <junto-flux></junto-flux>      

        <!-- footer-->
        <junto-footer></junto-footer>                

    </div>
</template>

<script>
    import juntoNav from '../../components/Nav/Nav.vue';
    import juntoPackHeader from '../../components/Pack/PackHeader/PackHeader.vue';
    import juntoFlux from '../../components/Flux/Flux.vue';
    import juntoFooter from '../../components/Footer/Footer.vue';

    export default {
        components: {
            juntoNav,
            juntoPackHeader,
            juntoFlux,
            juntoFooter
        }
    }
</script>
