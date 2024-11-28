import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const uploadSample = async (file, storage) => {
  if (!file || !storage) {
    throw new Error('File or storage is not defined');
  }

  const storageRef = ref(storage, `samples/${file.name}`); // Define the storage path
  const snapshot = await uploadBytes(storageRef, file); // Upload the file
  const url = await getDownloadURL(snapshot.ref); // Get the file's download URL
  return url;
};
