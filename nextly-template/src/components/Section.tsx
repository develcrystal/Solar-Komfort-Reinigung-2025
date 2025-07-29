import React from "react";
import { Container } from "@/components/Container";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  noPadding?: boolean;
}

export const Section = ({
  id,
  className = "",
  children,
  fullWidth = false,
  noPadding = false,
}: SectionProps) => {
  return (
    <section 
      id={id} 
      className={`py-12 md:py-16 ${className}`}
    >
      {fullWidth ? (
        children
      ) : (
        <Container className={noPadding ? "" : "px-4 sm:px-6 lg:px-8"}>
          {children}
        </Container>
      )}
    </section>
  );
};
