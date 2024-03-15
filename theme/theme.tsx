"use client";

import { PaletteColor, PaletteColorOptions, createTheme } from "@mui/material";


// import { PaletteColor, PaletteColorOptions, createTheme } from "@mui/material";
// import { Pacifico, Hind } from "next/font/google";
// const pacifico = Pacifico({ subsets: ["latin"], weight: ['400'], variable: '--font-pacifico' });
// const hind = Pacifico({ subsets: ["latin"], weight: ['400'], variable: '--font-hind' });
// import localFont from '@next/font/local';
// const myfont = localFont({ src: '@/assests/fonts/segoe/SegoeUI.woff' });

// module augmentation - TS concept
declare module "@mui/material/styles" {
  interface Theme {
    devs: {
      main: string;
    };
  }
  interface ThemeOptions {
    devs: {
      main: React.CSSProperties["color"];
    };
  }
  interface Palette {
    peach?: PaletteColor;
    invisible?: PaletteColor;
    greyish?: PaletteColor;
  }
  interface PaletteOptions {
    peach?: PaletteColorOptions;
    invisible?: PaletteColorOptions;
    greyish?: PaletteColorOptions;
  }
}

export const theme = createTheme({
  devs: {
    main: "#f5dce0",
  },
  palette: {
    primary: {
      main: "#000",
      light: "#474242",
      contrastText: "#fff",
    },
    peach: {
      main: "#F65656",
    },
    invisible: {
      main: "transparent",
    },
    greyish: {
      main: "#818181"
    }
  },
  typography: {
    fontFamily: 'var(--font-hind)',
  },
  components: {
    // MuiAppBar: {
    //   styleOverrides: {
    //     positionFixed: true,
    //     root: {
    //       width: `calc(100% - 240px)`,
    //       ml: `240px`,
    //     },
    //   },
    // },
    // // MuiDivider: {
    // //   styleOverrides: {
    // //     root: {
    // //       border: "0.5px #857777 inset",
    // //     },
    // //   },
    // // },
    // MuiDrawer: {
    //   defaultProps: {
    //     variant: "permanent",
    //     anchor: "top",
    //   },
    //   styleOverrides: {
    //     root: {
    //       width: 200,
    //       flexShrink: 0,
    //       "& .MuiDrawer-paper": {
    //         marginBottom: 34,
    //         zIndex: 1,
    //         background: "none",
    //         color: "#000",
    //         width: "100%",
    //         boxSizing: "border-box",
    //       },
    //     },
    //   },
    // },
    // MuiListItemButton: {
    //   styleOverrides: {
    //     root: {
    //       display: "inline-block",
    //       flexDirection: "row",
    //       "&: hover": { backgroundColor: "blue" },
    //       "&: active": { backgroundColor: "red" },
    //     },
    //   },
    // },
  },
});
