import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  resultLabel: string = ''
  encodedString: string = ''

  onClickResult() {
    var word = ["", "", ""]
    var cont = 0

    if (this.encodedString.length < 1 || this.encodedString.endsWith("0")) {
      alert('Please insert a valid string');
    } else {
      const text = [...this.encodedString];

      text.forEach(letter => {
        if (letter != "0") {
          word[cont] += letter
        }
        else if (word[cont].length != 0) {
          cont += 1
        }
      });

      this.resultLabel = `{"first_name": "${word[0]}", "last_name": "${word[1]}", "id": "${word[2]}"}`
    }
  }
}
