import React from 'react'

import { ApplyVisaApplication, ExampleComponent, TrackVisaApplication } from 'visaero-sdk'
import 'visaero-sdk/dist/index.css'

const App = () => {
  return (
    <>
      <ApplyVisaApplication />
      <TrackVisaApplication />
      <ExampleComponent text='Create React Library Example 😄' />
    </>
  )
}

export default App
