module.exports = {
    module: {
        rules: [
            {
                testgi: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
}