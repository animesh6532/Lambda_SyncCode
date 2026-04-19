import { useState } from "react";

export default function useEditor(initialCode = "") {
  const [code, setCode] = useState(initialCode);

  const updateCode = (newCode) => {
    setCode(newCode);
  };

  return { code, setCode: updateCode };
}