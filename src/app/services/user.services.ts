
import { Injectable } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "@angular/fire/auth"; 
import { Firestore, collection, collectionData, updateDoc,deleteDoc,doc,addDoc} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private auth:Auth,private firestore :Firestore){}

    async register({email, password}: any){

      const result= await createUserWithEmailAndPassword(this.auth, email, password).catch(error =>{
        console.log('error al autenticar registro');

      })
      console.log(result);
      if(result){
        const coleccion= collection(this.firestore,'Usuarios');
        addDoc(coleccion,{email, password});
    
        //const id = result.user.uid;
        //this.fires.createDoc({email, password},'Usuarios');

      }
        }

        login({ email, password }: any) {
            return signInWithEmailAndPassword(this.auth, email, password);
          }
        
          loginWithGoogle() {
            return signInWithPopup(this.auth, new GoogleAuthProvider());
          }
        
          logout() {
            return signOut(this.auth);
          }
 
}