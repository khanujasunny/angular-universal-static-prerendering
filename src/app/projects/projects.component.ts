import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects;
  constructor(private http: HttpClient) {
    this.http.get('./assets/project-list.json').subscribe(data => {
      this.projects = data;
      console.log(data);
    });
  }

  ngOnInit() {
  }


}
