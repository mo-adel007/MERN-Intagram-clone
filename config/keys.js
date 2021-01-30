// module.exports = {
//   MONGOURI:
//     "mongodb+srv:"",
//   JWT_SECRET: "",
// };

if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
