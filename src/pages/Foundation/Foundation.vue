
<template>
    <div class="foundation">
        <!-- navigation -->
        <junto-nav></junto-nav>

        <!-- foundation header -->
        <junto-foundation-header></junto-foundation-header>

        <!-- flux-->
        <junto-flux></junto-flux>      

        <!-- footer-->
        <junto-footer></junto-footer>                

    </div>
</template>

<script>
    import juntoNav from '../../components/Nav/Nav.vue';
    import juntoFoundationHeader from '../../components/Foundation/FoundationHeader/FoundationHeader.vue';
    import juntoFlux from '../../components/Flux/Flux.vue';
    import juntoFooter from '../../components/Footer/Footer.vue';

    export default {
        components: {
            juntoNav,
            juntoFoundationHeader,
            juntoFlux,
            juntoFooter
        }
    }
</script>
