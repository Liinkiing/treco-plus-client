export const rgba = (hex: string, alpha: number): string => {
  const test = hex.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (m, r, g, b) => '#' + r + r + g + g + b + b
  )
  if (test && test.substring(1).match(/.{2}/g)) {
    return `rgba(${test
      .substring(1)
      .match(/.{2}/g)!
      .map(x => parseInt(x, 16))
      .join(', ')}, ${alpha})`
  }
  throw new Error('Could not convert color')
}

export const hex = (color: string): number => {
  return parseInt(color.replace(/^#/, ''), 16)
}
