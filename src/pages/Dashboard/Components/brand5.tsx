import {
    Box,
    Center,
    Flex,
    SimpleGrid,
    Stack,
    Text,
    VStack
} from "@chakra-ui/react"
import Brand5Card from "./brand5-Card"

const Brand5 = () => {
    return (
        <>
            <Center height={"100vh"} flexDirection={"column"}>
                <Text
                    fontFamily={"Sora"}
                    fontWeight={700}
                    fontSize={"64px"}
                    lineHeight={"81px"}
                    letterSpacing={"8px"}
                    bg={
                        "linear-gradient(180deg, rgba(240, 240, 240, 0.6) 0%, rgba(240, 240, 240, 0) 100%)"
                    }
                    bgClip={"text"}
                    backdropFilter={"blur(2px)"}
                    style={{
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}
                >
                    LOREM IPSUM
                </Text>
                <SimpleGrid columns={3} width={"70%"} mt={"100px"}>
                    <Brand5Card
                        title={
                            <>
                                Think bigger
                                <br />
                                all is yours
                            </>
                        }
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis."
                    />
                    <Brand5Card
                        isCenter
                        title={
                            <>
                                Find more
                                <br />
                                meaning
                            </>
                        }
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis."
                    />
                    <Brand5Card
                        title={
                            <>
                                The future
                                <br />
                                of work
                            </>
                        }
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis."
                    />
                </SimpleGrid>
            </Center>
        </>
    )
}

export default Brand5
