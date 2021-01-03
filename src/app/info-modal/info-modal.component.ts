import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MessageType, InfoModalData } from '../Constant/info-modal-contant';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit{

  color: string;
  icon: string;

  constructor(
    private snackBar: MatSnackBarRef<InfoModalComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: InfoModalData
  ) { }


  ngOnInit() {

    switch(this.data.actionType){
      case MessageType.Danger:
        this.icon= 'error_outline';
        this.color = 'color: red';
        break;

      case MessageType.Success:
        this.icon= 'check_circle_outline';
        this.color = 'color: green';
        break;

      case MessageType.Info:
        this.icon= 'error_outline';
        this.color = 'color: blue';
        break;

      case MessageType.Warning:
        this.icon= 'error_outline';
        this.color = 'color: yellow';
        break;

      default:
        this.icon= 'check_circle_outline';
        this.color = 'color: green';
        break;

    }

  }
}
