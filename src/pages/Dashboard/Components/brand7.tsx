import { Center, Flex, IconButton, Stack, Text, Image } from "@chakra-ui/react"
import video1 from "../../../assets/video.mp4"
import FaceBookIcon from "../../../assets/img/facebook.png"
import InstagramIcon from "../../../assets/img/instagram.png"
import LinkedinIcon from "../../../assets/img/linkedin.png"

const Brand7 = () => {
    return (
        <>
            <Stack mt={"80px"}>
                <Flex flexDirection={"column"} h={"500px"}>
                    <div
                        style={{
                            backgroundColor: "hsla(0,3%,46%,.164)",
                            border: "1px solid #580970",
                            display: "block",
                            height: 500,
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
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%"
                            }}
                        >
                            <source src={video1} type="video/mp4" />
                        </video>
                    </div>
                    <Center w={"full"} height={"inherit"} position={"absolute"}>
                        <Stack
                            bg={"hsla(0,0%,94%,.05)"}
                            backdropFilter={"blur(5px)"}
                            h={"300px"}
                            w={"700px"}
                            borderRadius={"20px"}
                            p={"60px 100px"}
                            gap={"20px"}
                        >
                            <Text
                                textShadow={"white 1px 1px 3px"}
                                fontSize={"30px"}
                                fontWeight={600}
                                lineHeight={"49px"}
                                textAlign={"center"}
                            >
                                Join our Community
                            </Text>
                            <Text
                                fontSize={"12px"}
                                fontWeight={400}
                                lineHeight={"15px"}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </Text>
                            <Flex justifyContent={"center"} cursor={"pointer"}>
                                <Image
                                    src={FaceBookIcon}
                                    alt="facebook"
                                    maxW={"100%"}
                                    h={"auto"}
                                    mr={"20px"}
                                />
                                <Image
                                    src={InstagramIcon}
                                    alt="instagram"
                                    maxW={"100%"}
                                    h={"auto"}
                                    mr={"20px"}
                                />
                                <Image
                                    src={LinkedinIcon}
                                    alt="linkedin"
                                    maxW={"100%"}
                                    h={"auto"}
                                    mr={"20px"}
                                />
                            </Flex>
                        </Stack>
                    </Center>
                </Flex>
            </Stack>
        </>
    )
}

export default Brand7
