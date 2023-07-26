function init (apiKey) {
  async function handleLoadWidget () {
    const page = `${window.location.origin}${window.location.pathname}`
    const fp = await window.FingerprintJS.load()
    const fingerprint = await fp.get()

    const WIDGET_URL = `https://pauloferreira-feedbacker-widget.netlify.app?api_key=${apiKey}&page=${page}&fingerprint=${fingerprint.visitorId}`
    const config = { method: 'HEAD' }
    const response = await fetch(`https://vuejsbrasil-feedbacker-backend.vercel.app/apikey/exists?apikey=${apiKey}`, config)

    if (response.status === 200) {
      const iframe = document.createElement('iframe')
      iframe.src = WIDGET_URL
      iframe.id = 'feedback-iframe'
      iframe.style.position = 'fixed'
      iframe.style.bottom = '0px'
      iframe.style.right = '0px'
      iframe.style.overflow = 'hidden'
      iframe.style.border = '0px'
      iframe.style.zIndex = '99999'
      document.body.appendChild(iframe)
      window.addEventListener('message', (event) => {
        if (event.data.isWidget) return

        if (event.data.isOpen) {
          iframe.width = '100%'
          iframe.height = '100%'
        } else {
          iframe.width = '300px'
          iframe.height = '150px'
        }
      })
      return
    }
    console.error('* [feedbacker] was not loaded because apikey does not exists')
  }

  const script = document.createElement('script')
  // Initialize the agent at application startup.
  const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3')
    .then(FingerprintJS => FingerprintJS.load())

  // Get the visitor identifier when you need it.
  fpPromise
    .then(fp => fp.get())
    .then(result => {
      // This is the visitor identifier:
      const visitorId = result.visitorId
      console.log(visitorId)
    })

  script.src = fpPromise
  // script.src = '//cdn.jsdelivr.net/@fingerprintjs/fingerprintjs@3/dist/fp.min.js'
  // script.textContent = `
  // // Initialize the agent at application startup.
  // const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3')
  //   .then(FingerprintJS => FingerprintJS.load())
  //
  // // Get the visitor identifier when you need it.
  // fpPromise
  //   .then(fp => fp.get())
  //   .then(result => {
  //     // This is the visitor identifier:
  //     const visitorId = result.visitorId
  //     console.log(visitorId)
  //   })
  // `
  script.async = 'async'
  script.addEventListener('load', handleLoadWidget)

  document.body.appendChild(script)
}

window.init = init
