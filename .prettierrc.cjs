module.exports = {
    tabWidth: 4,
    jsxSingleQuote: true,
    jsxBracketSameLine: true,
    printWidth: 100,
    singleQuote: true,
    semi: false,
    overrides: [
        {
            files: '*.json',
            options: {
                printWidth: 200,
            },
        },
    ],
    arrowParens: 'always',
    trailingComma: "none"
}
