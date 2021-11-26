module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            typography(theme) {
                return {
                    dark: {
                        css: {
                            color: theme("colors.gray.300"),
                            '[class~="lead"]': {color: theme("colors.gray.400")},
                            a: {color: theme("colors.gray.400")},
                            strong: {color: theme("colors.gray.400")},
                            "ul > li::before": {backgroundColor: theme("colors.gray.700")},
                            hr: {borderColor: theme("colors.gray.800")},
                            blockquote: {
                                color: theme("colors.gray.400"),
                                borderLeftColor: theme("colors.gray.800"),
                            },
                            h1: {color: theme("colors.gray.400")},
                            h2: {color: theme("colors.gray.400")},
                            h3: {color: theme("colors.gray.400")},
                            h4: {color: theme("colors.gray.400")},
                            code: {color: theme("colors.gray.400")},
                            "a code": {color: theme("colors.gray.400")},
                            pre: {
                                color: theme("colors.gray.200"),
                                backgroundColor: theme("colors.gray.800"),
                            },
                            thead: {
                                color: theme("colors.gray.400"),
                                borderBottomColor: theme("colors.gray.700"),
                            },
                            "tbody tr": {borderBottomColor: theme("colors.gray.800")},
                        },
                    },
                };
            },
        }
    },
    variants: {
        extend: {typography: ["dark"]}
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
