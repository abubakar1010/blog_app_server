import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser'
export const app = express();

// parser

app.use(
	cors({
		origin: "*",
	})
);
app.use(express.json());
app.use(cookieParser())

app.get("/test", (req, res) => {
	res.send("test route");
});
