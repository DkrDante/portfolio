"use client";

import { useState } from "react";
import { Button, Flex, Heading, Input, Text, Background, Column, Textarea } from "@/once-ui/components";

type ContactFormProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

export const ContactForm = ({ contact }: { contact: ContactFormProps }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        return value.trim() === "" ? "Name is required" : "";
      case "email":
        return value.trim() === "" ? "Email is required" : !validateEmail(value) ? "Please enter a valid email address" : "";
      case "subject":
        return value.trim() === "" ? "Subject is required" : "";
      case "message":
        return value.trim() === "" ? "Message is required" : value.length < 10 ? "Message must be at least 10 characters" : "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const debouncedHandleChange = debounce(handleChange, 500);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!contact.display) return null;

  return (
    <Column
      overflow="hidden"
      position="relative"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-medium"
    >
      <Background
        mask={{
          cursor: false,
          x: 100,
          y: 0,
          radius: 100,
        }}
        gradient={{
          display: true,
          x: 100,
          y: 50,
          width: 100,
          height: 100,
          tilt: -45,
          colorStart: "accent-background-strong",
          colorEnd: "static-transparent",
          opacity: 100,
        }}
        dots={{
          display: false,
          size: "m",
          color: "brand-on-background-weak",
          opacity: 100,
        }}
        lines={{
          display: false,
          opacity: 100,
        }}
        grid={{
          display: true,
          color: "neutral-alpha-weak",
          opacity: 100,
        }}
      />
      
      <Heading style={{ position: "relative" }} marginBottom="s" variant="display-strong-xs">
        {contact.title}
      </Heading>
      
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {contact.description}
      </Text>

      {submitStatus === "success" && (
        <Flex
          style={{ position: "relative" }}
          padding="m"
          radius="m"
          background="success-weak"
          border="success-medium"
          marginBottom="m"
        >
          <Text onBackground="success-strong">
            Thank you for your message! I'll get back to you soon.
          </Text>
        </Flex>
      )}

      {submitStatus === "error" && (
        <Flex
          style={{ position: "relative" }}
          padding="m"
          radius="m"
          background="neutral-weak"
          border="neutral-medium"
          marginBottom="m"
        >
          <Text onBackground="neutral-strong">
            Sorry, there was an error sending your message. Please try again.
          </Text>
        </Flex>
      )}

      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <Column fillWidth maxWidth={24} gap="m">
          <Flex gap="m" mobileDirection="column">
            <Input
              id="contact-name"
              labelAsPlaceholder
              name="name"
              type="text"
              label="Name"
              required
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errors.name}
              disabled={isSubmitting}
            />
            <Input
              id="contact-email"
              labelAsPlaceholder
              name="email"
              type="email"
              label="Email"
              required
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errors.email}
              disabled={isSubmitting}
            />
          </Flex>
          
          <Input
            id="contact-subject"
            labelAsPlaceholder
            name="subject"
            type="text"
            label="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.subject}
            disabled={isSubmitting}
          />
          
          <Textarea
            id="contact-message"
            labelAsPlaceholder
            name="message"
            label="Message"
            required
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.message}
            disabled={isSubmitting}
            rows={5}
          />
          
          <Button
            type="submit"
            size="m"
            fillWidth
            disabled={isSubmitting}
            loading={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </Column>
      </form>
    </Column>
  );
};
