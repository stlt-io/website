import React, { useCallback, useEffect, useState } from 'react'
import Logo from './assets/logo.svg'
import Icon from './assets/icon.svg'

import css from './App.module.scss'

import stealth from '@stltio/stealth'

function App() {
  const [data, setData] = useState({ local: {}, remote: {}, id: '' })

  const init = useCallback(async () => {
    const s = await stealth()
    setData(s)
  }, [])

  useEffect(() => {
    init()
  }, [init])

  return (
    <div className={css.Layout}>
      <div className={css.Container}>
        <img src={Logo} alt='Stlt.io' className={css.Logo} />

        <div className={css.Stealth}>
          <span>Your ID:</span>
          <code>{data.id}</code>
          <span>Local information:</span>
          <code>{JSON.stringify(data.local, null, 2)}</code>
          <span>Remote information:</span>
          <code>{JSON.stringify(data.remote, null, 2)}</code>
        </div>

        <div className={css.Footer}>
          &copy; {new Date().getFullYear()} Stlt.io - All Rights Reserved
          <br />
          <img src={Icon} alt='Stlt.io' />
        </div>
      </div>
    </div>
  )
}

export default App
