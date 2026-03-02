import { newSpecPage } from '@stencil/core/testing';
import { Ph120805AmbulanceWlEditor } from '../ph120805-ambulance-wl-editor';

describe('ph120805-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Ph120805AmbulanceWlEditor],
      html: `<ph120805-ambulance-wl-editor></ph120805-ambulance-wl-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <ph120805-ambulance-wl-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ph120805-ambulance-wl-editor>
    `);
  });
});
