const express = require("express")
const app = express()
const portNo = 3700

app.get("/hng-backend-0", (req, res) => {
	res.status(200).json({
		email: "egbebitimi121@gmail.com", 
		current_datetime: (new Date()).toISOString(),
		github_url: ""
	})
})

function setCorsHeaders(req, res, next) {
	res.set('Access-Control-Allow-Origin', 'http://localhost:3700') // TODO: make it environment dependent
	res.set('Access-Control-Allow-Headers', 'Content-Type')
	res.set("Access-Control-Allow-Credentials", "true");
	res.set("Access-Control-Max-Age", "86400");	// 24 hours, should change later
	res.set("Access-Control-Allow-Methods", "GET");
	if (req.method === "OPTIONS") {
		res.status(204).send()
	}else next()
}


app.use(setCorsHeaders)

console.log(`Listening on port ${portNo}`)
app.listen(portNo)