import {
    Center,
    SimpleGrid,
    Image,
    Text,
    Button,
    Stack,
    VStack
} from "@chakra-ui/react"
import AboutTextImage from "../../../assets/img/aboutoutcasters.png"
import RotatingPNG from "../../../assets/img/rotating-png-tree.png"

const Brand4 = () => {
    return (
        <Stack height={"100vh"}>
            <VStack m={"auto"} gap={"40px"}>
                <Image
                    mx={"auto"}
                    src={AboutTextImage}
                    maxW={"100%"}
                    alt="about outcasters"
                />
                <SimpleGrid columns={2} flex={1}>
                    <Image
                        m={"auto"}
                        src={RotatingPNG}
                        alt="rotating png tree"
                    />
                    <Stack gap={"30px"} alignSelf={"center"} width={"80%"}>
                        <Text
                            color="hsla(0,0%,100%,.753)"
                            fontSize="18px"
                            fontStyle="normal"
                            fontWeight={500}
                            lineHeight="23px"
                            marginTop="40px"
                        >
                            Outcast is a revolutionary one-stop platform for
                            influencer marketing that promises to be a
                            game-changer in the advertising industry. Outcast
                            established a traditional advertising industry in
                            2017 with a view to capture the market with a
                            traditional offline marketing model and assisted the
                            market by connecting influencers to the brands
                            manually. With 6 years of experience in the industry
                            Outcast realized how everything could be automated
                            and worked upon digitally. The expansive market
                            study revealed the frustrations faced by entities
                            conducting business through the current process of
                            working with brands and navigating through the
                            complex corporate systems and their unclear
                            expectations. The Outcast Influencer Marketing
                            initiative is committed to making advertising
                            transparent, accessible, and hassle-free for
                            businesses of all sizes. With the global market for
                            influencer marketing skyrocketing to $16 billion,
                            Outcast is the answer to the industry's pain points.
                        </Text>
                        <Button
                            w={"199px"}
                            h={"62px"}
                            bg={"rgba(240, 240, 240, 0.1)"}
                            backdropFilter={"blur(5px)"}
                            padding={"7px 63px"}
                            border={"1px solid rgba(245, 58, 238, 0.2)"}
                        >
                            Read more
                        </Button>
                    </Stack>
                </SimpleGrid>
            </VStack>
        </Stack>
    )
}

export default Brand4
