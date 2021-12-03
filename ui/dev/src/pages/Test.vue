<template>
  <q-page padding>
    <q-card bordered>
      <q-card-section>
        <div class="text-h6">Sass (Scss)</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <q-prism language="scss" :code="scssCode"></q-prism>
      </q-card-section>
    </q-card>
    <q-separator class="q-my-md" />
    <q-card bordered>
      <q-card-section>
        <div class="text-h6">Sass (Sass)</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <q-prism theme="dark" language="sass" :code="sassCode"></q-prism>
      </q-card-section>
    </q-card>
    <q-separator class="q-my-md" />
    <q-card bordered>
      <q-card-section>
        <div class="text-h6">CSS</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <q-prism theme="funky" language="css" :code="cssCode"></q-prism>
      </q-card-section>
    </q-card>
    <q-separator class="q-my-md" />
    <q-card bordered>
      <q-card-section>
        <div class="text-h6">TypeScript</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <q-prism theme="okaidia" language="ts" :code="tsCode"></q-prism>
      </q-card-section>
    </q-card>
    <q-separator class="q-my-md" />
    <q-card bordered>
      <q-card-section>
        <div class="text-h6">JavaScript</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <q-prism theme="solarizedlight" language="js" :code="jsCode"></q-prism>
      </q-card-section>
    </q-card>
    <q-separator class="q-my-md" />
    <q-card bordered>
      <q-card-section>
        <div class="text-h6">HTML</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <q-prism theme="tomorrow" language="html" :code="htmlCode"></q-prism>
      </q-card-section>
    </q-card>
    <q-separator class="q-my-md" />
    <q-card bordered>
      <q-card-section>
        <div class="text-h6">Markup</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <q-prism theme="twilight" :code="htmlCode"></q-prism>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  setup(props) {
    const scssCode = `.q-prism {
  overflow: visible;
  padding: 0;
  background-color: #f5f5f5;
  &__inner {
    display: block;
    height: inherit;
    max-height: inherit;
    overflow: auto;
  }
}`
    const sassCode = `.q-prism
  overflow: visible
  padding: 0
  background-color: #f5f5f5
  &__inner
    display: block
    height: inherit
    max-height: inherit
    overflow: auto
`
    const cssCode = `.q-prism {
  overflow: visible;
  padding: 0;
  background-color: #f5f5f5;
}
.q-prism .q-prism__inner {
  display: block;
  height: inherit;
  max-height: inherit;
  overflow: auto;
}`
    const tsCode = `declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}`
    const jsCode = `if (api.ctx.dev === true && api.ctx.mode === 'electron') {
  api.beforeDev((api) => {
    // do something when running quasar dev and
    // with Electron mode
  })
}`
    const htmlCode = `<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn color="primary" style="width: 200px">
      <div class="ellipsis">
        This is some very long text that is expected to be truncated
      </div>
    </q-btn>
  </div>
</template>
<script>
export default {
  setup () {
    return {
      sizes: [ 'xs', 'sm', 'md', 'lg', 'xl' ],
      icons: [
        'navigation',
        'add_a_photo',
        'camera',
        'camera_front',
        'my_location'
      ]
    }
  }
}
<\/script>
<style lang="sass" scoped>
.btn-fixed-width
  width: 200px
</style>`
    return { scssCode, sassCode, cssCode, tsCode, jsCode, htmlCode }
  },
}
</script>

<style lang="sass" scoped></style>
