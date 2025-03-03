
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/furry-friend/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 27913, hash: '1063413d39cbd8bb04f2e3a0db0b1d35327831b9ffa1621352a75dc820b5cbce', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17216, hash: 'f29cca2f7ed67f0b290c37d81f6f03d4b23163a40ec0a619cf25ec822df3f385', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7JS7GIZR.css': {size: 238590, hash: 'BLck8M/le/E', text: () => import('./assets-chunks/styles-7JS7GIZR_css.mjs').then(m => m.default)}
  },
};
