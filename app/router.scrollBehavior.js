export default function(to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false

  const Pages = getMatchedComponents(to)

  // Scroll to the top of the page if...
  if (
    // One of the children set `scrollToTop`
    Pages.some((Page) => Page.options.scrollToTop) ||
    // scrollToTop set in only page without children
    (Pages.length < 2 && Pages.every((Page) => Page.options.scrollToTop !== false))
  ) {
    position = { x: 0, y: 0 }
  }
}
