import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animationdefault',
  templateUrl: './animationdefault.component.html',
  styleUrls: ['./animationdefault.component.css'],
  animations:[
    trigger('divState',[      //first  step trigger then state then transition
      state('normal',style({     // normal state
        'background-color':'red',
        transform:'translateX(0)' //normal position
      })),
      state('highlighted',style({     //desired state 
        'background-color':'blue',
        transform:'translateX(100px)'   /// el position elly 3ayzah yro7o
      })),
      transition('normal=> highlighted',animate(300)),
      transition('highlighted=> normal',animate(800))

    ])
  ]
})
export class AnimationdefaultComponent implements OnInit {


  state='normal'
  onAnimate(){
    this.state=='normal'? this.state='highlighted':this.state='normal'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
