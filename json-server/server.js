import 'dotenv/config';
import jsonServer from 'json-server';
import auth from 'json-server-auth';

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults(); 

// Bind the router db to the app
server.db = router.db;

// Apply middlewares
server.use(middlewares);

// Apply authentication rules
const rules = auth.rewriter({
    users: 640,         // Only owner can access
    conversations: 660,  // Only authenticated users can access
    messages: 660       // Only authenticated users can access
});

// Ensure rules are applied before authentication middleware
server.use(rules);
server.use(auth); // Apply authentication middleware

// Finally, use the router
server.use(router);

// Start the server
server.listen(9000, () => {
    console.log(`JSON Server with Auth is running on port 9000`);
});
