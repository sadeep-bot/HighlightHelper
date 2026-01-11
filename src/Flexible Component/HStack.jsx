export const HStack = ({
  children,

  // Layout
  justify = "center",
  align = "center",
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

  gap = "10px",

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

  // Text
  textAlign,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,

  style,
  ...rest
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row", // fixed for HStack
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

        // Spacing
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

        gap, // horizontal gap

        // Styling
        background: bg,
        color,
        border,
        borderRadius,
        boxShadow: shadow,

        // Text
        textAlign,
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing,

        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default HStack;
