import * as React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

function loadStories() {
  require('../src/index.tsx')
}

addDecorator(withKnobs)

configure(loadStories, module)
