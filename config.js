const config = {
  port: 3000,
  db: {
    url: "mongodb://localhost:27017/mytest",
    host: "localhost",
    port: 27017,
    name: "mytest",
  },
  urlPrefix: "/api/v1",
  jwtSecret: "testSecret",
};

module.exports = { config };
