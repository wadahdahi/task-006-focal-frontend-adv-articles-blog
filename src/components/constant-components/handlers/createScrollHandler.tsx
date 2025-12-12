export const createScrollHandler = (
  lastScroll: React.RefObject<number>,
  timeout: React.RefObject<number | null>,
  ticking: React.RefObject<boolean>,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  // SCROLL HANDLER: HEADER SHOW/HIDE LOGIC
  const scrollHandler = () => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const currentScroll = window.scrollY;

        if (currentScroll > (lastScroll.current ?? 0) + 5) {
          // SCROLLING DOWN → hide header
          setVisible(false);
          if (timeout.current) clearTimeout(timeout.current);
        } else if (currentScroll < (lastScroll.current ?? 0) - 5) {
          // SCROLLING UP → show header THEN hide after 5 seconds
          setVisible(true);
          if (timeout.current) clearTimeout(timeout.current);
          timeout.current = window.setTimeout(() => setVisible(false), 5000);
        }
        // UPDATE LAST SCROLL POSITION
        lastScroll.current = currentScroll;
        ticking.current = false;
      });
      ticking.current = true;
    }
  };

  //CLICK HANDLER: HIDE HEADER ON CLICK
  const clickHandler = () => {
    setVisible((prev) => (prev ? false : prev));
    if (timeout.current) clearTimeout(timeout.current);
  };

  return { scrollHandler, clickHandler };
};
