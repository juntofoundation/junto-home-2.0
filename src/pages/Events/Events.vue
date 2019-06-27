
<template>
    <div class="events">
        <!-- navigation -->
        <junto-nav></junto-nav>

        <junto-events-header></junto-events-header>

        <!-- flux-->
        <junto-flux></junto-flux>      

        <!-- footer-->
        <junto-footer></junto-footer>                

    </div>
</template>

<script>
    import juntoNav from '../../components/Nav/Nav.vue';
    import juntoEventsHeader from '../../components/Events/EventsHeader/EventsHeader.vue';
    import juntoFlux from '../../components/Flux/Flux.vue';
    import juntoFooter from '../../components/Footer/Footer.vue';

    export default {
        components: {
            juntoNav,
            juntoEventsHeader,
            juntoFlux,
            juntoFooter
        }
    }
</script>
