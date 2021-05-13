const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/express-auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: {
    type: String,
    set(val) {
      return require("bcryptjs").hashSync(val, 10)
    }
  }
})

const User = mongoose.model("User", userSchema)
// User.db.dropCollection("users")
module.exports = { User }
