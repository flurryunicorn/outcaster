import {
    Center,
    Text,
    Image,
    VStack,
    Button,
    SimpleGrid,
    Box,
    Stack
} from "@chakra-ui/react"
import BrandMan from "../../../assets/img/brand-man.png"

const Brand2 = () => {
    return (
        <SimpleGrid columns={2} height={"100vh"}>
            <Center ml={"20%"}>
                <Box
                    bg={"rgba(196, 196, 196, 0.2)"}
                    borderRadius={"40px"}
                    w={"464.57px"}
                    h={"522.84px"}
                    position={"absolute"}
                />
                <Image src={BrandMan} alt="brand" zIndex={1} />
            </Center>
            <Stack gap={"30px"} alignSelf={"center"} width={"60%"}>
                <Text
                    color="#fff"
                    fontSize="52px"
                    fontWeight={700}
                    lineHeight="63px"
                    textShadow="1px 1px 3px #fff"
                >
                    Choose what
                    <br />
                    you want to do
                </Text>
                <Text
                    color="hsla(0,0%,100%,.753)"
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight={500}
                    lineHeight="23px"
                    marginTop="40px"
                >
                    Being an end to end solution to the market’s need, Outcast
                    have identified broken links for both influencers and
                    brands, focusing on pain points such as no medium to reach
                    out to each other, no management of advertiser requests, no
                    data-based metrics to identify a campaign's results, no
                    medium to communicate exact requirements from either ends,
                    no financially trusted medium, and finally, no service
                    platform that either party can trust to make business flow
                    smooth. Through Outcast, we have developed a simplified
                    analytics dashboard ensuring transparent campaign analytics,
                    directly linked to Instagram leaving no room for confusions
                    or conversations. With real time results technologically
                    displayed to parties, Outcast serves as a medium to balance
                    accountability to transparency.
                </Text>
                <Button
                    w={"199px"}
                    h={"62px"}
                    bg={
                        "linear-gradient(234.57deg, rgba(81, 40, 136, 0.4) -25.32%, rgba(81, 40, 136, 0) 109.72%)"
                    }
                    padding={"7px 63px"}
                    border={"1px solid #F0F0F0"}
                >
                    Join Now
                </Button>
            </Stack>
        </SimpleGrid>
    )
}

export default Brand2
