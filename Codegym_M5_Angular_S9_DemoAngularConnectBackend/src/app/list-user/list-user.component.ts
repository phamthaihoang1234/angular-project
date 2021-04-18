import {Component, OnInit} from '@angular/core';
import {IUser} from '../iuser';
import {UserServiceService} from '../service/user-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  listUsers: IUser[];
  page = 0;
  size = 6;
  searchValue: string;
  allsize: any;

  constructor(private userService: UserServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getAllUsers(this.page, this.size, '');
  }

  getAll(): any {
    this.userService.getallUsers().subscribe((data: any) => {
      this.allsize = Math.ceil((data.length) / 6);
      console.log(this.allsize);
      }, error => {
      alert('errol');
    });
  }

  getAllUsers(page, size, search?: string): IUser[] {
    this.userService.getAllUser(page, size, search).subscribe((data: any) => {
      this.listUsers = data; // lấy dữ kiệu gán vào cho listUsers
      console.log(this.listUsers.length);
    });
    console.log(this.listUsers.length);
    return this.listUsers;
  }

  search() {
    this.page = 0;
    this.getAllUsers(this.page, this.size, this.searchValue);
  }

  // tslint:disable-next-line:typedef
  deleteUser(id) {
    // if (confirm('Are you sure?')) {
    this.userService.delete(id).subscribe(value => {
      alert("Are you sure?");
      console.log('Delete', value);
      this.getAllUsers(this.page, this.size, '');
      this.ngOnInit();
    });
  }

  next() {
    this.page++;
    console.log(this.searchValue);
    if (typeof (this.searchValue) === 'undefined') {
      this.getAllUsers(this.page, this.size, '');
    } else {
      this.getAllUsers(this.page, this.size, this.searchValue);
    }

    // this.getAllUsers(this.page, this.size, "");

  }

  back() {
    this.page--;
    if (typeof (this.searchValue) === 'undefined') {
      this.getAllUsers(this.page, this.size, '');
    } else {
      this.getAllUsers(this.page, this.size, this.searchValue);
    }

    // this.getAllUsers(this.page, this.size, "");
  }

  // }
}
