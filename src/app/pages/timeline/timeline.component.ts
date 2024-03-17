import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/services/timeline/timeline.service';
import { Timeline } from 'src/app/classes/timeline';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass'],
})
export class TimelineComponent implements OnInit {
  constructor(private _timelineService: TimelineService) {}
  public timeline: Timeline[] = [];

  ngOnInit() {
    this._timelineService.getTimeline().subscribe((retorno) => {
      this.timeline = retorno.map((item) => {
        return new Timeline(
          item.id,
          new Date(item.date),
          item.name,
          item.descricao,
          item.img
        );
      });
    });
  }
}
