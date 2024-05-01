import React, { useEffect, useState } from 'react'
import Logo from './assets/logo.svg'
import Icon from './assets/icon.svg'

import css from './App.module.scss'

import stealth from '@stltio/stealth'

function App() {
  const [data, setData] = useState({
    local: {},
    remote: {},
    visitorId: null,
    ms: 0
  })

  useEffect(() => {
    const init = async () => {
      const s = await stealth({
        apiKey:
          'd98e52ee68b7560139463c4f4babe37b18158af68dbca731cc21d471e11b0bf8'
      })
      setData(s)
    }
    init()
  }, [])

  return (
    <div className={css.Layout}>
      <div className={css.Container}>
        <img src={Logo} alt='Stlt.io' className={css.Logo} />

        <div className={css.Stealth}>
          <span>Your ID:</span>
          <code>{data.visitorId}</code>
          <span>Performance (in ms):</span>
          <code>{data.ms}</code>
          <span>Local information:</span>
          <code>{JSON.stringify(data.local, null, 2)}</code>
          <span>Remote information:</span>
          <code>{JSON.stringify(data.remote, null, 2)}</code>
        </div>

        <div className={css.Footer}>
          &copy; {new Date().getFullYear()} Stlt.io - All Rights Reserved
          <img src={Icon} alt='Stlt.io' />
          v.&nbsp;
          {
            (
              document.head.querySelector(
                'meta[name="build-version"]'
              ) as HTMLMetaElement
            ).content
          }
        </div>
      </div>
    </div>
  )
}

export default App
