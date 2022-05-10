module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: {
                    50: "#3a89f3",
                    100: "#313a55",
                    200: "#293145",
                    300: "#232a3b",
                },
            },
        },
    },
    plugins: [
        require("tailwind-scrollbar-hide"),
        require("tailwind-scrollbar"),
    ],
};
