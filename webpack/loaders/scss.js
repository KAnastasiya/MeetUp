module.exports = function(ExtractText) {
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractText.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                  minimize: true,
                  sourceMap: true,
                },
              },
              {
                loader: 'resolve-url-loader',
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [
                    require('postcss-font-magician')({
                      variants: {
                        Roboto: {
                          100: [],
                          300: [],
                          400: [],
                          500: [],
                          700: [],
                          900: [],
                        },
                        RobotoSlab: {
                          100: [],
                          400: [],
                        },
                      },
                      foundries: ['google'],
                    }),
                    require('postcss-property-lookup'),
                    require('postcss-flexbugs-fixes'),
                    require('autoprefixer')({
                      browsers: ['> 1%', 'last 2 version'],
                      cascade: false,
                    }),
                  ],
                },
              },
            ],
          }),
        },
      ],
    },
  };
};
