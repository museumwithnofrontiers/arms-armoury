import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'armsArmoury',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Arms and Armoury',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: 'ed60638d-d98c-52c9-b631-d363eb97fb51',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: 'aa69e40a-8b6f-5533-b199-6d9e6bc16fba',
    dynasty: {
      item: '9759fb2e-169a-5a39-8d80-11289577854b',
      name: 'Other Dynasties',
    },
    timeline: {
      code: 'at',
      id: 'aut',
      country: 'Austria',
    },
    partner: {
      id: 'b43ae2c6-2060-5819-bd1c-dd9ca66b9f11',
      name: 'Los Angeles County Museum of Art (LACMA)',
      city: 'Los Angeles',
      country: 'United States of America',
      objects: 2,
    },
  },
})
