const whoiser = require("whoiser");

/*
(async () => {
  // WHOIS info for ASN15169
  let domainInfo = await whoiser("google.com");

  // OR with options for whois server and how many WHOIS servers to query
  let domainInfo2 = await whoiser.domain("blog.google", {
    host: "whois.nic.google",
    follow: 1,
  });

  console.log(domainInfo, domainInfo2);
  let whois = await whoiser.asn(15169);

  console.log(whois);
})();

*/
// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
fastify.get('/', async (request, reply) => {  
  return { data: "Hello" }
})
// Declare a route
fastify.get('/domaininfo/:domain', async (request, reply) => {
 
  let domainInfo = await whoiser(request.params["domain"]);
  return { data: domainInfo }
})

// Run the server!
const start = async () => {

  try {
    const port = process.env.PORT || 3000;
    var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
    var server_host = process.env.YOUR_HOST || '0.0.0.0';
    await fastify.listen(server_port,server_host, () => console.log(`Listening on ${server_host}:${server_port}`))
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
/* const whoiser = require('whoiser')

(async () => {

const domainWhois = await whoiser('google.com')
const tldWhois = await whoiser('.net')
const ipWhois = await whoiser('1.1.1.1')
console.log(domainWhois)
console.log(tldWhois)
console.log(ipWhois)


	// WHOIS info from Registry (Verisign) AND Registrar (MarkMonitor) whois servers
	let domainInfo = await whoiser('google.com')

	// OR with options for whois server and how many WHOIS servers to query
	let domainInfo2 = await whoiser.domain('blog.google', {host: 'whois.nic.google', follow: 1})

	console.log(domainInfo, domainInfo2)
})(); */
