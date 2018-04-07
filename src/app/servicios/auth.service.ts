import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase  from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
	/*
		Un servicio, es una categoria amplia
		que puede abarcar cualquier funcion o 
		caracteristica en nuestra aplicacion.
		Normalmente se utiliza para un conexion externa
		a una api o compartir con otros componentes
		y se comparten o inyectan por medio de metodos.

		*/
		constructor(
			public afAuth: AngularFireAuth
			) { }


		registerUser(email: string, pass:string){
			return new Promise((resolve, reject)=>{
				this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
				.then( userData => resolve(userData), err=> reject(err));
			});
		}

		loginUser(email: string, pass: string){
			return new Promise((resolve, reject)=>{
				this.afAuth.auth.signInWithEmailAndPassword(email, pass)
				.then( userData => resolve(userData), err=> reject(err));
			});
		}

		logout(){
			return this.afAuth.auth.signOut();
		}

		getAuth(){
			return this.afAuth.authState.map( auth=> auth);
		}

	}
