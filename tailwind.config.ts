module.exports = {
    theme: {
      extend: {
        animation: {
          ["infinite-slider"]: "infiniteSlider 20s linear infinite",
        },
        keyframes: {
          infiniteSlider: {
            "0%": { transform: "translateX(0)" },
            "100%": {
              transform: "translateX(calc(-250px * 5))",
            },
          },
        },
      },
    },
  };