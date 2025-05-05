module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accentColor: "#BE2956",
        darkColor: "#131313",
        bg: "#000000",
        bgHalf: "rgba(0,0,0,0.5)",
        inputActive: "#2D2D2D",
        secondBg: "#090909",
        subLabel: "#8B8B8B",
        header: "#C2C2C2",
        uploadedFilename: "#6A6A6A",
        text: "#A5A5A5",
      },
      dropShadow: {
        "custom-pink": "0px 4px 20px rgba(186, 33, 79, 0.4)",
        "uploaded-file-block": "0px 4px 4px 0px #00000040",
      },
    },
  },
  plugins: [],
};
