
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/angelinaossimetha/furry-friend.git',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 27932, hash: '2e265fdba913bb3f40392e231d7edc933321c6ead845053c28e2c4304866479c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17235, hash: '64a6d0e57f43e2ee8dca0cec408f557be1c36b876eb2e7b877cb95a859233b1f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7JS7GIZR.css': {size: 238590, hash: 'BLck8M/le/E', text: () => import('./assets-chunks/styles-7JS7GIZR_css.mjs').then(m => m.default)}
  },
};
