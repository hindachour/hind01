import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],   
 // Add FormsModule to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  message='';
  enteredText = '';
  listItems: { text: string; color: string }[] = [];
  colors = ['green', 'blue', 'red'];
  random = false;
  buttonLabel='Random';
  sortingMode = 'ascending'; 
  sortingModeLabel = 'Ascending';
  showGreeting() {
    console.log('Bonjour!');
  }
  extractText() {
    const newItem = this.enteredText;
    const randomColor = this.random ? this.colors[Math.floor(Math.random() * this.colors.length)] : this.getColor(this.listItems.length);
    this.listItems.push({ text: newItem, color: randomColor });
    this.sortList();
  }
  toggleSortingMode() {
    this.sortingMode = this.sortingMode === 'ascending' ? 'descending' : (this.sortingMode === 'descending' ? 'random' : 'ascending');
    this.sortingModeLabel = this.sortingMode;
    this.sortList();
  }

  sortList() {
    this.listItems.sort((a, b) => {
      if (this.sortingMode === 'ascending') {
        return a.text.localeCompare(b.text);
      } else if (this.sortingMode === 'descending') {
        return b.text.localeCompare(a.text);
      } else {
        // Randomize the order
        return Math.random() - 0.5;
      }
    });
  }
  deleteLastItem() {
    if (this.listItems.length > 0) {
      this.listItems.pop();
    }
  }
  toggleRandomColoring() {
    this.random = !this.random;
    this.buttonLabel = this.random ? 'Cycle' : 'Random';
  }
  getColor(index: number): string 
  {
    if (this.random && index >= this.listItems.length -1)
    {return this.colors[Math.floor(Math.random() * this.colors.length)];}
    else
    {return this.colors[index % this.colors.length];}
  }
}



