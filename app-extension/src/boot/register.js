import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-prism'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
