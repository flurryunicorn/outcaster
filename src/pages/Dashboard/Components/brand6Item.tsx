import { VStack, Image, Text } from "@chakra-ui/react"

type AboutUsItemProps = {
    image?: any
    title?: string
    content?: string
}
const AboutUsItem = ({ image, title, content }: AboutUsItemProps) => {
    return (
        <VStack
            bg={"rgba(240, 240, 240, 0.1)"}
            backdropFilter={"blur(10px)"}
            borderRadius={"40px"}
            width={"356px"}
            mx={"calc(50% - 178px)"}
            h={"450px"}
            p={"20px"}
        >
            <Image
                src={image}
                alt="Our vision"
                w={"60px"}
                h={"60px"}
                mt={"20px"}
            />
            <Text
                textShadow={"white 1px 1px 3px"}
                fontWeight={700}
                fontSize={"1.75rem"}
                lineHeight={1.2}
                textTransform={"uppercase"}
            >
                {title}
            </Text>
            <Text textAlign={"center"}>{content}</Text>
        </VStack>
    )
}

export default AboutUsItem
