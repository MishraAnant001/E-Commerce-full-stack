import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router:Router){}
  isLoggedIn=localStorage.getItem("token")?true:false
  logoutUser(){
    Swal.fire({
      title: "Are you sure you want to logout?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "logout successfull",
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          localStorage.removeItem("token")
          localStorage.removeItem("isAdmin")
          this.isLoggedIn=false
          this.router.navigate([""])
        })
      }
    });
    
  }
}
