import {onInit} from "firebase-functions";
const PDFRoute = (await import("./PDF.js")).default;
const express = (await import("express")).default;
const cors = (await import("cors")).default;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    credentials: true,
  }),
);

onInit(() => {
  app.use("/PDF", PDFRoute);
});

export default app;
