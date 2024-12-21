import mongoose from "mongoose";
import { config } from "./app/config";
import { Server } from "http";
import { app } from "./app";

let server: Server;

async function main() {
	try {
		const connectionInstance = await mongoose.connect(config.uri as string);
		console.log(
			"server is connected to database",
			connectionInstance.connection.name
		);
		server = app.listen(config.port, () => {
			console.log("server is running on port", config.port);
		});
	} catch (error) {
		console.log("error while connecting to database", error);
		process.exit(1);
	}
}

main();

process.on("uncaughtException", () => {
	if (server) {
		server.close(() => {
			process.exit(1);
		});
	} else {
		process.exit(1);
	}
});

process.on("unhandledRejection", () => {
	if (server) {
		server.close(() => {
			process.exit(1);
		});
	} else {
		process.exit(1);
	}
});
