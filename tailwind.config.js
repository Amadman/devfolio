module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        awesome: '#DC3522',
        darkgray: '#333333',
        awesomegray: '#5D5D5D',
        darktext: '#414141',
      },
      fontSize: {
        xl: ['20px', '28px'],
      },
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      header: ['Roboto', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [],
};
