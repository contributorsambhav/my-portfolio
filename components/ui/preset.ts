import type { Config } from "tailwindcss";

export const preset: Partial<Config> = {
  theme: {
    extend: {
      borderColor: {
        DEFAULT: "hsl(var(--border))",
      },
      backgroundColor: {
        DEFAULT: "hsl(var(--background))",
      },
      textColor: {
        DEFAULT: "hsl(var(--foreground))",
      }
    }
  }
}
