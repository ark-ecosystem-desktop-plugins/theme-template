module.exports = {
  getThemes () {
    return {
      'plugin-light-mode': {
        cssPath: 'styles/light.css',
        darkMode: false
      },
      'plugin-dark-mode': {
        cssPath: 'styles/dark.css',
        darkMode: true
      }
    }
  }
}
