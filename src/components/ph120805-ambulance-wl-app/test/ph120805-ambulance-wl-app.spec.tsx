import { newSpecPage } from '@stencil/core/testing';
import { Ph120805AmbulanceWlApp } from '../ph120805-ambulance-wl-app';

describe('ph120805-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Ph120805AmbulanceWlApp],
      html: `<ph120805-ambulance-wl-app></ph120805-ambulance-wl-app>`,
    });
    expect(page.root).toEqualHtml(`
      <ph120805-ambulance-wl-app>
        <mock:shadow-root>
          <ph120805-ambulance-wl-list></ph120805-ambulance-wl-list>
        </mock:shadow-root>
      </ph120805-ambulance-wl-app>
    `);
  });
});
