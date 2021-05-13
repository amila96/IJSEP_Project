import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-manage-reservation',
  templateUrl: './manage-reservation.component.html',
  styleUrls: ['./manage-reservation.component.scss']
})
export class ManageReservationComponent implements OnInit {

  constructor() { }

  roomTypeArray: string[]=[
    'Single',
    'Double',
    'Triple',
    'King',
    'Queen',
    'Twin'
  ];
  selectedFacilities='';
  selectedFacilitiesError = false;

  ngOnInit(): void {
  }

  facilitiesList:string[]=[];
  addToList(){
    this.selectedFacilitiesError = false;
       if (this.selectedFacilities.trim().length > 0) {

       if(!this.isExists(this.selectedFacilities)){
          this.facilitiesList.push(this.selectedFacilities.trim());

       }else{
        alert('This record is already exist');
                  this.selectedFacilities='';
                  return;
       }


       } else {
         alert('this value is required!');
         this.selectedFacilitiesError = true;
       }
  }

  isExists(data: string):boolean{
    for(const temp of this.facilitiesList){
      if(temp==data){
        return true;
      }
    }
    return false;
  }
  removeFromList(num:number){
    if(confirm('Are you sure?')){
      this.facilitiesList.splice(num,1);
    }else{
    }
  }
}
