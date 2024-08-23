import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthUser } from 'src/Data/interfaces/IAuthUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private authStatus = new BehaviorSubject<boolean>(this.isAuthenticated() );

  private apiUrl = environment.apiUrl+"/auth"; 
  private expiresInMins=environment.expiresInMins;

  constructor(private http: HttpClient) 
  {  }

  login(email: string, password: string): Observable<boolean> 
  {
    return this.http.post<IAuthUser>(`${this.apiUrl}/login`, { username:email, password:password , expiresInMins:this.expiresInMins}).pipe(
      map(authUser => {
        console.log("All DDDDDDDDDDDDDDDDDdddata");
        this.setUserData(authUser);
        return true;
      }),
      catchError(error => {
        // Handle login error
        console.error('Login error', error);
        return of(false);
      })
    );
  }
  // to get the current user data based on his stored Token 
  getCurrentUser(): Observable<any> {
    const token = this.getToken();

    if (!token) 
    {
      console.error('No token found');
      return of(null) ; 
    }

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`,});

    return this.http.get<IAuthUser>(`${this.apiUrl}/me`, { headers })
                    .pipe(
                          map(user => {
                            this.setUserData(user);
                            return user; 
                          }),
                          catchError(error => {
                            console.error('Error fetching current user', error);
                            return of(null); 
                          })
                         );
  }

  // to increese the duration that the user take using our site 
  refreshToken(): Observable<boolean> {
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
      console.error('No refresh token found');
      return of(false);
    }

    return this.http.post<IAuthUser>(`${this.apiUrl}/refresh`, { refreshToken: refreshToken, expiresInMins: this.expiresInMins,})
                    .pipe(
                            map(response => {
                              if (response && response.token) {
                                localStorage.setItem("token", response.token);
                                localStorage.setItem("refreshToken", response.refreshToken);
                                return true;
                              }
                              return false;
                            }),
                            catchError(error => {
                              console.error('Error refreshing token', error);
                              return of(false);
                            })
                        );
  }

  getToken() {
    return localStorage.getItem("token");
  }
  
  getUserId():string|null{
    return localStorage.getItem("id");
  }

  setUserData(authUser: IAuthUser) {
    localStorage.setItem("id", authUser.id.toString());
    localStorage.setItem("email", authUser.email);
    localStorage.setItem("firstName", authUser.firstName);
    localStorage.setItem("lastName", authUser.lastName);
    localStorage.setItem("gender", authUser.gender);
    localStorage.setItem("image", authUser.image);
    localStorage.setItem("token", authUser.token);
    localStorage.setItem("refreshToken", authUser.refreshToken);
    this.authStatus.next(true);
  }
  RemoveUserData(authUser: IAuthUser) {
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("gender");
    localStorage.removeItem("image");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  }
  
  isAuthenticated() {
    return !!this.getToken();
  }

  getAuthStatus(): Observable<boolean> {
    return this.authStatus.asObservable();
  }


  logout() {
    localStorage.removeItem("token");
    this.authStatus.next(false);
  }

}
