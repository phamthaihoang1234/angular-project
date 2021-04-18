import { Component, OnInit } from '@angular/core';
import {IBook} from '../../ibook';
import {BooksService} from '../../service/books.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listBook: IBook[];
  total: number;
  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(): IBook[] {
    this.bookService.getAllBooks().subscribe((result) => {
      this.listBook = result;
      this.total = this.listBook.length;
    });
    return this.listBook;
  }
}
