import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  name: string = '';
  email: string = '';
  street: string = '';
  city: string = '';
  state: string = '';

  handleChange: (e: string) => void = (e) => {
    console.log(e);
  };
  ngOnInit(): void {}
}
