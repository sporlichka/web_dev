import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Album {
  id: number;
  title: string;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  private photosUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl);
  }

  getAlbumById(id: number): Observable<Album | undefined> {
    return this.http.get<Album[]>(this.albumsUrl).pipe(
      map((albums: Album[]) => albums.find((album: Album) => album.id === id))
    );
  }

  getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.photosUrl}/${albumId}/photos`);
  }
}
