import {createRouter, createWebHistory} from 'vue-router'
import AuthPage from '../views/AuthPage.vue'
import RegistrationPage from "@/views/RegistrationPage.vue";
import CalculatorParamsPage from "@/views/CalculatorParamsPage.vue";
import MainPage from "@/views/MainPage.vue";
import {useUserInfoStore} from "@/stores/userInfoStore";
import FoodSearchPage from "@/views/FoodSearchPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'mainPage',
            component: MainPage
        },
        {
            path: '/login',
            name: 'authPage',
            component: AuthPage
        },
        {
            path: '/registration',
            name: 'registrationPage',
            component: RegistrationPage
        },
        {
            path: '/calculatorParams',
            name: 'calculatorParamsPage',
            component: CalculatorParamsPage
        },
        {
            path: '/search',
            name: 'foodSearchPage',
            component: FoodSearchPage
        }
    ]
})
router.beforeEach(async (to) => {
    const userInfoStore = useUserInfoStore()
    if (
        !userInfoStore.userInfo &&
        to.name !== 'authPage' &&
        to.name !== 'registrationPage'
    ) {
        console.log("redirect to auth")
        return {name: 'authPage'}
    }
})

export default router
