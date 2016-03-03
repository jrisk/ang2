export class Logger {
	log(msg: any) { console.log(msg); }
	error(msg: any) { console.error(msg); }
	warn(msg: any) { console.warn(msg); }
}

//service class that logs to browser console