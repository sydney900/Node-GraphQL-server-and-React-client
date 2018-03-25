db.createUser(
    {
      user: process.env.MONGODB_USER,
      pwd: process.env.MONGODB_PASS,
      roles: [
         { role: process.env.MONGODB_USERROLE, db: process.env.MONGODB_DATABASE }
      ]
    },
    {
        w: "majority",
        wtimeout: 5000
    }
);
db.createCollection(process.env.MONGODB_DATABASE);