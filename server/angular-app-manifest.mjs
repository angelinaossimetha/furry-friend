
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'index.html',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 27887, hash: '5c079ed4d801fbcf9a52d4bf5733a3af03b72ef97c6c02fe821824778d520a19', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17190, hash: '1040810fb4d7202a9a89dd3382c5e29da67838efff8a2019eec7ba2978c5843d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7JS7GIZR.css': {size: 238590, hash: 'BLck8M/le/E', text: () => import('./assets-chunks/styles-7JS7GIZR_css.mjs').then(m => m.default)}
  },
};
