import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'password', 'role', 'action'];

  dataSource: any = [];
  Users:any = [];
  constructor(private userService: UserService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.userService.GetAll().subscribe(res => {
      console.log(res)
      this.Users =res;
      this.dataSource =res;
    });   
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.userService.Delete(id).subscribe((res) => {
        this.Users.splice(i, 1);
      })
    }
  }

  dodajUStorage(user: any){
    this.loginService.saveUser(user.username);
    this.loginService.saveToken(user.role_id)
  }

}
