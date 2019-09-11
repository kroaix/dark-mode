import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [darkMode, enableDarkMode] = useLocalStorage("dark", false);

  useEffect(() => {
    const body = window.document.body;
    darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
  }, [darkMode]);
  return [darkMode, enableDarkMode];
};

export default useDarkMode;