import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './header/welcome/welcome.component';
import { SignInComponent } from './header/sign-in/sign-in.component';
import { MoviesComponent } from './movies/movies.component';
import { ListMoviesComponent } from './movies/list-movies/list-movies.component';
import { TeluguMoviesComponent } from './movies/telugu-movies/telugu-movies.component';
import { EnglishMoviesComponent } from './movies/english-movies/english-movies.component';
import { SearchMoviesComponent } from './movies/search-movies/search-movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { FormsModule } from '@angular/forms';
import { AppGuard } from './app.guard';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'auth', component: SignInComponent },
  {
    path: 'movies',
    component: MoviesComponent,
    canActivate: [AppGuard],
    children: [
      { path: 'list', component: ListMoviesComponent },
      { path: 'telugu', component: TeluguMoviesComponent },
      { path: 'english', component: EnglishMoviesComponent },
      { path: 'search', component: SearchMoviesComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    SignInComponent,
    MoviesComponent,
    ListMoviesComponent,
    TeluguMoviesComponent,
    EnglishMoviesComponent,
    SearchMoviesComponent,
    MovieComponent,
    DynamicCompComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
