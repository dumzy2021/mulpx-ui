import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  user!: UserDetails;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUserDetails();
  }
  getUserDetails() {
    this.userService.getUserDetails().subscribe({
      next: (data: UserDetails) => {
        console.log(data);
        this.user = data;
      },
    });
  }
}
