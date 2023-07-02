import { Center, Text, Image, VStack, Button } from "@chakra-ui/react"
import BrandText1 from "../../../assets/img/brandText1.png"
import bgImage from "../../../assets/img/bg-image.png"

const Brand1 = () => {
    return (
        <Center
            height="100vh"
            alignItems={"center"}
            bgImg={bgImage}
            bgSize={"cover"}
            bgPosition={"center center"}
            mixBlendMode={"screen"}
        >
            <VStack gap={"30px"}>
                <Image
                    src={BrandText1}
                    alt="break from free norms, thrive uniquely"
                />
                <Text
                    width={"752px"}
                    textAlign={"center"}
                    fontWeight={400}
                    fontSize="20px"
                    lineHeight="24px"
                >
                    Marketers naturally want to locate influencers more quickly
                    now that influencer marketing is so crucial to the expansion
                    of businesses. A searchable database is essential since
                    influencer figuring is one of the most challenging
                    components of the company. Additionally, you need to
                    distinguish between prospective influencers who are real and
                    those who are not. Thankfully, a new instrument called
                    Outcast influencers is at your disposal.
                </Text>
                <Button
                    w={"233px"}
                    h={"52px"}
                    bg={"rgba(240, 240, 240, 0.1)"}
                    padding={"16px 40px"}
                    border={"1px solid #F0F0F0"}
                >
                    Start your Journey
                </Button>
            </VStack>
        </Center>
    )
}

export default Brand1
