import { Routes } from '@angular/router';
import { Welcome } from './component/welcome/welcome';
import { Quote } from './component/quote/quote';
import { AiChat } from './component/ai-chat/ai-chat';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: Welcome },
  { path: 'quotes', component: Quote },
  { path: 'ai-assistent', component: AiChat },
  { path: '*', redirectTo: 'welcome' },
];
