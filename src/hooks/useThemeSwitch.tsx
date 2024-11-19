import {createContext, useContext, useMemo, useState} from "react";
import {createTheme, PaletteMode} from "@mui/material";
import {ColorModeContent, ThemeSwitchProviderProps} from "./types.ts";
import {ThemeProvider} from "@emotion/react";

const ColorModeContext = createContext<ColorModeContent>({
    toggleColorMode: () => {
    }
});

export const ThemeSwitchProvider = (props: ThemeSwitchProviderProps) => {
    const storedTheme = localStorage.getItem("theme") as PaletteMode;
    const [mode, setMode] = useState<PaletteMode>(storedTheme || "light");

    const toggleColorMode = () =>
        setMode((prevMode) => {
            localStorage.setItem("theme", prevMode === "light" ? "dark" : "light");
            return prevMode === "light" ? "dark" : "light";
        });

    const colorMode = useMemo(() => ({toggleColorMode}), []);

    const theme = useMemo(() => createTheme({
        palette: {mode}
    }), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export const useThemeSwitch = () => useContext(ColorModeContext);