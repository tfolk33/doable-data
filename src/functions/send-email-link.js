
import { firebaseAuth } from 'boot/firebase'

export const sendSignInLink = email => {
  const actionCodeSettings = {
    url: location.href,
    handleCodeInApp: true
  }
  return firebaseAuth.sendSignInLinkToEmail(email, actionCodeSettings)
}
