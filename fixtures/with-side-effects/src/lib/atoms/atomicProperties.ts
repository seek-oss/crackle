export const space = {
  medium: '5px',
  none: 0,
} as const;

export const responsiveProperties = {
  display: {
    none: 'none',
    block: 'block',
    inline: 'inline',
    inlineBlock: 'inline-block',
    flex: 'flex',
  },
  position: ['relative', 'absolute', 'fixed'],
  paddingTop: space,
  paddingBottom: space,
  paddingRight: space,
  paddingLeft: space,
} as const;

export type ResponsiveProperties = keyof typeof responsiveProperties;
