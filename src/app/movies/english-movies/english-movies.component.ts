import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-english-movies',
  templateUrl: './english-movies.component.html',
  styleUrls: ['./english-movies.component.css'],
})
export class EnglishMoviesComponent implements OnInit {
  movies: string[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<string[]>(
        'https://movies-db-257fc-default-rtdb.firebaseio.com/english-movies.json'
      )
      .subscribe((res) => {
        this.movies = res;
      }),
      (error: any) => {
        console.log(error);
      };
  }
}
