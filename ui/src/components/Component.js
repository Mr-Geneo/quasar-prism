import { defineComponent, h, ref, computed, watch, unref } from 'vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-sass'
import 'prismjs/components/prism-scss'
import { escapeHtml } from '../libs/utils'

export default defineComponent({
  name: 'QPrism',
  props: {
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      default: 'markup',
    },
    theme: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const language = ref(props.language)
    const prismLanguage = Prism.languages[language.value]
    watch(
      () => props.language,
      (newLanguage) => {
        language.value = newLanguage
      }
    )
    const className = computed(() => {
      return `q-prism__inner language-${language.value}`
    })

    const prismCode = computed(() => {
      // No idea what language to use, return raw code
      if (!prismLanguage) {
        console.warn(`The language "${language.value}" you specified could not be found.`)
        return escapeHtml(props.code)
      }
      if (language.value) {
        return Prism.highlight(props.code, prismLanguage, language.value)
      } else {
        return escapeHtml(props.code)
      }
    })

    return () =>
      h('div', props.theme ? { class: `q-prism-theme-${props.theme}` } : {}, [
        h('pre', { class: `q-prism language-${language.value}` }, [
          h('code', {
            class: unref(className),
            innerHTML: unref(prismCode),
          }),
        ]),
      ])
  },
})
