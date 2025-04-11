import { useEffect, useState } from "react";

export function useVisibility(elementId: string) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const section = document.getElementById(elementId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          // Agregar un pequeño retraso para permitir la animación
          setTimeout(() => setIsVisible(true), 100);
        } else {
          setIsVisible(false);
        }
      }
    };

    const handleLoad = () => {
      updateVisibility();
    };

    const handleScroll = () => {
      updateVisibility();
    };

    // Ejecutar inmediatamente al montar el componente
    updateVisibility();

    if (elementId === "welcome") {
      window.addEventListener("load", handleLoad);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (elementId === "welcome") {
        window.removeEventListener("load", handleLoad);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementId]);

  return isVisible;
}