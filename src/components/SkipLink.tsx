"use client";

import { useState } from "react";

export default function SkipLink() {
  const [focused, setFocused] = useState(false);

  return (
    <a
      href="#main-content"
      className={`
        fixed top-2 left-2 z-50 rounded-md bg-[#E9FC87] text-[#262626] font-semibold px-4 py-3 
        focus:outline-none transform transition-transform duration-200
        ${focused ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"} 
        focus:translate-y-0 focus:opacity-100
      `}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      Saltar al contenido principal
    </a>
  );
}
