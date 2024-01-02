/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-background': "url('src/assets/banner.png')"
      },
      maxWidth: {
        'containerWidth': '1120px'
      },
      fontFamily: {
        'poppins': ["Poppins"],
        'nunito': ["Nunito"],
      },
      colors: {
        'orange': "#FF5A3C",
        'gray-black': "#1D2022",
        'gray1': "#5C727D",      
        'gray2': "#5C5B7B",      
      }
    },
  },
  plugins: [],
}