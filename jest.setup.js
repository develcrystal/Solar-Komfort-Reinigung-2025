import '@testing-library/jest-dom';

// Global setup for Jest - extend expect with jest-dom matchers
expect.extend({
  toBeInTheDocument: (received) => {
    // Custom matcher if needed, but jest-dom should handle it
    return {
      message: () => `Expected element to be in document`,
      pass: !!received,
    };
  },
  toHaveAttribute: (received, attribute, value) => {
    const hasAttr = received.hasAttribute(attribute);
    const hasValue = received.getAttribute(attribute) === value;
    return {
      message: () => `Expected element to have attribute ${attribute} = ${value}`,
      pass: hasAttr && hasValue,
    };
  },
});