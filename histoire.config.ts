import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [HstVue()],
  setupFile: 'histoire.setup.ts',
  tree: {
    groups: [
      {
        id: 'top',
        title: '',
      },
      {
        title: 'Atoms',
        include: file => !file.title.includes('Atom'),
      },
    ],
  },
})
