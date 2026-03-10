import { newSpecPage } from '@stencil/core/testing';
import { PhAmbulanceWlList } from '../../components/ph-ambulance-wl-list/ph-ambulance-wl-list';

describe('ph-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PhAmbulanceWlList],
      html: `<ph120805-ambulance-wl-list></ph120805-ambulance-wl-list>`,
    });
    
    const wlList = page.rootInstance as PhAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
