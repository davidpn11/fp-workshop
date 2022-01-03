export default {
  mount: {
    public: '/',
    src: '/dist',
    '../remote-data': '/@fpworkshop/remote-data',
  },
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  plugins: [
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-react-refresh',
    'snowpack-plugin-svgr',
    'snowpack-plugin-markdown',
  ],
  alias: {
    '../remote-data/': '@fpworkshop/remote-data',
  },
};
