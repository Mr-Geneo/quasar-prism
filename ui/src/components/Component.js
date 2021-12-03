import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'QPrism',

  setup () {
    return () => h(QBadge, {
      class: 'QPrism',
      label: 'QPrism'
    })
  }
}
