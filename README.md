# [HNG](https://hng.tech/) Backend Internship Stage 0 task
This is a simple http server with only one publicly accessible endpoint - `/hng-backend-0`

The endpoint is only accessible through an http `GET` request. It returns a response in json format

## Local development
- Clone the repo
  ```git clone https://github.com/PapaBob31/HNG-backend-0.git```
- After cloning, navigate into the newly created folder and run the following commands through the shell
  ```shell
  npm install

  npm start
  ```
- The server should now be accessible at `http://localhost:3700/hng-backend-0`
- You can create a new environment variable file named `.env.local` 
  to edit both the port number and allowed [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) origin like so
  ```env
  ALLOWED_ORIGIN=<preferred origin>
  PORT=<your preferred port>
  ```

## Example
**Request**

```GET http://localhost:3700/hng-backend-0```

**Response**
```
{
	email: "egbebitimi121@gmail.com"
	current_datetime: "2025-01-30T15:12:39.439Z"
	github_url: "https://github.com/PapaBob31/HNG-backend-0"
}
```

**Ps**: You can hire **nodejs** developers [here](https://hng.tech/hire/nodejs-developers)
