import * as express from 'express';

let app = express();

app.use(express.static(__dirname));

app.listen(8080, () => {
	console.log("listening on http://localhost:8080");
})