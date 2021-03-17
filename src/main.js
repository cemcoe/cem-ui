import { createApp } from 'vue'
import App from './App.vue'

import { CemButton, CemCell, CemIcon, CemNavBar, CemLoading} from '../modules/cem-ui'
// import { CemButton } from 'cem-ui'

const app = createApp(App)

app.use(CemButton).use(CemCell).use(CemIcon).use(CemNavBar).use(CemLoading)

app.mount('#app')
