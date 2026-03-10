import { newSpecPage } from '@stencil/core/testing';
import { Ph120805AmbulanceWlApp } from '../ph120805-ambulance-wl-app';

describe('ph120805-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [Ph120805AmbulanceWlApp],
      html: `<ph120805-ambulance-wl-app base-path="/"></ph120805-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("ph120805-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [Ph120805AmbulanceWlApp],
      html: `<ph120805-ambulance-wl-app base-path="/ambulance-wl/"></ph120805-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("ph120805-ambulance-wl-list");
  });
});