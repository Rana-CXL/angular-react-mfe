import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import('react_mfe/ReactComponent').then((module) => {
//   const ReactComponent = module.MyComponent;
//   // Use the MyComponent React component within your Angular template
// });
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shell';
}
