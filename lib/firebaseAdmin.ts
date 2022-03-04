import * as admin from 'firebase-admin'
import config from '@/config/index'
import { getFirestore } from 'firebase-admin/firestore'
import { getDatabase } from 'firebase-admin/database'
import { getAuth } from 'firebase-admin/auth'


export const adminConfig = {
  credential: admin.credential.cert({
   ...config.firebaseAdminCredential
  }),
  databaseURL: config.firebaseDatabaseUrl,
}

if (!admin.apps.length) {
  admin.initializeApp({
    ...adminConfig
  })
}



export const adminDb = getDatabase();
export const adminAuth = getAuth();
