const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb://ragarwal:test123@ds015730.mlab.com:15730/graphql-test"
);

mongoose.connection.once("open", () => {
  console.log("connected to mongo db");
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
