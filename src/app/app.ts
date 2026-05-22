import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AiChat } from './component/ai-chat/ai-chat';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AiChat, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('quote-ai');
}
