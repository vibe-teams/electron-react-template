import type { MainWindow } from './typing';

function getMainWindow() {
  return window as unknown as MainWindow;
}

export function closeWindow() {
  getMainWindow().electron?.closeWindow();
}

export function minimizeWindow() {
  getMainWindow().electron?.minimizeWindow();

}

export function maximizeWindow() {
  getMainWindow().electron?.maximizeWindow();

}
