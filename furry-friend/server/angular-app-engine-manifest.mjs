
export default {
  basePath: 'https://github.com/angelinaossimetha/furry-friend.git',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
