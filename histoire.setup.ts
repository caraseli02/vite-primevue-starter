import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/lara-dark-purple/theme.css'

export function setupVue3({ app }) {
  app.provide('test', 'hello')
  app.use(PrimeVue)
}
