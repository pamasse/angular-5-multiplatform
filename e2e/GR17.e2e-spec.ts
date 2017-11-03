import { by, browser, element } from 'protractor';

import { Utils } from './pages/app.utils';

describe('Zonemaster test GR17 - [All buttons should be clickable in latest version of different browsers]', () => {
  const utils = new Utils();
  beforeAll(() => {
    utils.goToHome();
    element(by.css('.fa-play-circle-o')).click();
  });

  it('should display error message', () => {
    expect(element(by.css('.alert.alert-danger')).isPresent()).toBe(true);
  });
  it('should display error message', () => {
    expect(browser.protractorImageComparison.checkScreen('domain.error_submit_without_domain')).toBeLessThan(1);
  });
  it('should remove error message after 5secs', () => {
    browser.sleep(10000).then(
      () => {
        expect(element(by.css('.alert.alert-danger')).isPresent()).toBe(false);
      }
    );
  });
});
