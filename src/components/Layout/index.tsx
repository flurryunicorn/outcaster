import {
    Box,
    Portal,
    useColorModeValue,
    useStyleConfig
} from "@chakra-ui/react"
import React from "react"
import type { ReactNode } from "react"
import { ToastContainer } from "react-toastify"

import Meta from "../Meta"

import { AnimatePresence } from "framer-motion"
import AdminNavbar from "components/Navbars/AdminNavbar"
// import { routes } from "/Router/routes"

type LayoutProps = {
    children: ReactNode
}

const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text"
    for (let i = 0; i < routes.length; i++) {
        if (routes[i].collapse) {
            let collapseActiveRoute = getActiveRoute(routes[i].views)
            if (collapseActiveRoute !== activeRoute) {
                return collapseActiveRoute
            }
        } else if (routes[i].category) {
            let categoryActiveRoute = getActiveRoute(routes[i].views)
            if (categoryActiveRoute !== activeRoute) {
                return categoryActiveRoute
            }
        } else {
            if (
                window.location.href.indexOf(
                    routes[i].layout + routes[i].path
                ) !== -1
            ) {
                return routes[i].name
            }
        }
    }
    return activeRoute
}

const Layout = ({ children }: LayoutProps) => {
    const mainPanel = React.createRef<HTMLDivElement>()
    const styles = useStyleConfig("MainPanel")

    return (
        <>
            <Meta />

            <Box ref={mainPanel} __css={styles} w="full">
                <Portal>
                    <AdminNavbar
                        onOpen={() => alert("open")}
                        logoText={"BetFi Protocol"}
                        brandText={location.pathname.slice(1)}
                        fixed={true}
                    />
                </Portal>
                <AnimatePresence mode="wait">{children}</AnimatePresence>
            </Box>

            <ToastContainer
                key={"toastContainer"}
                closeButton={false}
                autoClose={3000}
                draggableDirection={"x"}
                newestOnTop={false}
                pauseOnHover
                toastStyle={{
                    borderRadius: "1em",
                    background: useColorModeValue(
                        "white",
                        "var(--chakra-colors-gray-800)"
                    )
                }}
                progressStyle={{
                    background: "rgba(2, 226, 150, 1)",
                    boxShadow: "var(--chakra-shadows-md)",
                    height: "0.6rem"
                }}
                bodyStyle={{
                    fontFamily: "var(--chakra-fonts-heading)",
                    fontSize: "1.25em",
                    color: useColorModeValue(
                        "var(--chakra-colors-gray-700)",
                        "white"
                    )
                }}
                position="bottom-right"
                closeOnClick
                draggablePercent={20}
            />
        </>
    )
}

export default Layout
