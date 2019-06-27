
<template>
    <div class="learn">
        <!-- navigation -->
        <junto-nav></junto-nav>

        <!-- learn header -->
        <junto-learn-header></junto-learn-header>

        <!-- flux-->
        <junto-flux></junto-flux>      

        <!-- footer-->
        <junto-footer></junto-footer>                

    </div>
</template>

<script>
    import juntoNav from '../../components/Nav/Nav.vue';
    import juntoFlux from '../../components/Flux/Flux.vue';
    import juntoLearnHeader from '../../components/Learn/LearnHeader/LearnHeader.vue';
    import juntoFooter from '../../components/Footer/Footer.vue';

    export default {
        components: {
            juntoNav,
            juntoFlux,
            juntoLearnHeader,
            juntoFooter
        }
    }
</script>
