import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-component',
  standalone: true,
  imports: [],
  templateUrl: './input-component.component.html',
  styleUrl: './input-component.component.css'
})
export class InputComponentComponent {
  @Output() wordTyped = new EventEmitter<string>();
  @Output() wordSubmited = new EventEmitter<string>();
  currentWord: string = '';

  onUserInput(event: Event) {
    this.currentWord = (event.target as HTMLInputElement).value
    this.wordTyped.emit(this.currentWord)
  }

  onClick() {
    this.wordSubmited.emit(this.currentWord);
  }
}
