import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configure-room-page',
  templateUrl: './configure-room-page.component.html',
  styleUrls: ['./configure-room-page.component.scss']
})
export class ConfigureRoomPageComponent implements OnInit {

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
     filesToUpload: Array<File> = [];
     urls = new Array<string>();

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
    changeFiles(event) {

        this.filesToUpload = event.target.files as Array<File>;
        this.urls = [];
        const files = event.target.files;
        if (files) {
          for (const file of files) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
              if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
                if (Number(e.total) > 2e+6) {
                  alert('Please make sure that you entered image size is less than 2MB');
                  this.filesToUpload = [];
                  return;
                } else {
                  this.urls.push(e.target.result);
                }
              } else {
                alert('Supported formats: .JPEG .JPG .PNG');
                this.filesToUpload = [];
                return;
              }

            };
                                    reader.readAsDataURL(file);


          }
        }

    }
}
