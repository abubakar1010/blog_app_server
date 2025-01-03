import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") }); // Load .env file

export const config = {
	port: process.env.PORT || 3000,
	uri: process.env.DB_URI,
	bcryptRounds: process.env.BCRYPT_ROUNDS,
	jwtSecret: process.env.ACCESS_TOKEN_SECRET,
};
