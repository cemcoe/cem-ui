import { createApp } from 'vue'
import App from './App.vue'

import { CemButton, CemCell, CemIcon} from '../modules/cem-ui'
// import { CemButton } from 'cem-ui'

const app = createApp(App)

app.use(CemButton).use(CemCell).use(CemIcon)

app.mount('#app')
