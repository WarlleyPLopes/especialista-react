import { useEffect, useState } from "react";

export default function useCounter() {
  let [number, setNumber] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setNumber(4);
    }, 5000);
  }, []);

  return number;
}
