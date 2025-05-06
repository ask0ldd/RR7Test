module.exports = {
    content: ["./src/**/*.{html,ts,tsx}"],
    theme: {
      extend: {
        colors: {
            'main-green': '#004746',
        },
        boxShadow: {
          custom: '0px 4px 8px rgba(0,0,0,0.5)'
        }
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
    plugins: [],
};