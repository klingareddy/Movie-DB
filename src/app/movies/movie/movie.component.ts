import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})

// interface MovieInfo {
//   Title: string;
//   Released: string;
//   Rated: string;
//   Director: string;
//   BoxOffice: string;
//   imdbRating: string;
//   Poster: string;
// }
export class MovieComponent implements OnInit {
  Title: string;
  Released: string;
  Rated: string;
  Director: string;
  BoxOffice: string;
  imdbRating: string;
  Poster: string;

  @Input('movie_name') movie: string | undefined;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.http
        .get<any>('http://www.omdbapi.com/?apikey=399f0030&t=' + this.movie)
        .subscribe((res) => {
          this.Title = res.Title;
          this.Released = res.Released;
          this.Rated = res.Rated;
          this.Director = res.Director;
          this.BoxOffice = res.BoxOffice;
          this.imdbRating = res.imdbRating;
          this.Poster = res.Poster;
        });
    }, 200);
  }
}
