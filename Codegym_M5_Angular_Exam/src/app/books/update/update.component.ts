import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IBook} from '../../ibook';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BooksService} from '../../service/books.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateForm: FormGroup;
  id: any;
  book: IBook;
  constructor(private bookService: BooksService,
              private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    });

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.bookService.getBookById(this.id).subscribe((result) => {
        this.book = result;
        this.updateForm.patchValue(this.book);
      });
    });
  }

  // tslint:disable-next-line:typedef
  updateBook() {
    if (this.updateForm.valid) {
      const {value} = this.updateForm;
      const data = {
        ...this.book,
        ...value
      };
      this.bookService.update(data).subscribe(result => {
          alert('Update successfully!');
          this.router.navigate(['listBook']);
        }, error => {
          console.log(error);
        }
      );
    }
  }
}
