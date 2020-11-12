module.exports.main = (params) => {
  if (params.__ow_headers && params.__ow_headers['user-agent'] && params.__ow_headers['user-agent'].match(/httpie/i)) {
    return {
      statusCode: 200,
      body: "Hello New World",
      headers: {
        "Content-Type": "text/plain",
        "X-Version": "2",
        "Vary": "User-Agent"
      }
    }
  }
	return {
		statusCode: 200,
		body: "Hello World",
		headers: {
      "Content-Type": "text/plain",
      "X-Version": "1",
      "Vary": "User-Agent"
		}
	}
}