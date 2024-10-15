// const auth = require("json-server-auth");
// const jsonServer = require("json-server");
import jsonServer from 'json-server';     // Import using ES module syntax
import auth from 'json-server-auth'; 

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 9000;

// Bind the router db to the app
server.db = router.db;

server.use(middlewares);

const rules = auth.rewriter({
    users: 640,
    conversations: 660,
    messages: 660,
});

server.use(rules);
server.use(auth);
server.use(router);

server.listen(3000, () => {
    console.log('JSON Server with Auth is running on port 3000');
  });
