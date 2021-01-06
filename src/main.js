import { createApp } from 'vue'
import App from './App.vue'

import { CemButton, CemCell} from '../modules/cem-ui'
// import { CemButton } from 'cem-ui'

const app = createApp(App)

app.use(CemButton).use(CemCell)

app.mount('#app')
