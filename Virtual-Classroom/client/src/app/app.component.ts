import { Component } from "@angular/core";
import { AuthenticationService } from "./authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "Classroom";
  constructor(public auth: AuthenticationService) {}
}
