
import Home from './pages/Home/Home.vue'
import Learn from './pages/Learn/Learn.vue'
import Pack from './pages/Pack/Pack.vue'
import Events from './pages/Events/Events.vue'
import Manifesto from './pages/Manifesto/Manifesto.vue'
import Faq from './pages/Faq/Faq.vue'


export const routes = [
    { path: '/', component: Home },
    { path: '/learn', component: Learn },
    { path: '/pack', component: Pack },
    { path: '/events', component: Events },
    { path: '/manifesto', component: Manifesto },
    { path: '/faq', component: Faq },

]