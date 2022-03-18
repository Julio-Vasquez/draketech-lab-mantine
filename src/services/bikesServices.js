import { collection, getDocs } from 'firebase/firestore/lite'
import { dbFirebase } from '../common/firebase'

export const getData = async () => {
  const bikesCollection = collection(dbFirebase, 'bikes')
  const bikesSnapshot = await getDocs(bikesCollection)
  const bikesList = bikesSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }))
  return bikesList
}
