import { Box } from "@chakra-ui/react"

const Sidebar = () => {
    let variantChange = "0.2s linear"
    let sidebarBg = "#FFF"
    //"linear-gradient(111.84deg, rgba(6, 11, 38, 0.94) 59.3%, rgba(26, 31, 55, 0) 100%)"

    return (
        <Box /*display={{ sm: "none", xl: "block" }}*/ position="fixed">
            <Box
                bg={sidebarBg}
                backdropFilter="blur(10px)"
                transition={variantChange}
                w="260px"
                maxW="260px"
                h="100vh"
                ps="20px"
                pe="20px"
            ></Box>
        </Box>
    )
}

export default Sidebar
