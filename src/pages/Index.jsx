import { useState } from "react";
import { Container, Box, Text, VStack, HStack, IconButton, Image, Button, Textarea, Input, Flex, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaRobot } from "react-icons/fa";

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { from: "user", text: input }]);
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { from: "bot", text: "This is a simulated response from AMaK." }]);
      }, 1000);
    }
  };

  return (
    <Container maxW="container.xl" p={4} bgImage="url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfGFsbHwxfHx8fHx8fDE2MTU5Njg2NTN8MA&ixlib=rb-4.0.3&q=80&w=1080')" bgSize="cover" bgPosition="center">
      <VStack spacing={4} align="stretch">
        {/* Header */}
        <HStack justifyContent="space-between" alignItems="center" p={4} bg="blue.500" color="white">
          <Text fontSize="2xl" fontWeight="bold">
            DEBERE BIRHAN UNIVERSITY INFORMATION
          </Text>
          <Button leftIcon={<FaRobot />} size="lg" onClick={() => setChatOpen(!chatOpen)} colorScheme="blue">
            JUST AMaK ME
          </Button>
        </HStack>

        {/* Main Content */}
        <Flex>
          <Box flex="1" p={4}>
            <VStack spacing={4}>
              <HStack spacing={4}>
                <Image src="https://images.unsplash.com/photo-1543193158-07c01963e800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJlcmUlMjBCaXJoYW4lMjBVbml2ZXJzaXR5JTIwY2FtcHVzfGVufDB8fHx8MTcxNTk2ODY0Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Debere Birhan University campus" boxSize="250px" objectFit="cover" _hover={{ transform: "scale(1.1) rotateY(10deg)", transition: "transform 0.3s" }} />
                <Box as="video" controls width="250px" _hover={{ transform: "scale(1.1) rotateY(10deg)", transition: "transform 0.3s" }} animation="pulse 2s infinite">
                  <source src="GPTENG:get_video('Debere Birhan University overview')" type="video/mp4" />
                  Your browser does not support the video tag.
                </Box>
              </HStack>
              <Text>Explore the beautiful campus of Debere Birhan University.</Text>
              <HStack spacing={4}>
                <Image src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJlcmUlMjBCaXJoYW4lMjBVbml2ZXJzaXR5JTIwbGlicmFyeXxlbnwwfHx8fDE3MTU5Njg2NDR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Debere Birhan University library" boxSize="300px" objectFit="cover" _hover={{ transform: "scale(1.1) rotateY(10deg)", transition: "transform 0.3s" }} />
                <Box as="video" controls width="250px" _hover={{ transform: "scale(1.1) rotateY(10deg)", transition: "transform 0.3s" }} animation="pulse 2s infinite">
                  <source src="GPTENG:get_video('Debere Birhan University lecture hall')" type="video/mp4" />
                  Your browser does not support the video tag.
                </Box>
                <Image src="https://images.unsplash.com/photo-1615631648086-325025c9e51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJlcmUlMjBCaXJoYW4lMjBVbml2ZXJzaXR5JTIwbGFib3JhdG9yeXxlbnwwfHx8fDE3MTU5Njg2NDd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Debere Birhan University laboratory" boxSize="300px" objectFit="cover" _hover={{ transform: "scale(1.1) rotateY(10deg)", transition: "transform 0.3s" }} />
              </HStack>
              <Text>Discover the university library and lecture hall.</Text>
              <HStack spacing={4}>
                <Image src="https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJlcmUlMjBCaXJoYW4lMjBVbml2ZXJzaXR5JTIwc3BvcnRzJTIwY29tcGxleHxlbnwwfHx8fDE3MTU5Njg2NDl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Debere Birhan University sports complex" boxSize="300px" objectFit="cover" _hover={{ transform: "scale(1.1) rotateY(10deg)", transition: "transform 0.3s" }} />
                <Box as="video" controls width="250px" _hover={{ transform: "scale(1.1) rotateY(10deg)", transition: "transform 0.3s" }} animation="pulse 2s infinite">
                  <source src="GPTENG:get_video('Debere Birhan University sports complex')" type="video/mp4" />
                </Box>
              </HStack>
              <Text>Experience the sports complex and dormitory facilities.</Text>
              <HStack spacing={4}>
                <Image src="https://images.unsplash.com/photo-1591710110747-dfeae9fa762a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJlcmUlMjBCaXJoYW4lMjBVbml2ZXJzaXR5JTIwY2FmZXRlcmlhfGVufDB8fHx8MTcxNTk2ODY1M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Debere Birhan University cafeteria" boxSize="300px" objectFit="cover" _hover={{ transform: "scale(1.1) rotateY(10deg)", transition: "transform 0.3s" }} />
                <Box as="video" controls width="250px" _hover={{ transform: "scale(1.1) rotateY(10deg)", transition: "transform 0.3s" }} animation="pulse 2s infinite">
                  <source src="GPTENG:get_video('Debere Birhan University cafeteria')" type="video/mp4" />
                </Box>
              </HStack>
              <Text>Check out the cafeteria and another view of the dormitory.</Text>
            </VStack>
          </Box>

          {/* Chat Bot Interface */}
          {chatOpen && (
            <Box w="300px" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
              <VStack spacing={4} align="stretch">
                <Text fontSize="lg" fontWeight="bold">
                  AMaK Chat Bot
                </Text>
                <Box flex="1" overflowY="auto" maxH="400px" p={2} bg="white" borderRadius="md" boxShadow="inner">
                  {messages.map((msg, index) => (
                    <Box key={index} alignSelf={msg.from === "user" ? "flex-end" : "flex-start"} bg={msg.from === "user" ? "blue.200" : "gray.200"} borderRadius="md" p={2} m={1}>
                      <Text>{msg.text}</Text>
                    </Box>
                  ))}
                </Box>
                <HStack>
                  <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
                  <Button onClick={handleSendMessage}>Send</Button>
                </HStack>
              </VStack>
            </Box>
          )}
        </Flex>

        {/* Footer */}
        <HStack justifyContent="center" p={4} bg="blue.500" color="white">
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
