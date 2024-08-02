import { createRoot } from 'react-dom/client';
import browser from "webextension-polyfill";
import { Settings } from 'lucide-react';
import "@/assets/styles/tailwind.css";

export default function App() {
  const openOption = async () => {
    browser.runtime.openOptionsPage();
  };

  return (
    <div className='w-[400px] p-4'>
      <h2 className='text-2xl text-[#3c3c3c]'>This is Popup Page.</h2>
      <p>Hello, Chrome Extension!</p>
      <Settings onClick={openOption} width={18} className='mt-2' />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <App />
)