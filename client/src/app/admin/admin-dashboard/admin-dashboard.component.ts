import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  orders: any;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getAll().subscribe((res => {
      console.log(res);
      this.orders = res;
    }))
  }

}
