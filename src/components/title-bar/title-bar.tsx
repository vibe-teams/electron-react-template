import { XIcon } from "lucide-react";
export function TitleBar() {
  function handleCloseWindow() {
    window.close();
  }

  return (
    <div className='title-bar px-2 py-1 bg-zinc-100'>
      <div className='flex items-center justify-between'>
        <div className='flex-1'>{document.title}</div>
        <div className='title-bar-action flex items-center justify-center gap-1'>
          <button
            className='p-1 block hover:bg-zinc-200 rounded-md'
            type='button'
            onClick={handleCloseWindow}
          >
            <XIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
