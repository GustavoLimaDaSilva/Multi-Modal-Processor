import {setGlobalOptions} from "firebase-functions";
import {onRequest} from "firebase-functions/https";
import {cert, initializeApp, ServiceAccount} from "firebase-admin/app";
import {getStorage} from "firebase-admin/storage";
import fs from "node:fs";
import app from "./API/index.js";


const raw = fs.readFileSync(
  new URL("../multi-modal-processor-keys.json", import.meta.url),
  "utf-8",
);
const serviceAccount = JSON.parse(raw) as ServiceAccount;

const firebaseApp = initializeApp({
  credential: cert(serviceAccount),
  storageBucket: "multi-modal-processor.firebasestorage.app",
});

getStorage(firebaseApp);

onRequest(app);
setGlobalOptions({maxInstances: 10});
