if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })
    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}

export default async (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  }

  const findEl = async (hash, x) => {
    return (
      document.querySelector(hash) ||
      new Promise((resolve, reject) => {
        if (x > 50) {
          return resolve()
        }
        setTimeout(() => {
          resolve(findEl(hash, ++x || 1))
        }, 100)
      })
    )
  }

  if (to.hash) {
    const el = await findEl(to.hash)
    if ('scrollBehavior' in document.documentElement.style) {
      return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
    } else {
      return window.scrollTo(0, el.offsetTop)
    }
  }

  return { x: 0, y: 0 }
}
