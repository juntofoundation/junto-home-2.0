
import Home from './pages/Home/Home.vue'
import Learn from './pages/Learn/Learn.vue'
import Pack from './pages/Pack/Pack.vue'
import PackEric from './pages/Pack/PackMembers/PackEric.vue'
import PackYaz from './pages/Pack/PackMembers/PackYaz.vue'
import PackJosh from './pages/Pack/PackMembers/PackJosh.vue'
import PackDora from './pages/Pack/PackMembers/PackDora.vue'
import PackDrea from './pages/Pack/PackMembers/PackDrea.vue'
import PackRiley from './pages/Pack/PackMembers/PackRiley.vue'
import PackEkene from './pages/Pack/PackMembers/PackEkene.vue'
import PackKyle from './pages/Pack/PackMembers/PackKyle.vue'
import PackArt from './pages/Pack/PackMembers/PackArt.vue'
import PackRay from './pages/Pack/PackMembers/PackRay.vue'
import PackDoug from './pages/Pack/PackMembers/PackDoug.vue'
import PackNick from './pages/Pack/PackMembers/PackNick.vue'
import PackHireMobile from './pages/Pack/PackMembers/PackHireMobile.vue'
import PackHireWeb from './pages/Pack/PackMembers/PackHireWeb.vue'
import Foundation from './pages/Foundation/Foundation.vue'
import Events from './pages/Events/Events.vue'
import Manifesto from './pages/Manifesto/Manifesto.vue'
import Faq from './pages/Faq/Faq.vue'


export const routes = [
    { path: '/', component: Home },
    { path: '/learn', component: Learn },
    { path: '/pack', component: Pack },
    { path: '/pack-eric', component: PackEric },
    { path: '/pack-yaz', component: PackYaz },
    { path: '/pack-josh', component: PackJosh },
    { path: '/pack-dora', component: PackDora },    
    { path: '/pack-drea', component: PackDrea },    
    { path: '/pack-riley', component: PackRiley },
    { path: '/pack-ekene', component: PackEkene},
    { path: '/pack-kyle', component: PackKyle },
    { path: '/pack-art', component: PackArt },    
    { path: '/pack-ray', component: PackRay },  
    { path: '/pack-douglas', component: PackDoug },    
    { path: '/pack-nick', component: PackNick },        
    { path: '/pack-hire-mobile', component: PackHireMobile },        
    { path: '/pack-hire-web', component: PackHireWeb },        
    { path: '/foundation', component: Foundation },
    { path: '/events', component: Events },
    { path: '/manifesto', component: Manifesto },
    { path: '/faq', component: Faq },

]