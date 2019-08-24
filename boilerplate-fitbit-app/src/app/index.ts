import clock from 'clock'
import document from 'document'
// import { preferences } from 'user-settings'
import * as util from '../common/utils'

const FLOOR_MINUTES = 5

const getPhrase = (minutes: number): string[] => {
  switch (minutes) {
    case 0:
      return ['oclock']
    case 5:
      return ['five', 'past']
    case 10:
      return ['ten', 'past']
    case 15:
      return ['a', 'quarter', 'past']
    case 20:
      return ['twenty', 'past']
    case 25:
      return ['twenty', 'five', 'past']
    case 30:
      return ['half', 'past']
    case 35:
      return ['twenty', 'five', 'to']
    case 40:
      return ['twenty', 'to']
    case 45:
      return ['a', 'quarter', 'to']
    case 50:
      return ['ten', 'to']
    case 55:
      return ['five', 'to']
    default:
      return ['oclock']
  }
}

// Update the clock every minute
clock.granularity = 'minutes'

// Get a handle on the <text> element
// const myLabel = document.getElementById("myLabel");

// Update the <text> element every tick with the current time
clock.ontick = evt => {
  const today = evt.date
  let hours = today.getHours() % 12 || 12
  const minutes = util.floor(today.getMinutes(), FLOOR_MINUTES)
  const phrases = getPhrase(minutes)

  // initialize
  document.getElementsByClassName('off').forEach((item: Element) => {
    item.style.display = 'none'
  })

  // display hours
  if (minutes > 30) {
    hours = hours + 1 > 12 ? 1 : hours + 1
  }
  const elm = document.getElementById(`hour-${hours}`)
  if (elm != null) {
    elm.style.display = 'inherit'
  }

  // display minutes
  phrases.forEach(phrase => {
    const elm = document.getElementById(`phrase-${phrase}`)
    if (elm != null) {
      elm.style.display = 'inherit'
    }
  })
}
