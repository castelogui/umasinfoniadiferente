import { Component, OnInit } from '@angular/core';
import { AdminTutorsService } from '../../services/admin-tutors/admin-tutors.service';
import { AdminTutors } from '../../classes/admin-tutors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-tutores',
  templateUrl: './admin-tutores.component.html',
  styleUrls: ['./admin-tutores.component.sass'],
})
export class AdminTutoresComponent implements OnInit {
  constructor(
    private _tutorService: AdminTutorsService,
    private router: Router
  ) {}

  public tutors: AdminTutors[] = [];

  ngOnInit(): void {
    this.getTutors();
  }
  reload() {
    this.router.navigate(['/admin/tutors']).then(() => {
      window.location.reload();
    });
  }
  getTutor(tutor_id: string) {
    this.router.navigate(['/admin/tutors'], { queryParams: { id: tutor_id } });
  }
  getTutors() {
    this._tutorService.getTutors().subscribe((tutors) => {
      this.tutors = tutors;
    });
  }
}
