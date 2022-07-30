import { createApp } from 'vue'
import UserApp from '../../entry/user/UserApp.vue'
import { router } from '../router/user/router'

const app = createApp(UserApp)
app.use(router)

app.mount('#app')
