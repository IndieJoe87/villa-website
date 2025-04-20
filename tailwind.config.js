/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true, // This ensures Tailwind classes take precedence
  theme: {
    extend: {
      colors: {
        // 50 shades of grey
        grey1: '#FFFFFF', // Pure White
        grey2: '#FAFAFA',
        grey3: '#F5F5F5',
        grey4: '#F0F0F0',
        grey5: '#EBEBEB',
        grey6: '#E6E6E6',
        grey7: '#E1E1E1',
        grey8: '#DCDCDC', // Gainsboro
        grey9: '#D7D7D7',
        grey10: '#D3D3D3', // Light Grey
        grey11: '#CECECE',
        grey12: '#C9C9C9',
        grey13: '#C4C4C4',
        grey14: '#BFBFBF',
        grey15: '#BABABA',
        grey16: '#B5B5B5',
        grey17: '#B0B0B0',
        grey18: '#ABABAB',
        grey19: '#A6A6A6',
        grey20: '#A1A1A1',
        grey21: '#9C9C9C',
        grey22: '#979797',
        grey23: '#929292',
        grey24: '#8D8D8D',
        grey25: '#888888',
        grey26: '#838383',
        grey27: '#7E7E7E',
        grey28: '#797979',
        grey29: '#747474',
        grey30: '#6F6F6F',
        grey31: '#6A6A6A',
        grey32: '#656565',
        grey33: '#606060',
        grey34: '#5B5B5B',
        grey35: '#565656',
        grey36: '#515151',
        grey37: '#4C4C4C',
        grey38: '#474747',
        grey39: '#424242',
        grey40: '#3D3D3D',
        grey41: '#383838',
        grey42: '#333333', // Dark Grey
        grey43: '#2E2E2E',
        grey44: '#292929',
        grey45: '#242424',
        grey46: '#1F1F1F',
        grey47: '#1A1A1A',
        grey48: '#151515',
        grey49: '#101010',
        grey50: '#0A0A0A', // Almost Black
        
        // Legacy colors mapped to our grey shades
        primary: '#333333',
        secondary: '#555555',
        accent: '#C0C0C0',
        highlight: '#888888',
        luxuryBlue: '#4A5568',
      },
      maxWidth: {
        '70': '70%',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-in-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-in-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-in-out forwards',
        'scale-up': 'scaleUp 0.5s ease-in-out forwards',
        'pulse': 'pulse 2s infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #333333 0%, #555555 100%)',
        'gradient-accent': 'linear-gradient(135deg, #C0C0C0 0%, #E8E8E8 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1A1A1A 0%, #333333 100%)',
        'gradient-light': 'linear-gradient(135deg, #FFFFFF 0%, #F0F0F0 100%)',
        'gradient-medium': 'linear-gradient(135deg, #A1A1A1 0%, #797979 100%)',
        'gradient-grey-1-10': 'linear-gradient(135deg, #FFFFFF 0%, #D3D3D3 100%)',
        'gradient-grey-10-20': 'linear-gradient(135deg, #D3D3D3 0%, #A1A1A1 100%)',
        'gradient-grey-20-30': 'linear-gradient(135deg, #A1A1A1 0%, #6F6F6F 100%)',
        'gradient-grey-30-40': 'linear-gradient(135deg, #6F6F6F 0%, #3D3D3D 100%)',
        'gradient-grey-40-50': 'linear-gradient(135deg, #3D3D3D 0%, #0A0A0A 100%)',
        'gradient-hero': 'linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(240, 240, 240, 0.6) 30%, rgba(220, 220, 220, 0.3) 60%, rgba(200, 200, 200, 0.1) 100%)',
      },
      boxShadow: {
        'card': '0 10px 30px rgba(0, 0, 0, 0.08)',
        'highlight': '0 0 15px rgba(192, 192, 192, 0.5)',
        'grey-light': '0 4px 12px rgba(220, 220, 220, 0.5)',
        'grey-medium': '0 6px 16px rgba(160, 160, 160, 0.4)',
        'grey-dark': '0 8px 20px rgba(80, 80, 80, 0.3)',
        'grey-inner': 'inset 0 2px 4px rgba(100, 100, 100, 0.15)',
        'grey-button': '0 2px 6px rgba(150, 150, 150, 0.2)',
        'grey-hover': '0 10px 25px rgba(120, 120, 120, 0.3)',
        'grey-focus': '0 0 0 3px rgba(180, 180, 180, 0.4)',
      },
    },
  },
  plugins: [],
}