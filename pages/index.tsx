import { Box, Heading, List, ListItem, Link } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { InnerContainer, MainContainer } from "../components/Container";
import Divider from "../components/Divider";
import { Desc } from "../components/Title";

const Landing = () => {
  return (
    <>
      <Head>
        <title>Prithvi Anil Kumar</title>
        <script src="https://use.fontawesome.com/02f68481d8.js"></script>
      </Head>
      <MainContainer>
        <InnerContainer>
          <Heading>Yo, I'm Prithvi!</Heading>
          <Divider />
          <Box>
            <Desc>Stuff I am working on rn</Desc>
            <List>
              <ListItem>
                <Link
                  href="https://nakama-sage.vercel.app/"
                >
                  Nakama
                </Link>
                : A platform that helps you find teamates to build projects.
              </ListItem>
            </List>
          </Box>
        </InnerContainer>
      </MainContainer>
    </>
  );
};

export default Landing;
