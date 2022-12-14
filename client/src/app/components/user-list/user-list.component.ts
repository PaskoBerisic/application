import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'password', 'role', 'action'];
  displayedColumns2: string[] = ['id', 'name', 'productCategory', 'price', 'action'];


  dataSource: any = [];
  dataSource2: any = [];

  Users:any = [];
  constructor(private userService: UserService, private loginService: LoginService, private productService: ProductsService) { }

  ngOnInit(): void {
    this.userService.GetAll().subscribe(res => {
      console.log(res)
      this.Users =res;
      this.dataSource =res;
    });  
    this.productService.GetAll().subscribe(res => {
      console.log(res)
      this.Users =res;
      this.dataSource2 =res;
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
