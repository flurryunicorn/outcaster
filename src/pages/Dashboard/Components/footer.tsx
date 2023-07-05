import { Flex, Image, VStack, Text, Stack } from "@chakra-ui/react"
import Logo from "../../../assets/img/logo.png"
import { FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <>
            <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                m={"10px"}
            >
                <Flex>
                    <Image src={Logo} alt="outcasters" w={"48px"} h={"48px"} />
                    <Stack ml={"0.5rem !important"}>
                        <Text fontSize={"13px"} ml={"1.5rem"}>
                            © 2023 Outcasters. All right reserved.
                        </Text>
                        <Flex>
                            {[
                                "faq",
                                "contact",
                                "privacy policy",
                                "termsofuse"
                            ].map((el, key) => (
                                <Text
                                    key={key}
                                    color={"hsla(0,0%,100%,0.692)"}
                                    cursor={"pointer"}
                                    fontSize={"12px"}
                                    fontWeight={400}
                                    lineHeight={"21px"}
                                    ml={"20px"}
                                    p={"5px 10px"}
                                    textTransform={"uppercase"}
                                >
                                    {el}
                                </Text>
                            ))}
                        </Flex>
                    </Stack>
                </Flex>
                <Flex gap={"10px"}>
                    <FaYoutube
                        color="#FFF"
                        cursor={"pointer"}
                        fontSize={"18px"}
                    />
                    <FaInstagram
                        color="#FFF"
                        cursor={"pointer"}
                        fontSize={"18px"}
                    />
                    <FaTwitter
                        color="#FFF"
                        cursor={"pointer"}
                        fontSize={"18px"}
                    />
                </Flex>
            </Flex>
        </>
    )
}

export default Footer
