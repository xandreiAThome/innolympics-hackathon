import colors from "@material-tailwind/html/theme/base/colors";
import withMT from "@material-tailwind/html/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      dswdlightestblue: "#F0F9FF",
      dswdlightblue: "#7CD4FD",
    },
  },
  plugins: [],
});
