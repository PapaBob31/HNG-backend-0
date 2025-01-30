const express = require("express")
const app = express()
const portNo = process.env.PORT ? parseInt(process.env.PORT) : 3700 

function setCorsHeaders(req, res, next) {
	const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:3700'
	res.set('Access-Control-Allow-Origin', allowedOrigin)
	res.set('Access-Control-Allow-Headers', 'Content-Type')
	res.set("Access-Control-Max-Age", "86400");	// 24 hours
	res.set("Access-Control-Allow-Methods", "GET, OPTIONS");
	if (req.method === "OPTIONS") {
		res.status(204).send()
	}else next()
}


app.use(setCorsHeaders)

app.get("/hng-backend-0", (req, res) => {
	res.status(200).json({
		email: "egbebitimi121@gmail.com", 
		current_datetime: (new Date()).toISOString(),
		github_url: "https://github.com/PapaBob31/HNG-backend-0"
	})
})

app.use((req, res)=> {
	res.status(404).send("Resource not found!")
})

console.log(`Listening on port ${portNo}`)
app.listen(portNo)