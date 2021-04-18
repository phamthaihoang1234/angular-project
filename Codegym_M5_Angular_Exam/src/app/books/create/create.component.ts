import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BooksService} from '../../service/books.service';
import {Router} from '@angular/router';
import {IBook} from '../../ibook';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  constructor(private fb: FormBuilder,
              private bookService: BooksService,
              private router: Router) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: [''],
      author: [''],
      description: [''],
    });
  }

  createBook() {
    const book: IBook = this.createForm.value;
    this.bookService.create(book).subscribe(() => {
      alert('Create successfully!');
      this.router.navigate(['listBook']);
    });
  }

}
