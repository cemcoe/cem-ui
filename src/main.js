import { createApp } from 'vue'
import App from './App.vue'

import { CemButton } from '../modules/cem-ui'
// import { CemButton } from 'cem-ui'

const app = createApp(App)

app.use(CemButton)

app.mount('#app')
