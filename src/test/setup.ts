import '@testing-library/jest-dom';

// Mock IntersectionObserver for framer-motion viewport features
global.IntersectionObserver = class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof IntersectionObserver;
