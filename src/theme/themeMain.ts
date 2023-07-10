import { extendTheme } from "@chakra-ui/react"
import { globalStyles } from "./styles"
import { bgMain } from "./bgMain"
import { breakpoints } from "./foundations/breakpoints"
import { MainPanelComponent } from "./additions/layout/MainPanel"
import { mainButtonStyles } from "./components/button"
import { mainTextStyles } from "./components/text"
// import { mode } from "@chakra-ui/theme-tools";

export default extendTheme(
    { breakpoints }, // Breakpoints
    bgMain, // Global styles
    globalStyles, // Global styles
    MainPanelComponent,
    mainButtonStyles,
    mainTextStyles
)
