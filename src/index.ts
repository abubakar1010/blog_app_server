import mongoose from "mongoose";
import { config } from "./app/config";
import { Server } from "http";
import { app } from "./app";

let server:Server;

 async function main() {
	try {
		const connectionInstance = await mongoose.connect(config.uri as string);
		console.log(
			"server successfully connected!! host on",
			connectionInstance.connection.host
		);
        server = app.listen(config.port, () => {
            console.log("server is listen on port", config.port)
        })
	} catch (error) {
		console.log("oops! connection failed", error);
	}
}

main()

process.on("unhandledRejection", () => {
    process.exit(1)
})

process.on("uncaughtException", () => {
    if(server){
        server.close(()=>{
            process.exit(1)
        })
    }else{
        process.exit(1)
    }
})
