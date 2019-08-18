import { createDecorator } from 'vue-class-component'

/**
 * https://github.com/nuxt/vue-meta/issues/181#issuecomment-390258209
 */
export const Meta = createDecorator((options, key) => {
  if (options.methods == null) {
    return
  }
  options['metaInfo'] = options.methods[key]
})
