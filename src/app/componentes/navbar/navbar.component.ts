import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	public isLogin: boolean;
	public nombreUsuario: string;
	public emailUsuario:string;
  public fotoUsuario:string;
  constructor(
  	public authService: AuthService
  	) { }

  ngOnInit() {
  	this.authService.getAuth().subscribe( autho=>{
  		if (autho) {
  			this.isLogin = true;
  			this.nombreUsuario = autho.displayName;
  			this.emailUsuario = autho.email;
        this.fotoUsuario = autho.photoURL;
  		} else {
  			this.isLogin = false;
  		}
  	})
  }

  onClickLogout(){
  	this.authService.logout();
  }

}
