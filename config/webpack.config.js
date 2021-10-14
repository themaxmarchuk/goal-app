const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// Define absolute paths used throughout the configuration
const paths = {
  // Where all files will be placed
  build: path.resolve('./dist'),
  // Babel configuration file
  babel: path.resolve('./config/babel.config.js'),
  // Postcss configuration file
  postcss: path.resolve('./config/postcss.config.js')
}

// This variable is used to apply different configuration options based on the environment
const isProduction = process.env.NODE_ENV === 'production' || false

module.exports = {
  // Chosen mode tells webpack to use its built-in optimizations accordingly
  mode: isProduction ? 'production' : 'development',
  // Only enable source maps for development
  devtool: isProduction ? false : 'inline-source-map',
  stats: {
    usedExports: true,
    assets: true
  },
  // Specify entry points
  entry: {
    main: './src/index.js'
  },
  // Configure webpack-dev-server
  // Output options related to how webpack emits results
  // https://webpack.js.org/configuration/output/
  output: {
    // The root path of all output files
    path: paths.build,
    // Clean the dist folder between builds
    clean: true,
    // Allow anonymous cross origin loading (webpack-subresource-integrity)
    crossOriginLoading: 'anonymous',
    // Configure the output JS filenames with cache-busting hashes in production
    filename: isProduction ? '[name].[contenthash].bundle.js' : '[name].bundle.js',
    chunkFilename: '[name].[contenthash].bundle.js'
  },
  optimization: {
    // Setup tree shaking
    usedExports: true,
    // Only run optimization plugins in production
    minimize: isProduction,
    // Define minimization plugins
    minimizer: [
      // Use Terser for JS optimization
      new TerserJSPlugin({
        // Don't extract comments to a separate LICENCE.txt file
        extractComments: false,
        terserOptions: {
          output: {
            // Strip all comments from output files
            comments: false
          }
        }
      }),
      // Minimize CSS with default configuration
      new CssMinimizerPlugin()
    ],
    // Split files into chunks to decrease time spent loading
    splitChunks: {
      cacheGroups: {
        // Enable automatic vendor code extraction into a separate file
        // This enables us to cache vendor code separately which likely isn't subject to frequent changes
        mui: {
          test: /[\\/]node_modules[\\/]@mui.?/,
          name: 'mui',
          chunks: 'all'
        },
        react: {
          test: /[\\/]node_modules[\\/]react.?/,
          name: 'react',
          chunks: 'all'
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  // Module options
  // These options determine how the different types of modules within a project will be treated
  // https://webpack.js.org/configuration/module/
  module: {
    // Make missing exports throw an error
    strictExportPresence: true,
    rules: [
      // Load JS files using babel-loader
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // Point to an external babel configuration file
          // https://babeljs.io/docs/en/configuration
          configFile: paths.babel
        }
      },
      // Load CSS files with postcss
      // css files --> postcss-loader --> css-loader --> MiniCssExtractPlugin (production) | style-loader (development)
      {
        test: /\.(css)$/,
        // NOTE: loaders are consumed in LIFO order (last in first out)
        use: [
          // In production MiniCssExtractPlugin is used to bundle all CSS in a single output file
          // In development, style-loader is used to inject <style> tags during runtime
          // (which allows for hot replacement of CSS files)
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          // css-loader allows us to process any import statements in the CSS files
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          // Process any CSS imports found with postcss
          {
            loader: 'postcss-loader',
            // Load postcss options from an external file
            options: require(paths.postcss)
          }
        ]
      },
      // file-loader is to load any image/resource files
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          // Files will be placed in an assets directory with a cache-busting hash in the filename
          name: 'assets/[name].[contenthash:8].[ext]'
        }
      }
    ]
  },
  // NOTE: the plugins array is filtered with the Boolean function to disable plugins based on the environment
  plugins: [
    // Report what webpack is currently working on to the CLI
    new webpack.ProgressPlugin(),
    // Enable bundle analyzer
    // new BundleAnalyzerPlugin(),
    // React Refresh provides hot reloading for react applications
    !isProduction && new ReactRefreshWebpackPlugin(),
    // Subresource Integrity plugin generates file hashes in HTML tags
    isProduction && new SubresourceIntegrityPlugin(),
    // HTML plugin injects script/style tags into a template index.html file
    new HtmlWebpackPlugin({
      // Use a template file instead of generating the HTML from scratch
      template: './src/index.html'
    }),
    // The MiniCSSExtractPlugin is used to extract all css a single file in production
    isProduction && new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ].filter(Boolean)
}
