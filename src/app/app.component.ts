import { Component } from '@angular/core';
import { NavigationService } from './core/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'portfolio-am';

  constructor(private readonly navigationService: NavigationService) {}

  public navigateToHome() {
    this.navigationService.home();
  }

  public navigateToAbout() {
    this.navigationService.about();
  }

  public navigateToPortfolio() {
    this.navigationService.portfolio();
  }

  public navigateToBlogs() {
    this.navigationService.blogs();
  }

  public navigateToContact() {
    this.navigationService.contact();
  }

  public navigateToEmpty() {
    this.navigationService.notFound();
  }
}
