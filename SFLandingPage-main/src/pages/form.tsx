"use client"

import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
} from "@chakra-ui/react";

function FeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(5); // Default rating

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to your backend or store it locally
    console.log("Feedback:", feedback);
    console.log("Rating:", rating);
  };

  return (
    <Box p="4">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Feedback</FormLabel>
          <Textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback"
          />
        </FormControl>

        <FormControl mt="4">
          <FormLabel>Rating (out of 10)</FormLabel>
          <Flex alignItems="center">
            <Slider
              value={rating}
              onChange={(value) => setRating(value)}
              min={1}
              max={10}
              step={1}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={6} />
            </Slider>
            <Box ml="2">{rating}</Box>
          </Flex>
        </FormControl>

        <Button mt="4" colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider>
      <FeedbackForm />
    </ChakraProvider>
  );
}

export default App;
