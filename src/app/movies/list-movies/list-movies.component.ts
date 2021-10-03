import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css'],
})
export class ListMoviesComponent implements OnInit {
  movies: string[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<string[]>(
        'https://movies-db-257fc-default-rtdb.firebaseio.com/movies-list.json'
      )
      .subscribe((res) => {
        this.movies = res;
      }),
      (error: any) => {
        console.log(error);
      };
  }
}
