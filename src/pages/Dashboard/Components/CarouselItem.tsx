import { Flex, Image, Text, UseImageProps } from "@chakra-ui/react"
import { ReactNode } from "react"

type CarouselItemProps = {
    image?: any
    title?: string
    content?: string
}
const CarouselItem = ({ image, title, content }: CarouselItemProps) => {
    return (
        <>
            <Flex
                flexDirection={"row"}
                alignItems={"center"}
                p={"32px 40px"}
                gap={"40px"}
                width={"526px"}
                height={"156px"}
                bg={"rgba(240, 240, 240, 0.05)"}
                borderRadius={"40px"}
                _hover={{
                    transform: "scale(1.1)"
                }}
                transition={".5s ease"}
            >
                <Image
                    src={image}
                    alt="hero"
                    width={"83px"}
                    height={"83px"}
                    rounded={"full"}
                />
                <Flex
                    flexDirection={"column"}
                    height={"full"}
                    justifyContent={"space-between"}
                >
                    <Text
                        fontWeight={600}
                        fontSize={"24px"}
                        lineHeight={"29px"}
                    >
                        {title}
                    </Text>
                    <Text
                        fontWeight={400}
                        fontSize={"12px"}
                        lineHeight={"15px"}
                    >
                        {content}
                    </Text>
                </Flex>
            </Flex>
        </>
    )
}

export default CarouselItem
