import { Component, NgZone } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'hse-api-error-dialog',
  templateUrl: 'api-error-dialog.component.html'
})
export class ApiErrorDialogComponent {
  constructor(public dialogRef: MatDialogRef<ApiErrorDialogComponent>, private ngZone: NgZone) {}

  retryClicked() {
    // need to run inside ngZone due to bug
    // https://stackoverflow.com/questions/55146484/matdialog-dialog-from-angular-material-is-not-closing
    this.ngZone.run(() => {
      this.dialogRef.close();
    });
  }
}
