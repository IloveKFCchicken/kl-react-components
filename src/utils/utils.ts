function getClickPosition(e: any) {
  const { pageX, pageY, target } = e
  const rect = target.getBoundingClientRect()
  const left = pageX - (rect.left + window.scrollX)
  const top = pageY - (rect.top + window.scrollY)
  const standard = Math.max(rect.width, rect.height)
  return { left, top, standard }
}

export {
  getClickPosition
}