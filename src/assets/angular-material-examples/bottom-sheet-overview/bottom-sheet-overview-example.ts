import {Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';




/**
 * @title Bottom Sheet Overview
 */
@Component({
  selector: 'bottom-sheet-overview-example',
  templateUrl: 'bottom-sheet-overview-example.html',
  styleUrls: ['bottom-sheet-overview-example.css'],
})
export class BottomSheetOverviewExample{

  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  } 

  
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-write',
  templateUrl: 'bottom-sheet-overview-example-write.html',
  styleUrls: ['bottom-sheet-overview-example.css'],
})
export class BottomSheetOverviewExampleWrite {
  constructor(private bottomSheet: MatBottomSheet) {}
 
  openBottomSheetWriteUs(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheetWriteUs);
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet-write-us',
  templateUrl: 'bottom-sheet-overview-example-sheet-write-us.html',
})
export class BottomSheetOverviewExampleSheetWriteUs {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheetWriteUs>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}






