import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListMenuComponent } from "../../components/list-menu/list-menu.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'main',
  standalone: true,
  imports: [RouterModule, ListMenuComponent, CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class MainComponent {

}
