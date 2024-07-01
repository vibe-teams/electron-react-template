export type MainWindow = Window &
  Partial<{
    electron?: Partial<{
      minimizeWindow(): void;
      maximizeWindow(): void;
      closeWindow(): void;
    }>;
  }>;
