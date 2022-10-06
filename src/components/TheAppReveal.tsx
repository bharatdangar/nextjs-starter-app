import { FC, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useAppIsReadyContext } from "../context/appIsReady";

const TheAppReveal: FC = () => {
  const [appIsReady, setAppIsReady] = useAppIsReadyContext();

  const hideAppReveal = useCallback(() => {
    setAppIsReady(true);
    window.removeEventListener('load', hideAppReveal);
  }, [setAppIsReady]);

  useEffect(() => {
    if (!appIsReady)
      if (document.readyState !== 'complete')
        window.addEventListener('load', hideAppReveal);
      else
        hideAppReveal();
  }, [appIsReady, hideAppReveal]);

  return (
    <AnimatePresence>
      {!appIsReady && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        />
      )}
    </AnimatePresence>
  );
};

export default TheAppReveal;
