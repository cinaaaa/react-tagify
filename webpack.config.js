var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/ReactTagify.component.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'ReactTagify.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}
