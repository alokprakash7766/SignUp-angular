import { Injectable } from '@angular/core';
import { CollectionReference, deleteDoc, updateDoc, docData, doc, DocumentData, Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Category } from '../models/category/category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {



  private dbPath = '/categories';

  private categoryRef: CollectionReference<DocumentData>;

  constructor(private db: Firestore) {
    this.categoryRef = collection(this.db, this.dbPath);
  }


  addCategory(categoryObj: Category) {
    categoryObj.status = true
    categoryObj.createdAt = Date.now()
    return addDoc(this.categoryRef, { ...categoryObj });
  }

  allCategories() {
    return collectionData(this.categoryRef, { idField: "id" })
  }


  getSingleCategory(id: any) {
    return docData(doc(this.categoryRef, id), { idField: 'id' });
  }


  updateCategory(id: any, data: any) {
    return updateDoc(doc(this.categoryRef, id), data)
  }


  deleteCategory(id: any) {
    return deleteDoc(doc(this.categoryRef, id));
  }








}
