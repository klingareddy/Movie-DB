import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-telugu-movies',
  templateUrl: './telugu-movies.component.html',
  styleUrls: ['./telugu-movies.component.css']
})
export class TeluguMoviesComponent implements OnInit {
  movies: string[] = [];
  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    this.http
      .get<string[]>(
        'https://movies-db-257fc-default-rtdb.firebaseio.com/telugu-movies.json'
      )
      .subscribe((res) => {
        this.movies = res;
      }),
      (error: any) => {
        console.log(error);
      };
  }

}