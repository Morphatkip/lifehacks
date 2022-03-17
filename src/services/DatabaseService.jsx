import { db } from "@/firebase";
class DatabaseService {
  collection;
  constructor(collectionName) {
    this.collectoin = db.collection(collectionName);
  }

  // returns list of records as an array of javascript objects

  getAll = async () => {
    const snapshot = await this.collection.get();
    return snapshot.docs.map((doc) => {
      return {
        id: doc.id, // append document id to each document
        ...doc.data(),
      };
    });
  };

  // return a single document in object format
  getOne = async ({ queryKey }) => {
    const { id } = queryKey[1];
    if (!id) return; // entity form us in create mode
    const snapshot = await this.collection.doc(id).get();
    return snapshot.data();
  };

  // resolve a relation, returns the referenced document
  getReference = async (documentReference) => {
    const res = await documentReference.get();
    const data = res.data();

    if (data && documentReference.id) {
      data.uid = documentReference.id;
    }
    return data;
  };

  // save a new document in the daabse
  create = async (data) => {
    return await this.collection.add(data);
  };

  // update an exisiting document wiht  new data
  updata = async (id, values) => {
    return await this.collection.doc(id).updata(values);
  };

  // delete an existing document from the collectoin
  remove = async (id) => {
    return await this.collection.doc(id).delete();
  };
}

// Create services for each entity type
export const AuthorService = new DatabaseService("authors");

export const CategoryService = new DatabaseService("categories");

export const BookService = new DatabaseService("books");
