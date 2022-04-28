import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-preview',
  templateUrl: './show-preview.component.html',
  styleUrls: ['./show-preview.component.scss']
})
export class ShowPreviewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ShowPreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  onClose() {
    this.dialogRef.close()
  }

  

}
