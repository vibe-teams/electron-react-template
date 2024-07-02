import { closeWindow, maximizeWindow, minimizeWindow } from '@/utils/window';
import { Icon } from '@iconify/react';

export function TitleBarAction() {
  function handleMaximizeWindow() {
    maximizeWindow();
  }

  function handleMinimizeWindow() {
    minimizeWindow();
  }
  function handleCloseWindow() {
    closeWindow();
  }

  return (
    <div className='title-bar-action flex items-center h-full'>
      <button
        className='px-5 focus-visible:outline-none hover:bg-zinc-950/20 h-full items-center justify-center flex'
        onClick={handleMinimizeWindow}>
        <Icon icon='material-symbols:chrome-minimize' />
      </button>
      <button
        className='px-5 focus-visible:outline-none hover:bg-zinc-950/20 h-full items-center justify-center flex'
        onClick={handleMaximizeWindow}>
        <Icon icon='material-symbols:chrome-maximize-outline' />
      </button>
      <button
        className='px-5 focus-visible:outline-none hover:bg-red-600 h-full items-center justify-center flex'
        onClick={handleCloseWindow}>
        <Icon icon='material-symbols:close' />
      </button>
    </div>
  );
}
