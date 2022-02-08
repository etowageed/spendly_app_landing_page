module.exports = {
  content: ["./public/**/*.html", "./public/**/*.js", "./src/**/*.css"],
  theme: {
    extend: {
      colors: {
        "body-dark": '#17171f',
        "primary-col": '#7b4397',
        "text-dark": '#3d3d3d',
        "secondary-col": '#f03719',
        "input-col":'#dedcdc',
      },
      fontFamily: {
'lato':["'lato'", "sans-serif"]
      },
      fontSize: {
        '40px':'2.5rem',
      },
      spacing: {
        '27px': '1.5rem',
        '39px': '2.4rem'
      }
    },
  },
  plugins: [],
}
