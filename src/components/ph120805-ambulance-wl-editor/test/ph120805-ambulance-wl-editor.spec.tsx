import { newSpecPage } from '@stencil/core/testing';
import { Ph120805AmbulanceWlEditor } from '../ph120805-ambulance-wl-editor';

describe('ph120805-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [Ph120805AmbulanceWlEditor],
      html: `<ph120805-ambulance-wl-editor entry-id="@new"></ph120805-ambulance-wl-editor>`,
    });
    let items: any = await page.root.shadowRoot.querySelectorAll("md-filled-button");
    expect(items.length).toEqual(1);
    items = await page.root.shadowRoot.querySelectorAll("md-outlined-button");
    expect(items.length).toEqual(1);

    items = await page.root.shadowRoot.querySelectorAll("md-filled-tonal-button");
    expect(items.length).toEqual(1);
  });
});