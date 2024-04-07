import React from "react";
import { Box, Heading, Text, VStack, Image, Button, Flex, Link, UnorderedList, ListItem } from "@chakra-ui/react";
import { FaFacebookF } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh" py={8}>
      <Box maxW="container.lg" mx="auto" px={4}>
        <Flex direction={["column", "row"]} align="center" justify="space-between">
          <Box mb={[8, 0]}>
            <Heading as="h1" size="xl" mb={4}>
              Welcome to Go Publishing
            </Heading>
            <Text fontSize="xl" mb={8}>
              Discover the power of Facebook Instant Articles with Go Publishing. Reach a wider audience, engage readers, and monetize your content effortlessly.
            </Text>
            <Button as={Link} href="https://www.facebook.com/GoPublishing/" target="_blank" rel="noopener noreferrer" colorScheme="facebook" size="lg" leftIcon={<FaFacebookF />}>
              Follow Us on Facebook
            </Button>
          </Box>
          <Image src="https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjByZWFkaW5nJTIwb24lMjBtb2JpbGUlMjBkZXZpY2VzfGVufDB8fHx8MTcxMjUyMjc0N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="People reading on mobile devices" maxW={["100%", "50%"]} ml={[0, 8]} />
        </Flex>

        <VStack spacing={8} mt={16} align="start">
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Why Choose Go Publishing?
            </Heading>
            <UnorderedList spacing={2}>
              <ListItem>Easy setup and integration with your existing website</ListItem>
              <ListItem>Seamless publishing of articles to Facebook Instant Articles</ListItem>
              <ListItem>Increased visibility and reach on Facebook</ListItem>
              <ListItem>Enhanced reader engagement and time spent on articles</ListItem>
              <ListItem>Monetization opportunities through Facebook Audience Network</ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Getting Started
            </Heading>
            <Text fontSize="lg" mb={4}>
              To get started with Go Publishing and Facebook Instant Articles, follow these simple steps:
            </Text>
            <UnorderedList spacing={2}>
              <ListItem>Sign up for a Go Publishing account</ListItem>
              <ListItem>Connect your Facebook Page</ListItem>
              <ListItem>Configure your Instant Articles settings</ListItem>
              <ListItem>Import your existing articles or create new ones</ListItem>
              <ListItem>Publish your articles to Facebook Instant Articles</ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Join the Go Publishing Community
            </Heading>
            <Text fontSize="lg" mb={4}>
              Be part of a thriving community of publishers and content creators. Share insights, learn best practices, and grow your audience together.
            </Text>
            <Button as={Link} href="https://www.facebook.com/groups/gopublishing/" target="_blank" rel="noopener noreferrer" colorScheme="facebook" size="lg">
              Join Our Facebook Group
            </Button>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;
