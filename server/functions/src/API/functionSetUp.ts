import {getStorage} from "firebase-admin/storage";
import {ServiceAccount, initializeApp, cert} from "firebase-admin/app";
import {onRequest} from "firebase-functions/https";
import fs from "node:fs";
import {setGlobalOptions} from "firebase-functions";
import app from "./index.js";

const raw = fs.readFileSync(
  new URL("../multi-modal-processor-31d525de137b.json", import.meta.url),
  "utf-8",
);
const serviceAccount = JSON.parse(raw) as ServiceAccount;

const firebaseApp = initializeApp({
  credential: cert(serviceAccount),
  storageBucket: "multi-modal-processor.firebasestorage.app",
});

getStorage(firebaseApp);
export const api = onRequest(app);

setGlobalOptions({maxInstances: 10});
