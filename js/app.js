const routes = [
    { path: '/colors', component: Colors },
    { path: '/letters', component: Letters },
    { path: '/numbers', component: Numbers },
    { path: '/shapes', component: Shapes,
        children: [
            { path: 'circle', component: SVGCircle },
        ]
    }
]

const router = new VueRouter({
    routes
})

new Vue({
    router
}).$mount('#app')
