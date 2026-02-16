import { newSpecPage } from '@stencil/core/testing';
import { PhAmbulanceWlList } from '../ph-ambulance-wl-list';

describe('ph-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PhAmbulanceWlList],
      html: `<ph-ambulance-wl-list></ph-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <ph-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ph-ambulance-wl-list>
    `);
  });
});
