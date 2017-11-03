import { by, browser, element } from 'protractor';

import { Utils } from './pages/app.utils';

describe('Zonemaster test GR06 - [The simple view should support an advanced view expanding when the checkbox is enabled]', () => {
  const utils = new Utils();
  beforeAll(() => {
    utils.goToHome();
  });

  it('should have [IPv4 checkbox] NOT visible', () => {
    expect(element(by.css('label[for="protocol_ipv4"]')).isPresent()).toBe(false);
  });
  it('should have [IPv6 checkbox] NOT visible', () => {
    expect(element(by.css('label[for="protocol_ipv6"]')).isPresent()).toBe(false);
    element(by.css('.switch')).click();
  });
  it('should have [IPv4 checkbox] visible', () => {
    expect(element(by.css('label[for="protocol_ipv4"]')).isPresent()).toBe(true);
  });
  it('should have [IPv6 checkbox] visible', () => {
    expect(element(by.css('label[for="protocol_ipv6"]')).isPresent()).toBe(true);
  });
});
