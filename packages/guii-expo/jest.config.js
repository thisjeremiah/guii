module.exports = {
  preset: 'react-native',
  // testPathIgnorePatterns: ['/node_modules/', '../../node_modules/'],
  // modulePathIgnorePatterns: [
  // '<rootDir>/node_modules/',
  // '<rootDir>/../../node_modules/',
  // ],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/../../node_modules/babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|/src/.*\\.(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'ios.ts',
    'ios.tsx',
    'android.ts',
    'android.tsx',
  ],
  // moduleDirectories: ['node_modules', '../../node_modules'],
  // verbose: true,
}
