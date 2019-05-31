const 
	nocache = require('nocache'),
	express = require("express"),
	webapp = express();
const requestIp = require('request-ip');
webapp.use(nocache());
webapp.listen(8000);
console.log("GO");
webapp.use("/reflect/", function(req,res) {
	//console.log(req);
//	var ip = (req.headers['x-forwarded-for'] || req.query.ip || req.connection.remoteAddress).replace("::ffff:","");
	var ip = req.connection.remoteAddress.replace("::ffff:","");
	console.log("GET /reflect: " + ip);
	console.log(req);
	console.log(requestIp.getClientIp(req));
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.send("https://rockconf.frontporch.cloud/api/id?ip="+ip);
});
