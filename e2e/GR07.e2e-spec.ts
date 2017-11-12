import { by, browser, element } from 'protractor';

import { Utils } from './pages/app.utils';

describe('Zonemaster test GR07 - [The advanced view should support the possibility of enabling or disabling IPv4 or IPv6]', () => {
  const utils = new Utils();
  beforeAll(() => {
    utils.goToHome();
    utils.setLang('en');
    utils.activeAdvancedOptions();
  });

  it('should have [IPv4 checkbox] visible and are enable', () => {
    expect(element(by.css('#protocol_ipv4')).isPresent()).toBe(true);
    expect(element(by.css('#protocol_ipv4')).isSelected()).toBe(true);
  });
  it('should have [IPv4 checkbox] possible to disable', () => {
    element(by.css('#protocol_ipv4')).click();
    expect(element(by.css('#protocol_ipv4')).isSelected()).toBe(false);
  });
  it('should have [IPv4 checkbox] possible to enable', () => {
    element(by.css('#protocol_ipv4')).click();
    expect(element(by.css('#protocol_ipv4')).isSelected()).toBe(true);
  });

  it('should have [IPv6 checkbox] visible and are enable', () => {
    expect(element(by.css('#protocol_ipv6')).isPresent()).toBe(true);
    expect(element(by.css('#protocol_ipv6')).isSelected()).toBe(true);
  });
  it('should have [IPv6 checkbox] possible to disable', () => {
    element(by.css('#protocol_ipv6')).click();
    expect(element(by.css('#protocol_ipv6')).isSelected()).toBe(false);
  });
  it('should have [IPv6 checkbox] possible to enable', () => {
    element(by.css('#protocol_ipv6')).click();
    expect(element(by.css('#protocol_ipv6')).isSelected()).toBe(true);
  });

  it('should show alert when both are disabled', () => {
    element(by.css('#protocol_ipv4')).click();
    element(by.css('#protocol_ipv6')).click();
    expect(element(by.css('.alert.alert-danger')).isPresent()).toBe(true);
    expect(element(by.css('.alert.alert-danger')).getText())
      .toEqual('At least one protocol (IPv4 or IPv6) is required in advanced options!');
  });
});
