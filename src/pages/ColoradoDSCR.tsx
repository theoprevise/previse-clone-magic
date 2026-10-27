import { useEffect } from "react";

// Displays the ChatGPT-created Colorado DSCR page exactly as provided (public/colorado-dscr.html).
const ColoradoDSCR = () => {
  useEffect(() => {
    document.title = "Colorado DSCR Loans & Rental Property Calculator | DSCRCO";
  }, []);
  return (
    <iframe
      src="/colorado-dscr.html"
      title="Colorado DSCR Loans"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
};

export default ColoradoDSCR;
