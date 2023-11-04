"use client";
import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
} from "@chakra-ui/react";

function UserFeedbackForm() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(5); // Default rating value

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to a server
  };

  return (
    <Box maxW="400px" mx="auto" mt="4">
      <Heading as="h2" size="lg" mb="4">
        User Feedback Form
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

        <FormControl id="feedback" mt="4" isRequired>
          <FormLabel>Feedback</FormLabel>
          <Textarea
            placeholder="Share your feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </FormControl>

        <FormControl id="rating" mt="4" isRequired>
          <FormLabel>Rating (out of 10)</FormLabel>
          <Slider
            defaultValue={rating}
            min={0}
            max={10}
            step={1}
            value={rating}
            onChange={(value) => setRating(value)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6} fontSize="sm">
              {rating}
            </SliderThumb>
          </Slider>
        </FormControl>

        <Button type="submit" colorScheme="blue" mt="4">
          Submit Feedback
        </Button>
      </form>
    </Box>
  );
}

export default UserFeedbackForm;
