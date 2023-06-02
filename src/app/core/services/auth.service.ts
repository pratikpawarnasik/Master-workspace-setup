import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  login(username: string, password: string) {
    const url = 'https://dummyjson.com/auth/login';
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password
      })
    };

    return fetch(url, requestOptions)
      .then((response) => response.json())
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}
