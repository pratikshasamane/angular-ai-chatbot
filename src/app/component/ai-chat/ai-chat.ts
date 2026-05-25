import { ChangeDetectorRef, Component } from '@angular/core';
import { AiService } from '../../services/ai-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { error } from 'console';

interface ChatMessages {
  role: 'user' | 'ai';
  content: string;
}
@Component({
  selector: 'app-ai-chat',
  imports: [FormsModule, CommonModule],
  templateUrl: './ai-chat.html',
  styleUrl: './ai-chat.css',
})
export class AiChat {
  userQuestion: string = '';
  aiResponse$: Observable<string> | null = null;
  isLoading: boolean = false;
  chatHistory: ChatMessages[] = [];
  constructor(
    private aiservice: AiService,
    private cdr: ChangeDetectorRef,
  ) {}
  askAI() {
    this.isLoading = true;
    this.chatHistory = [
      ...this.chatHistory,
      {
        role: 'user',
        content: this.userQuestion,
      },
    ];
    // this.aiResponse$ = this.aiservice.askQuestion(this.userQuestion).pipe(
    //   map((data) => {
    //     this.userQuestion = '';
    //     this.isLoading = false;
    //     console.log(data, 'data is gere');
    //     this.chatHistory.push({
    //       role: 'ai',
    //       content: data.choices[0].message.content,
    //     });
    //     return data.choices[0].message.content;
    //   }),
    //   finalize(() => {
    //     this.isLoading = false;
    //   }),
    // );

    this.aiservice.askQuestion(this.userQuestion).subscribe({
      next: (data) => {
        // this.aiResponse = data.choices[0].message.content;
        this.userQuestion = '';

        this.chatHistory = [
          ...this.chatHistory,
          {
            role: 'ai',
            content: data.choices[0].message.content,
          },
        ];
        this.cdr.detectChanges();
        this.isLoading = false;
      },
      error: (err) => {
        console.log('Full error:', JSON.stringify(err.error));
        // this.aiResponse = 'Something went wrong. Please try again.';
        this.chatHistory = [
          ...this.chatHistory,
          {
            role: 'ai',
            content: 'Something went wrong. Please try again.',
          },
        ];
        this.isLoading = false;
      },
    });
  }

  clearChat() {
    this.chatHistory = [];
  }
}
