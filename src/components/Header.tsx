import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  Kbd,
  Button,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  ModalOverlay

} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import GliLogo from "../gli-logo.jpg";
import { KeyCombo } from ".";

// const Search = styled.div`
//   position:
// `;
type HeaderProps = {
  onOpen: () => void;
}

const Header = ({ onOpen }: HeaderProps) => {

  return (
    <Box
      as="header"
      boxShadow="base"
      height={90}
      position="fixed"
      background="white"
      width="100%"
    >

      <Flex
        width="1440px"
        alignItems="center"
        mx="auto"
        height="100%"
        justifyContent="center"
      >
        <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
          <img src={GliLogo} width="150" alt="Go Local Interactive logo" />
          <Text
            marginStart="10px"
            fontWeight="semibold"
            fontSize="30px"
            transform="scale(1, 2.3)"
            color="#003963 "
          >
            Documentation
          </Text>
        </div>

        <Box width="40%" boxShadow="base">
          <Button isFullWidth leftIcon={<AiOutlineSearch />} variant="outline" onClick={onOpen}>
            <Flex justify="space-between" width="full">
              <Text>Search the docs</Text>
              <div>
                <Kbd>Shift</Kbd> <Kbd>S</Kbd>
              </div>
            </Flex>
          </Button>
          {/* <InputGroup overflow="visible">
            <InputLeftElement
              pointerEvents="none"
              children={<AiOutlineSearch />}
            />
            <Input
              type="text"
              variant="outline"
              placeholder="Search the docs"
            ></Input>
            <InputRightElement
              children={<KeyCombo keys={["shift", "space"]} />}
            />
          </InputGroup> */}
        </Box>
        <div style={{ flex: 1 }}></div>
      </Flex>

      <Flex width="60%" justifyContent="center"></Flex>
      <Box width="20%"></Box>
    </Box>
  );
};

export default Header;
