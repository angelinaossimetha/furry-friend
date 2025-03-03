
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://angelinaossimetha.github.io/furry-friend/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 27928, hash: '7c5cfe875e5e1db45d536c8252b99f7a4028ec5c236297477240afdfee2dcc4a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17231, hash: '4102ffd48f02198582eab51d5e8e7bc2e8b09e1cd64b326ff924216785789090', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7JS7GIZR.css': {size: 238590, hash: 'BLck8M/le/E', text: () => import('./assets-chunks/styles-7JS7GIZR_css.mjs').then(m => m.default)}
  },
};
