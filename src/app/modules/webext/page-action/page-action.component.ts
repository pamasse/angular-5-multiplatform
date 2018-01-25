import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-action',
  templateUrl: './page-action.component.html',
  styleUrls: ['./page-action.component.scss']
})
export class PageActionComponent implements OnInit {

  constructor() {
    console.log('Page-Action open');
  }

  ngOnInit() {
    const func = tabs => { ( chrome || browser ).runtime.sendMessage({
        id: 'get_info',
        tab: tabs[0],
        source: 'popup.js'
      }, response => {
        console.log('RESPONSE');
        console.log(response);
      });
    };

    browser.tabs.query({ active: true, currentWindow: true })
      .then(func)
      .catch(console.error);
  }

}
