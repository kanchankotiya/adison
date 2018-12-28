import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule, MatButtonModule, MatIconModule, MatToolbarModule, MatListModule, 
    MatBottomSheetModule, MatAutocompleteModule, MatSelectModule, MatStepperModule, MatInputModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseCountdownModule } from '@fuse/components/countdown/countdown.module';
import { FuseMaterialColorPickerModule } from '@fuse/components';
import { FooterComponent } from 'app/layout/components/footer/footer.component';
import { BottomSheetOverviewExample, BottomSheetOverviewExampleSheet, BottomSheetOverviewExampleWrite, BottomSheetOverviewExampleSheetWriteUs } from 'assets/angular-material-examples/bottom-sheet-overview/bottom-sheet-overview-example';
import { FormFieldAppearanceExample } from 'assets/angular-material-examples/form-field-appearance/form-field-appearance-example';


const routes: Routes = [
    
    {
        path     : 'bottom-sheet-overview-example',
        component: BottomSheetOverviewExample
    },
    {
        path     : 'bottom-sheet-overview-example',
        component: BottomSheetOverviewExampleSheet 
    },
    {
        path     : 'bottom-sheet-overview-example',
        component: BottomSheetOverviewExampleWrite 
    },
    {
        path     : 'bottom-sheet-overview-example',
        component: BottomSheetOverviewExampleSheetWriteUs 
    },
    {
        path     : 'form-field-appearance-example',
        component: FormFieldAppearanceExample 
    }  
    
    
];

@NgModule({
    declarations: [
        FooterComponent,        
        BottomSheetOverviewExample, 
        BottomSheetOverviewExampleSheet,
        BottomSheetOverviewExampleWrite, BottomSheetOverviewExampleSheetWriteUs, FormFieldAppearanceExample
        
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        FuseSharedModule,
        MatFormFieldModule,
        MatListModule,
        MatBottomSheetModule,
        FuseCountdownModule,
        FuseMaterialColorPickerModule,
        MatAutocompleteModule, MatSelectModule, MatStepperModule,
        MatInputModule
        
        
    ],
    exports   : [
        FooterComponent
    ]
})
export class FooterModule
{
    
}
