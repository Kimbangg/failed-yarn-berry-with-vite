const { pnpPlugin } = require('@yarnpkg/esbuild-plugin-pnp');

require('esbuild')
  .build({
    entryPoints: ['public/index.html'],
    bundle: true,
    outfile: 'out.js',
    plugins: [pnpPlugin()],
  })
  .catch(() => process.exit(1));
