import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/enviornment';

@Injectable({
  providedIn: 'root',
})
export class AiService {
  private apiUrl = 'https://api.groq.com/openai/v1/chat/completions';

  constructor(private http: HttpClient) {}

  askQuestion(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${environment.geminiAPIKey}`,
      'Content-Type': 'application/json',
    });

    const body = {
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: prompt }],
    };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
