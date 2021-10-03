import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

export interface MovieObj {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: any;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbId: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: any;
}

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css'],
})
export class SearchMoviesComponent implements OnInit {
  @ViewChild('movie_name') name: ElementRef;
  movie: MovieObj;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSearch() {
    console.log(this.movie);
    this.http
      .get<MovieObj>(
        'http://www.omdbapi.com/?apikey=399f0030&t=' +
          this.name.nativeElement.value
      )
      .subscribe((res) => {
        console.log(res);
        if (res.Title) {
          this.movie = res;
        } else {
          alert("OOP's\nThe movie you entered is incorrectly spelled");
          this.name.nativeElement.value = '';
        }
      });
  }
}
