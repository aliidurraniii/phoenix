export const selectSemanticTokens = {
  bg: {
    outline: { value: 'colors.primary.white' },
    subtle: { value: 'colors.primary.white' },

    contentHover: { value: 'colors.blue.200' },
  },
  border: {
    outline: { value: 'colors.gray.400' }, // Closed state
    outlineOpen: { value: 'colors.primary.blue' }, // Open state
    outlineSelected: { value: 'colors.primary.blue' }, // Selected/has value
    content: { value: 'colors.blue.200' }, // Dropdown content border

    subtle: { value: 'colors.gray.400' },
    subtleOpen: { value: 'colors.primary.blue' },
    subtleSelected: { value: 'colors.primary.blue' },
  },
  text: {
    outline: { value: 'colors.primary.blue' }, // Selected value text
    subtle: { value: 'colors.primary.blue' }, // Selected value text
    placeholder: { value: 'colors.primary.black' }, // Placeholder text
  },
  fontSizes: {
    xs: { value: 'fontSizes.xs' }, // 12px - Extra small for compact selects
    sm: { value: 'fontSizes.sm' }, // 14px - Small for tight layouts
    md: { value: 'fontSizes.md' }, // 16px - Medium (default size)
    lg: { value: 'fontSizes.lg' }, // 18px - Large for emphasis
    xl: { value: 'fontSizes.xl' }, // 20px - Extra large for headers
  },
  fontWeights: {
    normal: { value: 'fontWeights.normal' }, // Placeholder weight
    bold: { value: 'fontWeights.bold' }, // Selected value weight
  },
  radii: {
    outline: { value: 'radii.sm' },

    subtle: { value: 'radii.sm' },
    content: { value: 'radii.md' },
  },
};
