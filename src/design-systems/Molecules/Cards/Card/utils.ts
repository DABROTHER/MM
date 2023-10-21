import { BorderRadiusVariant, BorderRadiusVariantSize, TransformVariant } from './interface'

export const getBorderRadius = (variant: BorderRadiusVariant, size: BorderRadiusVariantSize = 'sm'): string => {
  const borderRadiusClasses: Record<BorderRadiusVariant, string> = {
    all: `rounded-${size}`,
    top: `rounded-tl-${size} rounded-tr-${size}`,
    bottom: `rounded-bl-${size} rounded-br-${size}`,
    none: 'rounded-none',
  }

  if (variant in borderRadiusClasses) {
    return borderRadiusClasses[variant]
  } else {
    throw new Error('Invalid Button variant: ' + variant)
  }
}

export const getBorderRadiusSize = (variant: BorderRadiusVariantSize): string => {
  const borderRadiusClasses: Record<BorderRadiusVariantSize, string> = {
    sm: 'rounded-sm',
    xs: 'rounded-xs',
  }

  if (variant in borderRadiusClasses) {
    return borderRadiusClasses[variant]
  } else {
    throw new Error('Invalid Button variant: ' + variant)
  }
}
export const getTransform = (variant: TransformVariant) => {
  switch (variant) {
    case 'x-direction':
      return ' card-shadow'
    case 'y-direction':
      return 'transform card-shadow'
    case 'z-direction':
      return 'transform hover:scale-110 transition-transform duration-300 group-hover:scale-110'
    default:
      return ''
  }
}
export const launchpadNotification = 'right-4 top-4 items-center justify-center rounded-sm'
