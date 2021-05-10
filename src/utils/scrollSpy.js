export default function scrollSpy({ offset = 100 } = {}) {
  const sectionElements = document.querySelectorAll('[data-spySection]')
  const sectionOffsets = {}
  ;[...sectionElements].forEach((section) => {
    sectionOffsets[section.getAttribute('data-spySection')] = section.offsetTop
  })

  function handleActiveLinks() {
    console.log('ehl')
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
    for (const [sectionId, sectionOffset] of Object.entries(sectionOffsets)) {
      if (sectionOffset - offset <= scrollPosition) {
        // set in last iteration of loop
        const currentActive = document.querySelector(`.activeSpyLink`)
        const toBeActive = document.querySelector(`[data-spyLink="${sectionId}"]`)

        if (currentActive) currentActive.classList.remove('activeSpyLink')
        if (toBeActive) toBeActive.classList.add('activeSpyLink')
      }
    }
  }

  handleActiveLinks()
  return throttle(handleActiveLinks, 100)
}

function throttle(func, timeFrame) {
  var lastTime = 0
  return function () {
    var now = new Date()
    if (now - lastTime >= timeFrame) {
      func()
      lastTime = now
    }
  }
}
