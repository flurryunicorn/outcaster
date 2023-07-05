import { Flex, Box, Text } from "@chakra-ui/react"
import { ReactNode } from "react"

type Brand5CardProps = {
    isCenter?: boolean
    title?: ReactNode | string
    content?: string
}
const Brand5Card = ({ isCenter, title, content }: Brand5CardProps) => {
    return (
        <>
            <Flex
                justifyContent={"center"}
                px={"30px"}
                alignSelf={"center"}
                _hover={{
                    transform: "scale(1.1)"
                }}
                transition={".5s ease"}
                cursor={"pointer"}
            >
                <Flex
                    flexDirection={"column"}
                    alignItems={"center"}
                    padding={"36px 55px"}
                    gap={"80px"}
                    bg={"rgba(51, 51, 51, 0.2)"}
                    backdropFilter={"blur(10px)"}
                    borderRadius={"20px"}
                    border={"1px solid rgba(81, 40, 136, 0.5)"}
                    width={"full"}
                    height={isCenter ? "490px" : "430px"}
                >
                    <Text
                        textTransform={"uppercase"}
                        fontFamily={"Montserrat"}
                        fontWeight={700}
                        fontSize={"32px"}
                        lineHeight={"39px"}
                        color={"#F0F0F0"}
                        textAlign={"center"}
                        textShadow={"1px 1px 3px #fff"}
                        mt={"5px"}
                    >
                        {title}
                    </Text>
                    <Text
                        fontFamily={"Montserrat"}
                        fontWeight={400}
                        fontSize={"16px"}
                        lineHeight={"20px"}
                        textAlign={"center"}
                        color={"#F0F0F0"}
                    >
                        {content}
                    </Text>
                </Flex>
                <Box
                    borderRadius={100}
                    background="linear-gradient(360deg, rgba(240, 240, 240, 0.10) 0%, rgba(240, 240, 240, 0.00) 100%)"
                    backdropFilter="blur(2px)"
                    height={"94px"}
                    width={"94px"}
                    position={"absolute"}
                    mt={"-47px"}
                    border={"1px solid rgba(240, 240, 240, 0.5)"}
                    p={"23.5px"}
                >
                    <Box
                        borderRadius={"100px"}
                        bg={"#FFF"}
                        w={"47px"}
                        h={"47px"}
                    />
                </Box>
            </Flex>
        </>
    )
}

export default Brand5Card
