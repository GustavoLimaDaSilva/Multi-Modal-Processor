import {onInit} from "firebase-functions";

const express = (await import("express")).default;
const cors = (await import("cors")).default;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
const port = 3000;

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    credentials: true,
  }),
);

onInit(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});

export default app;
