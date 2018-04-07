import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({ 
	selector: 'app-register-page',
	templateUrl: './register-page.component.html',
	styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
	public email: string;
	public password: string;
	constructor(
		public authService: AuthService,
		public router: Router,
		public flashMsn: FlashMessagesService
		) { }

	ngOnInit() {

	}

	onSubmitAddUser(){
		this.authService.registerUser(this.email, this.password)
		.then((res)=>{
			//notificaciones
			this.flashMsn.show("Usuario creado correctamente.", 
				{cssClass: 'alert-success', timeout:4000});
			this.router.navigate(['/privado']);
			console.log("Bien!!");
		}).catch((err)=>{
			//notificaciones
			this.flashMsn.show(err.message, 
				{cssClass: 'alert-danger', timeout:4000});
		});
	}



}
