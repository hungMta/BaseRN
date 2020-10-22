import colors from './colors'
import fontWeights from './fontWeights'

type FontSize =
  | 60
  | 40
  | 35
  | 25
  | 22
  | 21
  | 20
  | 18
  | 17
  | 16
  | 14
  | 13
  | 12
  | 11
  | 10
  | 9
type FontWeight = 'normal' | 'bold' | 'extraBold'
type LineHeight = 1 | 1.25 | 1.5 | 1.75

type TypographyProp = {
  fontSize: FontSize
  fontWeight?: FontWeight
  lineHeight?: LineHeight
  color?: string
}

const typography = ({
  fontSize,
  fontWeight,
  lineHeight,
  color,
}: TypographyProp) => {
  return {
    color: color || colors.textBlackPrimary,
    fontSize,
    fontWeight: fontWeight ? fontWeights[fontWeight] : undefined,
    lineHeight: lineHeight ? Math.round(fontSize * lineHeight) : undefined,
  }
}

export default typography
