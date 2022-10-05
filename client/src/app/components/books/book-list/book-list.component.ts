import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/services/book.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit  {
  displayedColumns: string[] = ['id', 'name', 'price', 'description', 'action'];
  displayedColumns2: string[] = ['id', 'name', 'price', 'description', 'action'];

  dataSource: any = [];
  Books:any = [];
  dataSource2: any = [];
  
  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    this.bookService.GetAll().subscribe(res => {
      console.log(res)
      this.Books =res;
      this.dataSource =res;

      this.dataSource2 = new MatTableDataSource(this.Books);
    });   
  }
  
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.bookService.Delete(id).subscribe((res) => {
        this.Books.splice(i, 1);
      })
    }
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  }

}