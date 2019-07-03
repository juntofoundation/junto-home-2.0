
<template>
    <div class="faq">
        <!-- navigation -->
        <junto-nav></junto-nav>

        <!-- faq header -->
        <junto-faq-header></junto-faq-header>

        <!-- flux-->
        <junto-flux></junto-flux>      

        <!-- footer-->
        <junto-footer></junto-footer>                

    </div>
</template>

<script>
    import juntoNav from '../../components/Nav/Nav.vue';
    import juntoFlux from '../../components/Flux/Flux.vue';
    import juntoFaqHeader from '../../components/Faq/FaqHeader/FaqHeader.vue';
    import juntoFooter from '../../components/Footer/Footer.vue';

    export default {
        components: {
            juntoNav,
            juntoFlux,
            juntoFaqHeader,
            juntoFooter
        }
    }
</script>
