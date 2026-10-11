"use client";

import { useState, useEffect } from "react";
import { Palette, Check } from "lucide-react";

const accents = [
  { name: "Gray", color: "115 115 115", hex: "#737373" },
  { name: "Blue", color: "59 130 246", hex: "#3b82f6" },
  { name: "Purple", color: "168 85 247", hex: "#a855f7" },
  { name: "Green", color: "34 197 94", hex: "#22c55e" },
  { name: "Yellow", color: "234 179 8", hex: "#eab308" },
  { name: "Pink", color: "236 72 153", hex: "#ec4899" },
  { name: "Teal", color: "20 184 166", hex: "#14b8a6" },
];

export default function ThemeAccentSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccent, setActiveAccent] = useState(accents[6]); // Teal

  useEffect(() => {
    const savedAccent = localStorage.getItem("accent-color");
    if (savedAccent) {
      const found = accents.find((a) => a.color === savedAccent);
      if (found) {
        setActiveAccent(found);
        document.documentElement.style.setProperty("--accent", savedAccent);
      }
    } else {
      document.documentElement.style.setProperty("--accent", accents[6].color);
    }
  }, []);

  const handleSelect = (accent: typeof accents[0]) => {
    setActiveAccent(accent);
    document.documentElement.style.setProperty("--accent", accent.color);
    localStorage.setItem("accent-color", accent.color);
    window.dispatchEvent(new CustomEvent("accent-changed", { detail: accent }));
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center justify-center p-1"
        aria-label="Select accent color"
        title="Change accent color"
      >
        <Palette className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-3 w-72 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl p-3 z-50">
          <div className="flex justify-between items-center mb-3 px-1">
            <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Accent</span>
            <span className="text-xs text-zinc-500">{activeAccent.name}</span>
          </div>
          <div className="flex gap-2 items-center justify-between">
            {accents.map((accent) => (
              <button
                key={accent.name}
                onClick={() => handleSelect(accent)}
                className="w-7 h-7 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ backgroundColor: accent.hex }}
                aria-label={`Select ${accent.name} accent`}
              >
                {activeAccent.name === accent.name && (
                  <Check className="w-4 h-4 text-white drop-shadow-md" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
