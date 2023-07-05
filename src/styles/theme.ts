const Font = (
  w: number,
  p: number,
  h: number
) => `${w} normal ${p}px/${h}px "pretendard",sans-serif
`;

export const theme = {
  color: {
    main100: "#D3FFEF",
    main300: "#8DFDD5",
    main500: "#22F6AA",
    main700: "#10DF94",
    main900: "#09AC72",
    white: "#FFFFFF",
    gray100: "#FAFAFA",
    gray300: "#F6F6F6",
    gray500: "#DEDEDE",
    gray600: "#D9D9D9",
    gray700: "#8D8D8D",
    gray800: "#424242",
    gray900: "#2F2F2F",
    black: "#000000",
    systemRed: "#F04D51",
  },
  font: {
    Heading1: Font(700, 40, 60),
    Heading2: Font(700, 36, 54),
    Heading3: Font(700, 32, 48),
    Heading4: Font(500, 28, 40),
    Heading5: Font(500, 24, 36),
    Heading6: Font(500, 20, 28),
    Body1: Font(500, 16, 24),
    Body2: Font(400, 16, 24),
    Body3: Font(500, 14, 20),
    Body4: Font(400, 14, 20),
    Caption: Font(400, 12, 18),
  },
};
