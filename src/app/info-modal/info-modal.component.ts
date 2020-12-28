import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MessageType, SingleMessage } from '../Constant/info-modal-contant';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit{
  
  action: string;
  color: string = 'mat-success';  
  messages: SingleMessage;

  constructor(private snackBarRef: MatSnackBarRef<InfoModalComponent>,
    @Inject(MAT_SNACK_BAR_DATA) private data: { messages: SingleMessage }) {
  }

    ngOnInit(){

    // switch(this.data.messages.Type){

    //   case MessageType.Success:{        
    //     this.color = 'success';
    //     break;
    //   }

    //   case MessageType.Info:{
    //     this.color = 'primary';
    //     break;
    //   }

    //   case MessageType.Warning:{
    //     this.color = 'warning';
    //     break;
    //   }

    //   case MessageType.Danger:{
    //     this.color = 'danger';
    //     break;
    //   }
      
    //   default:{
    //     break;
    //   }
    // }

    

    // this.snackBarRef._open(message, this.action, {
    //   duration:2000,
    //   panelClass: [this.color]
    // });
  }

  dismiss() {
    this.snackBarRef.dismiss();
  }

}
