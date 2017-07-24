/**
 * 
 */

import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http'
import {TabPanelControl} from './component/tabView/tabPanel.control'
import {TabViewControl} from './component/tabView/tabView.control'

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
        TabPanelControl,
        TabViewControl],
    exports: [
        TabPanelControl,
        TabViewControl,
        FormsModule,
        CommonModule
    ],
})

export class SharedModule {

}