import { configure } from '@storybook/react'

import '../src/assets/scss/app.scss'

const req = require.context('../src/js/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
