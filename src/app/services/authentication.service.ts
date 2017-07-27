import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('authentication'));
        this.token = currentUser && currentUser.token;
    }

    login(email: string, password: string): Observable<boolean> {

        const token = { email: email, password: password };
        return this.http.post('/api/authenticate', token)
            .map((response: Response) => {

                let jwt = !!response.json() ? response.json().data : null;

                if (jwt != null) {
                    this.token = jwt;
                    localStorage.setItem('authentication', JSON.stringify({
                        email: email,
                        token: this.token
                    }));
                    return true;
                } else {
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('authentication');
    }
}
