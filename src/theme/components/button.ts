export const buttonStyles = {
    components: {
        Button: {
            variants: {
                "no-hover": {
                    
                }
            },
            baseStyle: {
                bgColor: "rgba(19, 19, 19, 0.4) !important",
                color: "#F0F0F0",
                border: "1px solid rgba(245, 58, 238, 0.4)",
                backdropFilter: "blur(5px)",
                borderRadius: "20px",
                _hover: {
                    filter: "brightness(130%)"
                },
                _focus: {
                    filter: "brightness(90%)"
                },
                _active: {
                    filter: "brightness(90%)"
                }
            }
        }
    }
}
