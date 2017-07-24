/**
 *
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tabPanel',
  templateUrl: 'tabPanel.control.html'
})

export class TabPanelControl {
  @Input() header: string = '';
  @Input() select: boolean = false;
  @Input() hidden: boolean = true;
  @Output() changedTab: EventEmitter<boolean> = new EventEmitter<boolean>();
  active: boolean = false;
}
