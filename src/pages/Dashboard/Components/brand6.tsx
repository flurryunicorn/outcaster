import {
    Stack,
    Flex,
    Text,
    Image,
    Box,
    VStack,
    SimpleGrid
} from "@chakra-ui/react"
import ChakraCarousel from "../../../components/ChakraCarousel"
import video2 from "../../../assets/video2.mp4"
import brandText2 from "../../../assets/img/brandText2.png"
import hero from "../../../assets/img/hero.png"
import CarouselItem from "./CarouselItem"
import bulbVision from "../../../assets/img/bulbvison.png"
import arrowMission from "../../../assets/img/arowmison.png"
import AboutUsItem from "./brand6Item"

const Brand6 = () => {
    return (
        <>
            <Stack height={"100vh"}>
                <Flex
                    height={"700px"}
                    overflow={"hidden"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                >
                    <div
                        style={{
                            backgroundColor: "hsla(0,3%,46%,.164)",
                            border: "1px solid #580970",
                            display: "block",
                            height: 830,
                            margin: "auto",
                            opacity: 0.5,
                            overflow: "hidden",
                            top: 0,
                            width: "100%",
                            zIndex: -6
                        }}
                    >
                        <video
                            autoPlay
                            loop
                            height={"100%"}
                            width={"100%"}
                            style={{ objectFit: "cover" }}
                        >
                            <source src={video2} type="video/mp4" />
                        </video>
                    </div>
                    <VStack
                        position={"absolute"}
                        w={"full"}
                        height={"inherit"}
                        pt={"84px"}
                    >
                        <Text
                            textTransform={"uppercase"}
                            fontFamily={"Montserrat"}
                            fontWeight={700}
                            fontSize={"64px"}
                            lineHeight={"78px"}
                            bg={
                                "linear-gradient(180deg, rgba(240, 240, 240, 0.6) 0%, rgba(240, 240, 240, 0) 100%)"
                            }
                            bgClip={"text"}
                            backdropFilter={"blur(2px)"}
                            css={{
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}
                        >
                            the outcasters
                        </Text>
                        <SimpleGrid
                            columns={2}
                            flex={1}
                            width={"full"}
                            alignSelf={"center"}
                        >
                            <AboutUsItem
                                image={bulbVision}
                                title="our vision"
                                content="With a team of experts, a solid research foundation, and a unique selling point, we are confident that Outcast will revolutionize the Influencer Marketing industry to scale it to the Asian markets and provide a one-stop solution for all advertising needs."
                            />
                            <AboutUsItem
                                image={arrowMission}
                                title="our mission"
                                content="Outcast Influencer Marketing is committed to making advertising transparent, accessible, and hassle-free for businesses of all sizes and enables socially outcasted people to be a part of a community."
                            />
                        </SimpleGrid>
                    </VStack>
                </Flex>
                <Flex flexDirection={"column"}>
                    <Image
                        src={brandText2}
                        alt="what people say about us"
                        maxW={"100%"}
                        h={"auto"}
                        mx={"auto"}
                    />
                    <Box display="flex" overflowX="auto" py={4}>
                        <ChakraCarousel gap={32} show>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                                (el, index) => (
                                    <CarouselItem
                                        key={index}
                                        image={hero}
                                        title="Mr. Kontolkhap"
                                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    />
                                )
                            )}
                        </ChakraCarousel>
                    </Box>
                </Flex>
            </Stack>
        </>
    )
}

export default Brand6
