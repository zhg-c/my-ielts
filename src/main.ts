import { createApp } from "vue";
import { createRouter,createWebHashHistory } from "vue-router";
import routes from 'virtual:generated-pages';
import App from './App.vue'

const app = createApp(App)
const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes
})
app.use(router)
app.mount('#app')