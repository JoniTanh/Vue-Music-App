export default {
  formatTime(time) {
    const minutes = Math.floor(time / 60) || 0
    const seconds = Math.round(time - minutes * 60 || 0)

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  },

  formatDate(dateString) {
    const dateObj = new Date(dateString)
    const formattedDate = dateObj.toLocaleDateString('fi-FI', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })

    const hour = dateObj.getHours().toString().padStart(2, '0')
    const minute = dateObj.getMinutes().toString().padStart(2, '0')
    const second = dateObj.getSeconds().toString().padStart(2, '0')

    const formattedTime = `${hour}:${minute}:${second}`

    return `${formattedDate} ${formattedTime}`
  }
}
