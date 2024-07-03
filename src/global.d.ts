interface Window {
  electron: Partial<{
    minimizeWindow(): void;
    maximizeWindow(): void;
    closeWindow(): void;
  }>;
}
