import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';


@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css'],
})
export class DialogDemoComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  open(){
    let dRef = this.dialog.open(DialogExampleComponent, { data: { name: 'Bhavik'}});

    dRef.afterClosed().subscribe(
      (result)=>console.log(result),
    );
  }
}
