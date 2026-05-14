/** @type {import('tailwindcss').Config} */
     export default {
       content: [
         "./index.html",
         "./src/**/*.{js,ts,jsx,tsx}",
       ],
       theme: {
         extend: {
           colors: {
            "background": "#0b141c",
            "surface": "#0b141c",
            "surface-bright": "#313a43",
            "surface-container-low": "#141c24",
            "surface-container": "#182028",
            "surface-container-high": "#222b33",
            "surface-container-highest": "#2d363e",
            "surface-variant": "#2d363e",
            "primary": "#c0c1ff",
            "primary-container": "#5c61d6",
            "on-primary": "#171796",
            "on-primary-container": "#f3f1ff",
            "on-background": "#dae3ee",
            "on-surface": "#dae3ee",
            "on-surface-variant": "#c7c5d5",
            "outline": "#908f9f",
            "outline-variant": "#464653",
            "tertiary": "#6fdd78",
            "tertiary-container": "#00802b",
            "on-tertiary-container": "#cdffc8",
            "error": "#ffb4ab",
            "error-container": "#93000a",
            "on-error-container": "#ffdad6",
          },
          borderRadius: {
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
          },
          spacing: {
            "unit": "4px",
            "input-height": "40px",
            "card-padding": "24px",
            "margin": "32px",
            "gutter": "24px"
          },
          fontFamily: {
            "body-lg": ["Inter", "sans-serif"],
            "body-md": ["Inter", "sans-serif"],
            "headline-md": ["Inter", "sans-serif"],
            "headline-lg": ["Inter", "sans-serif"],
            "label-md": ["Inter", "sans-serif"],
            "code": ["JetBrains Mono", "monospace"],
          }
        }
      },
      plugins: [],
    }
