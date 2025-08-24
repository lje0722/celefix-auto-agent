import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Custom cursor tracking
let cursor: HTMLElement | null = null;

const updateCursor = (e: MouseEvent) => {
  if (!cursor) {
    cursor = document.querySelector('body::before') as HTMLElement;
  }
  document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
  document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
};

const handleMouseEnter = () => {
  document.body.style.setProperty('--cursor-opacity', '1');
};

const handleMouseLeave = () => {
  document.body.style.setProperty('--cursor-opacity', '0');
};

// Initialize cursor tracking
document.addEventListener('mousemove', updateCursor);
document.addEventListener('mouseenter', handleMouseEnter);
document.addEventListener('mouseleave', handleMouseLeave);

createRoot(document.getElementById("root")!).render(<App />);
