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
      className={`py-8 sm:py-12 md:py-16 lg:py-20 ${className}`}
    >
      {fullWidth ? (
        children
      ) : (
        <Container className={noPadding ? "" : "px-2 sm:px-4 md:px-6 lg:px-8"}>
          {children}
        </Container>
      )}
    </section>
  );
};
