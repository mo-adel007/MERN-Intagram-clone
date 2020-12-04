// module.exports = {
//   MONGOURI:
//     "mongodb+srv://mukesh:ENMSSj2i34neUoDK@cluster0.8wuup.mongodb.net/<dbname>?retryWrites=true&w=majority",
//   JWT_SECRET: "fkdskfnskfj3iojroi",
// };

if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
