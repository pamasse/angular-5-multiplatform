import { Component, OnInit, AfterViewChecked } from '@angular/core';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
import { MarkdownService } from 'angular2-markdown';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit, AfterViewChecked {
  private fragment: string;
  public url: string;

  constructor(private _markdown: MarkdownService,
              private translateService: TranslateService,
              private route: ActivatedRoute) {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.url = `https://raw.githubusercontent.com/dotse/zonemaster-gui/master/docs/FAQ/gui-faq-${event.lang}.md`;
    });
  }

  ngOnInit() {
    this.url = `https://raw.githubusercontent.com/dotse/zonemaster-gui/master/docs/FAQ/gui-faq-${this.translateService.currentLang}.md`;
    this._markdown.renderer.link = (href: string, title: string, text: string) => {
      let out = '<a href="/faq' + href + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += '>' + text + '</a>';
      return out;
    };

    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });

  }

  ngAfterViewChecked(): void {
    try {
      document.querySelector('a[name="' + this.fragment + '"]').scrollIntoView();
    } catch (e) {}
  }
}
