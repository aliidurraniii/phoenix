declare global {
  interface Window {
    CCM: {
      openWidget: () => void;
    };
  }
}

export {};
