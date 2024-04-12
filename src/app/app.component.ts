import { Component } from '@angular/core';
import { InputComponentComponent } from './components/input-component/input-component.component';
import { OddLengthWordsComponent } from './components/odd-length-words/odd-length-words.component';
import { EvenLengthWordsComponent } from './components/even-length-words/even-length-words.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponentComponent, OddLengthWordsComponent, EvenLengthWordsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  wordOdd = '';
  wordEven = '';
  oddWords: string[] = [];
  evenWords: string[] = [];

  onInput(word: string) {
    if (word.length % 2 == 0) {
      this.wordEven = word;
      this.wordOdd = '';
    } else {
      this.wordOdd = word;
      this.wordEven = '';
    }
  }

  onSubmit(word: string) {
    if (word.length % 2 == 0) {
      this.evenWords.push(word)
    } else {
      this.oddWords.push(word);
    }
  }
}
