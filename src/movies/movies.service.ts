import { Injectable } from '@nestjs/common';
import { Movie } from 'src/movies/entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === parseInt(id)); //+id 해도 넘버로 바꿔줌
  }

  deleteOne(id: string): boolean {
    this.movies.filter((movie) => movie.id !== +id);
    return true;
  }

  create(moviedata) {
    this.movies.push({
      id: this.movies.length + 1,
      ...moviedata,
    });
  }
}
