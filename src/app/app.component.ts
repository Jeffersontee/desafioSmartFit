import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from './types/location.interface';
import { GetUnitsService } from './services/get-units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  showList = new BehaviorSubject(false);
  unitsList: Location[] = [];

  constructor(private unitService: GetUnitsService) { }

  onSubmit() {
    console.log("chegou no app");
    this.unitsList = this.unitService.getFilteredUnits();
    console.log("UNITSLIST", this.unitsList);
    this.showList.next(true);
  }

}


