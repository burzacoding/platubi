import { FunctionParser } from 'firebase-backend'

exports = new FunctionParser(__dirname, exports).exports;

// import * as functions from "firebase-functions";
// import * as admin from 'firebase-admin'

// admin.initializeApp()

// const db = admin.firestore()

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
