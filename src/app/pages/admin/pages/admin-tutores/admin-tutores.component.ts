import { Component, OnInit } from '@angular/core';
import { AdminTutorsService } from '../../services/admin-tutors/admin-tutors.service';
import { AdminTutors } from '../../classes/admin-tutors';

@Component({
  selector: 'app-admin-tutores',
  templateUrl: './admin-tutores.component.html',
  styleUrls: ['./admin-tutores.component.sass'],
})
export class AdminTutoresComponent implements OnInit {
  constructor(private _tutorService: AdminTutorsService) {}

  public tutors: AdminTutors[] = [];
  public tutorEdit: AdminTutors = {} as AdminTutors;

  ngOnInit(): void {
    this.getTutors();
  }
  getTutor(tutor_id: string) {
    this._tutorService.getTutor(tutor_id).subscribe((tutor) => {
      this.tutorEdit = tutor;
    });
  }
  getTutors() {
    this._tutorService.getTutors().subscribe((tutors) => {
      this.tutors = tutors;
    });
  }
}
