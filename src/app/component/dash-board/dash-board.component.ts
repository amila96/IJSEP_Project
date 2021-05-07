import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
  animations:[
      trigger( 'sliderLeft',[
        transition('void=>*',[
        style( {transform:'translateX(-100%)'}),
        animate('0.5s')
        ]),
        transition('*=>void',[
          animate( '0.5s',style({ transform:'translateX(-100%)'}))
        ])
      ])
     ]
})
export class DashBoardComponent implements OnInit {

  leftSideVisibleState= false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSlide(){

    //leftSideVisibleState is equal to not leftSideVisibleState
    this.leftSideVisibleState=!this.leftSideVisibleState;
  }

}
