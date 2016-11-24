import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ArtriumComponent } from './index';

@NgModule({
    declarations: [
        ArtriumComponent
    ],
    imports: [
        FormsModule,
        BrowserModule
    ],
    exports: [
        ArtriumComponent
    ]
})
export class ArtriumModule {
}
