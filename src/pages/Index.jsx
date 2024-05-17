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
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        {/* Header */}
        <HStack justifyContent="space-between" alignItems="center" p={4} bg="blue.500" color="white">
          <Text fontSize="2xl" fontWeight="bold">
            DEBERE BIRHAN UNIVERSITY INFORMATION
          </Text>
          <IconButton aria-label="Chat Bot" icon={<FaRobot />} size="lg" onClick={() => setChatOpen(!chatOpen)} />
        </HStack>

        {/* Main Content */}
        <Flex>
          <Box flex="1" p={4}>
            <VStack spacing={4}>
              <Image src="https://images.unsplash.com/photo-1543193158-07c01963e800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJlcmUlMjBCaXJoYW4lMjBVbml2ZXJzaXR5JTIwY2FtcHVzfGVufDB8fHx8MTcxNTk2ODY0Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Debere Birhan University campus" boxSize="300px" objectFit="cover" />
              <Text>Description of the first image.</Text>
              <Image src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJlcmUlMjBCaXJoYW4lMjBVbml2ZXJzaXR5JTIwbGlicmFyeXxlbnwwfHx8fDE3MTU5Njg2NDR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Debere Birhan University library" boxSize="400px" objectFit="cover" />
              <Text>Description of the second image.</Text>
              <Image src="https://images.unsplash.com/photo-1591710110747-dfeae9fa762a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJlcmUlMjBCaXJoYW4lMjBVbml2ZXJzaXR5JTIwbGVjdHVyZSUyMGhhbGx8ZW58MHx8fHwxNzE1OTY4NjQ1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Debere Birhan University lecture hall" boxSize="500px" objectFit="cover" />
              <Text>Description of the third image.</Text>
              <Image src="https://images.unsplash.com/photo-1615631648086-325025c9e51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJlcmUlMjBCaXJoYW4lMjBVbml2ZXJzaXR5JTIwbGFib3JhdG9yeXxlbnwwfHx8fDE3MTU5Njg2NDd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Debere Birhan University laboratory" boxSize="350px" objectFit="cover" />
              <Text>Description of the fourth image.</Text>
              <Image src="https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJlcmUlMjBCaXJoYW4lMjBVbml2ZXJzaXR5JTIwc3BvcnRzJTIwY29tcGxleHxlbnwwfHx8fDE3MTU5Njg2NDl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Debere Birhan University sports complex" boxSize="450px" objectFit="cover" />
              <Text>Description of the fifth image.</Text>
              <Image src="https://images.unsplash.com/photo-1591710110747-dfeae9fa762a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJlcmUlMjBCaXJoYW4lMjBVbml2ZXJzaXR5JTIwZG9ybWl0b3J5fGVufDB8fHx8MTcxNTk2ODY1MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Debere Birhan University dormitory" boxSize="300px" objectFit="cover" />
              <Text>Description of the sixth image.</Text>
              <Image src="https://images.unsplash.com/photo-1591710110747-dfeae9fa762a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZWJlcmUlMjBCaXJoYW4lMjBVbml2ZXJzaXR5JTIwY2FmZXRlcmlhfGVufDB8fHx8MTcxNTk2ODY1M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Debere Birhan University cafeteria" boxSize="400px" objectFit="cover" />
              <Text>Description of the seventh image.</Text>
              <Box as="video" controls width="100%">
                <source src="GPTENG:get_video('Debere Birhan University overview')" type="video/mp4" />
                Your browser does not support the video tag.
              </Box>
              <Text>Description of the first video.</Text>
              <Box as="video" controls width="100%">
                <source src="GPTENG:get_video('Debere Birhan University events')" type="video/mp4" />
                Your browser does not support the video tag.
              </Box>
              <Text>Description of the second video.</Text>
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
