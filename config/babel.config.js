module.exports = (api) => {
  const isProduction = api.env('production')
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          corejs: 3,
          modules: false,
          exclude: ['transform-typeof-symbol']
        }
      ],
      [
        '@babel/preset-react',
        {
          development: !isProduction,
          useBuiltIns: true
        }
      ]
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          helpers: true,
          version: require('@babel/runtime/package.json').version,
          regenerator: true,
          useESModules: false
        }
      ],
      !isProduction && require('react-refresh/babel')
    ].filter(Boolean)
  }
}
