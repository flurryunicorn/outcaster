/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra Imports
import { Button, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react"
import PropTypes from "prop-types"
import React, { useState } from "react"
import AdminNavbarLinks from "./AdminNavbarLinks"
import { Link as RouterLink } from "react-router-dom"
import { HomeIcon } from "components/Icons/Icons"
import { NavbarPosition } from "../../constants"
import Hero from "../../assets/img/hero.png"

export default function MainNavbar(props) {
    const [scrolled, setScrolled] = useState(false)
    const { variant, children, fixed, secondary, brandText, onOpen, ...rest } =
        props

    // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
    let navbarPosition: NavbarPosition = "absolute"
    let mainText = "white"
    let navbarFilter = "none"
    let navbarBackdrop = "none"
    let navbarShadow = "none"
    let navbarBg = "#FFF" //"none"
    let navbarBorder = "transparent"
    let secondaryMargin = "0px"
    let paddingX = "15px"
    if (props.fixed === true)
        if (scrolled === true) {
            navbarPosition = "fixed"
            navbarShadow = "0px 7px 23px rgba(0, 0, 0, 0.05)"
            navbarBg =
                "linear-gradient(rgba(255, 255, 255, 0) 0% rgba(255, 255, 255, 0.39) @ 100%)"
            navbarBorder = "rgba(226, 232, 240, 0.3)"
            navbarFilter = "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))"
            navbarBackdrop = "blur(42px)"
        }
    if (props.secondary) {
        navbarBackdrop = "blur(42px)"
        // mainText = "white";
        // secondaryText = "white";
        // secondaryMargin = "22px";
        // paddingX = "30px";
    }
    const changeNavbar = () => {
        if (window.scrollY > 1) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    window.addEventListener("scroll", changeNavbar)

    return (
        <Flex
            position={navbarPosition}
            boxShadow={navbarShadow}
            bg={navbarBg}
            borderColor={navbarBorder}
            filter={navbarFilter}
            backdropFilter={navbarBackdrop}
            borderWidth="1.5px"
            borderStyle="solid"
            transitionDelay="0s, 0s, 0s, 0s"
            transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
            transition-property="box-shadow, background-color, filter, border"
            transitionTimingFunction="linear, linear, linear, linear"
            alignItems={{ xl: "center" }}
            borderRadius="10px"
            display="flex"
            minH="60px"
            justifyContent={{ xl: "center" }}
            lineHeight="25.6px"
            mx="auto"
            mt={secondaryMargin}
            // pb="8px"
            left={document.documentElement.dir === "rtl" ? "50px" : ""}
            right={document.documentElement.dir === "rtl" ? "" : "50px"}
            px="30px"
            py="10px"
            top="18px"
            w="calc(100vw - 260px - 100px)"
            zIndex={100}
        >
            <Flex w="100%" alignItems="center" justifyContent={"space-between"}>
                <HStack>
                    <Image
                        src={Hero}
                        boxSize={"40px"}
                        alt="outcasters"
                        rounded={"full"}
                    />
                    <Stack>
                        <Text variant={"logoText"}>Outcasters</Text>
                        <Text mt={"-0.5rem !important"}>Brand</Text>
                    </Stack>
                </HStack>
                <HStack gap={"10px"}>
                    <Text variant="navbarLink">For Brands</Text>
                    <Text variant="navbarLink">About Us</Text>
                    <Text variant="navbarLink">Contact Us</Text>
                    <Button padding={"4px 36px"}>Login</Button>
                </HStack>
            </Flex>
        </Flex>
    )
}

MainNavbar.propTypes = {
    brandText: PropTypes.string,
    variant: PropTypes.string,
    logoText: PropTypes.string,
    secondary: PropTypes.bool,
    fixed: PropTypes.bool,
    onOpen: PropTypes.func
}
