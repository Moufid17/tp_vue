import { createApp } from 'vue'
import App from './App.vue'
import Formik from './components/Formik.vue'
import Field from './components/Field.vue'

import './assets/main.css'

const app = createApp(App)
app.component("Formik")
app.component("Field")

app.mount('#app')
