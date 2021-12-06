module.exports = {
  postcssOptions: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {
        config: "./config/tailwind.config.js"
      }
    }
  }
}
