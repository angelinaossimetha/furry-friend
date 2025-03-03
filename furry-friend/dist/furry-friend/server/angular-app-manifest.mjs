
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/furry-friend/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 27913, hash: 'ccc65c93b857a308794b775ea671a691685d8fb162e7cb9da88d53dc7ba6b161', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17216, hash: 'cc87840c2994dc398283b9d72d008b94f2d5918ca1f233bda01075ee14abb569', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7JS7GIZR.css': {size: 238590, hash: 'BLck8M/le/E', text: () => import('./assets-chunks/styles-7JS7GIZR_css.mjs').then(m => m.default)}
  },
};
