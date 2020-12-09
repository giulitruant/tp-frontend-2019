import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageType } from '../Constant/info-modal-contant';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent{
  
  action: string;
  color: string = 'mat-success';

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, actionType: MessageType){    

    switch(actionType){

      case MessageType.Success:{        
        this.color = 'success';
        break;
      }

      case MessageType.Info:{
        this.color = 'primary';
        break;
      }

      case MessageType.Warning:{
        this.color = 'warning';
        break;
      }

      case MessageType.Danger:{
        this.color = 'danger';
        break;
      }
      
      default:{
        break;
      }
    }

    this._snackBar.open(message, this.action, {
      duration:2000,
      panelClass: [this.color]
    });
  }

}
