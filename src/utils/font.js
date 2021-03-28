/**
 * Return a font-family fits with font-weight and font-style we have
 * @param {Number} fontWeight
 * @param {String} fontStyle
 */
export const getFontFamily = (fontWeight, fontStyle) => {
  let fontFamily = 'Ubuntu-Regular'
  const italic = fontStyle === 'italic'
  switch (fontWeight) {
    case '100':
    case '200':
    case '300':
      fontFamily = italic ? 'Ubuntu-LightItalic' : 'Ubuntu-Light'
      break
    case 'normal':
    case '400':
      fontFamily = italic ? 'Ubuntu-Italic' : 'Ubuntu-Regular'
      break
    case '500':
    case '600':
      fontFamily = italic ? 'Ubuntu-MediumItalic' : 'Ubuntu-Medium'
      break
    case 'bold':
    case '700':
    case '800':
    case '900':
      fontFamily = italic ? 'Ubuntu-BoldItalic' : 'Ubuntu-Bold'
      break
    default:
      fontFamily = italic ? 'Ubuntu-Italic' : 'Ubuntu-Regular'
  }
  return fontFamily
}
