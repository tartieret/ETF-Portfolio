import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';
import SignupPage from './components/auth/signup.vue';
import SigninPage from './components/auth/signin.vue'

export const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/portfolio',
        component: Portfolio
    },
    {
        path: '/stocks',
        component: Stocks
    },
    {
        path: '/signup',
        component: SignupPage
    },
    {
        path: '/signin',
        component: SigninPage
    },
];