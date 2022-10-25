import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/services/book.service';
import { Book } from 'src/app/model/book/book.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  books: any = [];
 
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  this.bookService.GetAll().
  subscribe((res) => {
    console.log(res);
    this.books = res;
  })
}
}
