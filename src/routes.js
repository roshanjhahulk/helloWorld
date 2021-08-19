import {createWebHistory,createRouter} from 'vue-router' ;

import countryName from './components/countryName.vue';
import Card from './components/Card.vue';


const routes=[
    {
        name:'Card',
        path:'/',
        component:Card
    },
    {
        name:'countryName',
        path:'/country/:nation',
        component: countryName,
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes,
})


export default router;