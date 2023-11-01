import { defineStore } from 'pinia'

export default defineStore('background', {
  state: () => ({
    selectedBackground: 'winter'
  }),
  getters: {
    currentBackgroundImage: (state) => {
      switch (state.selectedBackground) {
        case 'colourful':
          return '/assets/img/happy-music-bg.png'
        case 'dark':
          return '/assets/img/man-wolf-music-bg.png'
        case 'summer':
          return '/assets/img/summer-bg.png'
        case 'waterfall':
          return '/assets/img/waterfall-bg.png'
        case 'winter':
          return '/assets/img/winter-bg.png'
        case 'woman':
          return '/assets/img/woman-music-bg.png'
        default:
          return '/assets/img/winter-bg.png'
      }
    }
  },
  actions: {
    setSelectedBackground(value) {
      this.selectedBackground = value
    }
  }
})
