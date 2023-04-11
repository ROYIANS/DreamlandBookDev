document.addEventListener('DOMContentLoaded', function () {
  const initConfig = () => {
    initDarkMode()
  }

  const initDarkMode = () => {
    const darkClass = window.saveToLocal.get(VAR_CONSTANT.STORE.DARK_MODE)
    if (darkClass) {
      document.documentElement.classList.add(darkClass)
    }
  }

  initConfig()
})
