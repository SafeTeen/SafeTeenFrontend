export const Colors = {
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
    systemRed: "#F04D51"
} as const

export type colorsKeyOfType = keyof typeof Colors
