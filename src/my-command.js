const sketch = require('sketch')
const UI = require('sketch/ui')

function calcShadowY(elevation) {
  let val = 0
  if(elevation === 0) {
    val = 0
  }
  else {
    val = elevation / 2
  }
  return val.toString()
}

function calcShadowBlur(elevation) {
  let val = 0
  if(elevation === 0) {
    val = 0
  }
  else if(elevation < 8) {
    val = elevation * 1.5
  }
  else if(elevation < 16) {
    val = elevation / 2 + 8
  }
  else {
    val = elevation
  }
  return val.toString()
}

function calcShadowSpread(elevation) {
  let val = 0
  if(elevation === 0) {
    val = 1
  }
  else {
    val = 0
  }
  return val.toString()
}

export default function(context) {
  const document = sketch.fromNative(context.document)

  if(document.selectedLayers.length < 1) {
    return
  }

  const outputString = UI.getStringFromUser('Elevation', '16')
  const elevation = parseInt(outputString, 10)

  const shadowY = calcShadowY(elevation)
  const shadowBlur = calcShadowBlur(elevation)
  const shadowSpread = calcShadowSpread(elevation)

  document.selectedLayers.forEach(layer => {
    layer.style.shadows = [
      {
        color: 'rgba(0, 0, 0, 0.02)',
        x: '0',
        y: '0',
        blur: '0',
        spread: '1',
      },
      {
        color: 'rgba(0, 0, 0, 0.1)',
        x: '0',
        y: shadowY,
        blur: shadowBlur,
        spread: shadowSpread,
      }
    ]
  })

  context.document.showMessage("Elevation set!")
}
