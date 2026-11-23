import {setGlobalOptions} from "firebase-functions";
import {onRequest} from "firebase-functions/https";
import {initializeApp} from "firebase-admin/app";

import app from "./API/index.js";

export const api = onRequest(app);
initializeApp();
setGlobalOptions({maxInstances: 10});
