import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ControlErrorComponent } from './components/control-error/control-error.component';


@NgModule({
    declarations: [
        ControlErrorComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ControlErrorComponent,
    ]
})
export class SharedModule { }