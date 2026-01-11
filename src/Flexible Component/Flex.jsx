export const Flex = ({
  children,

  // Layout
  direction = "column",
  justify = "center",
  align = "start",
  wrap = "nowrap",

  // Spacing
  p,
  pt,
  pb,
  pl,
  pr,

  m,
  mt,
  mb,
  ml,
  mr,

  // gap
  gap,

  // Size
  w,
  h,
  maxW,
  maxH,
  minW,
  minH,

  // Styling
  bg,
  color,
  border,
  borderRadius,
  shadow,

  // Text defaults
  textAlign,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,

  // Spread rest props (style overrides)
  style,
  ...rest
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,

        // Size
        width: w,
        height: h,
        maxWidth: maxW,
        maxHeight: maxH,
        minWidth: minW,
        minHeight: minH,

        // Spacing system
        padding: p,
        paddingLeft: pl,
        paddingRight: pr,
        paddingTop: pt,
        paddingBottom: pb,

        margin: m,
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,

        gap,

        // Style system
        background: bg,
        color: color,
        border: border,
        borderRadius: borderRadius,
        boxShadow: shadow,

        // Text defaults
        textAlign,
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing,

        ...style, // allow external styles to override
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
