import { useEffect, useState } from "react";

const useChangeBackgroundColorApp = () => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const MAX_HEX_COLOR = 16777215;

  useEffect(() => {
    onChangeBackgroundColor();
  }, []);

  const onChangeBackgroundColor = () => {
    setBackgroundColor(
      `#${Math.floor(Math.random() * MAX_HEX_COLOR)
        .toString(16)
        .padStart(6, "0")}`
    );
  };

  return { backgroundColor, onChangeBackgroundColor };
};

export default useChangeBackgroundColorApp;
