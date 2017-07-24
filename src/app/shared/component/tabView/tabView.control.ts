/**
 *
 */
import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';

import { TabPanelControl } from './tabPanel.control';

@Component({
  selector: 'tabView',
  templateUrl: 'tabView.control.html',
  styleUrls: ['./tabView.scss']
})

export class TabViewControl implements AfterContentInit {
  @Output() selectedTab: EventEmitter<number> = new EventEmitter<number>();
  @Input() selectIndex: number;
  @ContentChildren(TabPanelControl) tabs: QueryList<TabPanelControl>;
  private tabPanels: TabPanelControl[] = [];

  ngAfterContentInit() {
    this.tabPanels = this.tabs.toArray().filter(x => x.hidden);
    if (this.tabPanels.length) {
      const selectedTab = this.tabPanels.find(x => x.select || this.selectIndex === (this.tabPanels.findIndex(y => y === x)));
      if (selectedTab) {
        selectedTab.active = true;
        selectedTab.changedTab.next(true);
      } else {
        this.tabPanels[0].active = true;
        this.tabPanels[0].changedTab.next(true);
      }
    }
  }
  selecTabPanel(tabPanel: TabPanelControl) {
    if (!tabPanel.active) {
      this.tabPanels.forEach(tab => {
        tab.active = false;
      });
      tabPanel.active = true;
      tabPanel.changedTab.next(true);
      this.selectedTab.next(this.tabPanels.findIndex(x => x === tabPanel));
    }
  }
}
