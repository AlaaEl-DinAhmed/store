// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'shell',
  remotes: [
    'landing',
    'products',
    'product-details',
    'cart',
    'checkout',
    'authentication',
  ],
};

module.exports = moduleFederationConfig;
