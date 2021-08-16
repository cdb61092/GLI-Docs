import "../App.css";
import { Code, Header } from "../components";
import {
  ChakraProvider,
  Text,
  Box,
  Flex,
  Link,
  Heading,
  List,
  ListItem,
  ListIcon,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import docs from "../wp_docs";
import wp_docs from "../wp_docs";
import { CgShapeHexagon } from "react-icons/cg";
import axios from "axios";
import * as cheerio from "cheerio";
import { useEffect } from "react";

function App() {
  const [html, setHtml] = useState<any>();
  const [$, set$] = useState<any>();
  const [section, setSection] = useState<any>(null);

  // const $ = cheerio.load('<ul id="fruits">...</ul>');

  useEffect(() => {
    axios
      .get("https://developer.wordpress.org/themes/basics/template-files/")
      .then((res) => setHtml(res.data))
      .then(() => set$(cheerio.load(html)))
      .then(() => setSection($("main", "h1").text()))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    set$(cheerio.load(html.toString()));
  }, [html]);

  // useEffect(() => {});

  // useEffect(() => {
  //   console.log(html);
  // }, [html]);

  // useEffect(() => {
  //   setSection($("main"));
  //   console.log(section);
  // }, [$, section]);

  return (
    <ChakraProvider>
      <div className="App">
        <Header />
        <Flex
          as="main"
          width="1440px"
          marginX="auto"
          flexDir="row"
          paddingTop={50}
        >
          <Box as="nav" width="280px" marginTop={20}>
            <Box>
              <Link>WordPress</Link>
            </Box>
            <Box>
              <Link>Themes</Link>
            </Box>
          </Box>
          <Box mt="100" maxW="800px">
            <Button onClick={() => setSection($("main", "h1").text())}>
              setsec
            </Button>
            {/* {$.html()} */}
            {section !== null ? section : null}
            {wp_docs.wordpress.themes.sections.map((section) => {
              return (
                <>
                  <Heading as="h1" size="xl" mb="30px">
                    {section.name}
                  </Heading>
                  {section.topics.map((topic) => {
                    return (
                      <Box>
                        <Heading as="h2" size="lg" mb="20px">
                          {topic.name}
                        </Heading>
                        <Box>
                          {topic.data.map((block) => {
                            switch (block.format) {
                              case "p":
                                return <Text mb="10px">{block.text}</Text>;
                              case "bullets":
                                const bullets = block.text.split("/");
                                return (
                                  <List pl="6">
                                    {bullets.map((bullet) => {
                                      return (
                                        <ListItem>
                                          <ListIcon as={CgShapeHexagon} />
                                          {bullet}
                                        </ListItem>
                                      );
                                    })}
                                  </List>
                                );
                            }
                          })}
                        </Box>
                        <Spacer h="20px" />
                      </Box>
                    );
                  })}
                </>
              );
            })}
            {/* <Box width="800px" paddingTop={120} marginX="auto">
              <Code code={code} language="jsx" />
              <Text>toooooooooo</Text>
              <Text>toooooooooo</Text>
              <Text>toooooooooo</Text>
              <Code code={code1} language="php" />
            </Box>
            <Box width="800px" paddingTop={90} marginX="auto">
              <Code code={code} language="jsx" />
              <Text>toooooooooo</Text>
              <Text>toooooooooo</Text>
              <Text>toooooooooo</Text>
              <Code code={code1} language="php" />
            </Box>
            <Box width="800px" paddingTop={90} marginX="auto">
              <Code code={code} language="jsx" />
              <Text>toooooooooo</Text>
              <Text>toooooooooo</Text>
              <Text>toooooooooo</Text>
              <Code code={code1} language="php" />
            </Box> */}
          </Box>
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default App;
