/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.ts',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    '@/actions': '<rootDir>/src/redux/actions/index.ts',
    '@/middlewares': '<rootDir>/src/redux/middlewares/index.ts',
    '@/reducers': '<rootDir>/src/redux/reducers/index.ts',
    '@/selectors': '<rootDir>/src/selectors/index.ts',
    '@/hooks': '<rootDir>/src/hooks/index.ts',
    '@/context': '<rootDir>/src/context/index.ts',
    '@/components': '<rootDir>/src/components/index.ts',
    '@/shared/(.*)': '<rootDir>/src/_shared/$1',
    '@/components/(.*)$': '<rootDir>/src/_components/$1',
    '@/web3/(.*)$': '<rootDir>/src/web3/$1',
    '@/containers': '<rootDir>/src/containers/index.ts',
  },
}

module.exports = nextConfig
