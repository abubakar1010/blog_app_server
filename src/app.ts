import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import router from "./app/routes/route";
import notFoundRoute from "./app/middleware/notFoundRoute";
export const app = express();

// parser

app.use(
	cors({
		origin: "*",
	})
);
app.use(express.json());
app.use(cookieParser());

// routes

app.use("/api", router);

app.get("/", (req, res) => {
	res.send("test route");
});

app.use(globalErrorHandler);
app.use(notFoundRoute);
