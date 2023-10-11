import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { Location } from 'src/app/types/location.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  results: Location[] = [];
  filterResults: Location[] = [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService) { }

  //ngOnInit e como se fosse UseEffet que e utilizado pelo React com o array de dependencia vazio
  ngOnInit(): void {
     this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    })
    this.unitService.getAllUnits().subscribe(data => {
        this.results = data.locations;
        this.filterResults = data.locations;
    });
   
  }

  onSubmit(): void {
    console.log(this.formGroup.value)
    if (!this.formGroup.value.showClosed) {
      this.filterResults = this.results.filter(location => location.opened === true )
    } else {
      this.filterResults = this.results;
    }
  }

  onClean(): void {
    this.formGroup.reset()
  }

  

}
