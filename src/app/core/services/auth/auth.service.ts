import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) { }

  async login(email:string, password: string): Promise<any | undefined | null>{

    console.log("anmtesss")
    var userCredential = null;
    //try{
      userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log(userCredential);
   // }catch(error){
   ////   console.log(error);
  //  }

    return userCredential;
    
  }

  async logout(){
    return await this.afAuth.signOut();
  }
}
