const sketch = require('sketch')
const UI = require('sketch/ui')

function calcShadowY(elevation) {
  if(elevation === 0) {
    return '0'
  }
  return elevation / 2
}

function calcShadowBlur(elevation) {
  if(elevation === 0) {
    return '0'
  }
  else if(elevation < 8) {
    return elevation * 1.5
  }
  else if(elevation < 16) {
    return elevation / 2 + 8
  }
  return elevation
}

function calcShadowSpread(elevation) {
  if(elevation === 0) {
    return '1'
  }
  return '0'
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
        spread: 1,
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
