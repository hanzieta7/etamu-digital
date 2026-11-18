/* Shared Tailwind config & design tokens */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'sans-serif'] },
      colors: {
        navy: { hero: '#0B1528', card: '#1E293B', 900: '#0F172A', 700: '#1E3A8A' },
        tenun: { red: '#B91C1C', gold: '#D97706', 'gold-light': '#FEF3C7', 'red-subtle': '#FEF2F2' },
        surface: { DEFAULT: '#f7f9fb', card: '#FFFFFF', border: '#E2E8F0', 'container-low': '#f2f4f6', 'container-lowest': '#ffffff' },
        text: { primary: '#0F172A', secondary: '#64748B', muted: '#94A3B8' },
        green: '#10B981'
      }
    }
  }
};
