import { Center, Flex, Box, Text, Grid, Image, Stack } from "@chakra-ui/react"
import MobileBrand from "../../../assets/img/mobile.png"

const Brand3 = () => {
    return (
        <Center height={"100vh"}>
            <Grid
                templateColumns="repeat(3, 1fr)"
                gap={6}
                w={"60%"}
                h={"60%"}
                bg={
                    "linear-gradient(302.24deg, rgba(240, 240, 240, 0.08) 0%, rgba(240, 240, 240, 0) 100%)"
                }
                filter={"drop-shadow(0px 8px 20px rgba(255, 255, 255, 0.05))"}
                backdropFilter={"blur(10px)"}
                borderRadius={"40px"}
                border={"1px solid hsla(0,0%,100%,.384)"}
            >
                <Stack alignSelf={"center"} textAlign={"right"}>
                    <Text
                        fontFamily={"Inter"}
                        fontWeight={700}
                        fontSize={"128px"}
                        lineHeight={"155px"}
                        bg={
                            "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"
                        }
                        backgroundClip={"text"}
                    >
                        1
                    </Text>
                    <Text fontWeight={400} fontSize="24px" lineHeight="29px">
                        Create your account
                        <br />
                        and link your socials.
                    </Text>
                </Stack>
                <Image
                    src={MobileBrand}
                    height={"auto"}
                    width={"250px"}
                    m={"auto"}
                    alt="mobile"
                />
                <Flex alignSelf={"center"}>
                    <Text
                        textShadow={"1px 1px 3px #fff"}
                        fontSize={"30px"}
                        fontWeight={700}
                    >
                        Enter Challenges.
                        <br />
                        Get Paid.
                    </Text>
                </Flex>
            </Grid>
        </Center>
    )
}

export default Brand3
