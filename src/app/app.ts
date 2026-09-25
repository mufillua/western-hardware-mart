import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { WhatsappButton } from './components/whatsapp-button/whatsapp-button';

@Component({
  selector: 'whm-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, WhatsappButton],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
