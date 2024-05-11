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
        // apiKey:
        //   'd98e52ee68b7560139463c4f4babe37b18158af68dbca731cc21d471e11b0bf8'
      })
      setData(s)
    }
    init()
  }, [])

  return (
    <div className={css.Layout}>
      <div className={css.Container}>
        <img src={Logo} alt='Stlt.io' className={css.Logo} />

        <span className={css.License}>
          <i className='fa-solid fa-triangle-exclamation'></i> Do you want to
          know more about your visitors? Request an API key at{' '}
          <a href='mailto:hello@stlt.io'>hello@stlt.io</a>.
          <br />
          With the API key, you can access the full potential of Stealth, a
          powerful dashboard to analyze your data.
          <br />
          Currently, Stlt.io is in beta. We are working hard to improve it, and,
          now, it is <b>free</b> to use. Join us!
        </span>

        {!data.visitorId ? (
          <div className={css.LoaderContainer}>
            <div className={css.Loader}>Loading...</div>
          </div>
        ) : (
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
        )}

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
