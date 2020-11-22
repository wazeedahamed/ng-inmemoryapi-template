import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../__interface/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }
  private api: string = environment.url.api;

  getUsers = (): Observable<IUser[]> => this.http.get<IUser[]>(`${this.api}/users`);

  getUserById = (id: number): Observable<IUser> => this.http.get<IUser>(`${this.api}/users/${id}`);

  saveUser = (user: IUser) => (
    !user.id ?
    this.http.post<IUser>(`${environment.url.api}/users`, user) :
    this.http.put<IUser>(`${environment.url.api}/users/${user.id}`, user)
  )

  deleteUser = (id: number) => this.http.delete<boolean>(`${this.api}/users/${id}`)

}
