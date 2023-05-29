
import { Injectable,NgZone  } from "@angular/core";
import { Auth,createUserWithEmailAndPassword,
   signInWithEmailAndPassword, signOut,signInWithPopup,
    GoogleAuthProvider,sendEmailVerification, 
    onAuthStateChanged,User, authState, user} from "@angular/fire/auth"; 
import { Firestore,setDoc, collection, collectionData, updateDoc,deleteDoc,doc,addDoc, getDoc,documentId,getFirestore} from '@angular/fire/firestore';

import Users from "../interfaces/users.interfaces";
import { FirebaseCodeErrorService } from '../services/firebase-code-error.services'
import { BehaviorSubject, Observable, of } from "rxjs";
import { switchMap } from 'rxjs/operators';
import { RoleValidator } from "../helpers/roleValidator";
@Injectable({
    providedIn: 'root'
})

export class UserService extends RoleValidator{
  public _userP!: Observable<Users>;
  UserData: any;  
  constructor(private auth:Auth,
    private firestore :Firestore,
    private firebaseError: FirebaseCodeErrorService,
    public ngZone: NgZone){
      super();
      onAuthStateChanged(this.auth,async (user: any)=>{
        if(user){
          //this.UserData = user;
          console.log('id'+user.uid);
          const ref= doc(this.firestore,`Usuarios/${user.uid}`);
          const docplis= await getDoc(ref);
          if(docplis.exists()){
            const datos = docplis.data();
            this.UserData = datos;
            this._userP =this.UserData;
              console.log('Documento encontrado:', datos);
              console.log('userfinal'+  JSON.stringify(this._userP));
          }else{
            console.log('Documento fallo:');
          }
         /* localStorage.setItem('user', JSON.stringify(this.UserData));
          JSON.parse(localStorage.getItem('user')!);*/
        } else {
          this.UserData=null;
          this._userP=this.UserData;
          console.log('constructor userServices ELSE'+ JSON.stringify(this.UserData));
          /*localStorage.setItem('user', 'null');
          JSON.parse(localStorage.getItem('user')!);*/
        }
      })
    }


    observarEstadoAutenticacion(auth: Auth): Observable<User | null> {
      console.log('entreee');
      authState(auth).pipe(
        switchMap(async (user) => {
          console.log('aca estoy');
          if(user){
            console.log('id'+user.email);
            const ref= doc(this.firestore,`Usuarios/${user.uid}`);
            const docplis= await getDoc(ref);
            if(docplis.exists()){
              const datos = docplis.data();
                console.log('Documento encontrado:', datos);
            }else{
              console.log('Documento fallo:');
            }
            return of (user);
          }
          console.log('nuul:');
          return of(null);
        })
      );
      console.log('entreee aaaa'+JSON.stringify(authState(this.auth)));
      return authState(this.auth);
    }




   /* getDoc<Users>(user:Users){
      const colec= collection(this.firestore,'Usuarios');
      const ref= doc(this.firestore,`Usuarios/${user.uid}`);
      return getDoc(ref);

    }*/
    getAuthFire(){
      return this.auth.currentUser;
    }
    sendEmailVerification(){
      return sendEmailVerification(this.auth.currentUser as User );
    }
    async register(dataUser: Users){
      createUserWithEmailAndPassword(this.auth, dataUser.email, dataUser.password)
      .then((result) => {
        /*//envia email de confirmacion
        this.ngZone.run(() => {
          this.sendEmailVerification();});*/
          console.log('result'+result);
        if(result){
          const firestoreg = getFirestore();
          const ref= doc(firestoreg,`Usuarios/${result.user.uid}`);
         dataUser.role='CLIENTE';
         dataUser.uid=result.user.uid;
         setDoc(ref, dataUser);
         
        }

      }).catch((error) => {
        window.alert(this.firebaseError.codeError(error.code));
       
      });
      
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