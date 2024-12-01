import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) { }

  /**
  * @author Juan Balboa Rojas
  */  
  async login(email:string, password: string): Promise<any | undefined | null>{

    console.log("anmtesss")
    var userCredential = null;
      userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log(userCredential);

    return userCredential;
    
  }

  async logout(){
    return await this.afAuth.signOut();
  }
}
