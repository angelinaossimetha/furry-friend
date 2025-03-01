
export default {
  basePath: 'https://angelinaossimetha.github.io/furry-friend',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
