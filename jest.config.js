module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', { rootMode: 'upward' }],
    '^.+\\.vue$': 'vue-jest'
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  },
}