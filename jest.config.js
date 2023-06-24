module.exports = {
  "testEnvironment": "jsdom",
globals: {
  // window: true,
  DEPRECATED_ADAPTER_COMPONENT: false,
  ENABLE_INNER_HTML: true,
  ENABLE_ADJACENT_HTML: true,
  ENABLE_SIZE_APIS: true,
  ENABLE_TEMPLATE_CONTENT: true,
  ENABLE_CLONE_NODE: true,
  ENABLE_CONTAINS: true,
  ENABLE_MUTATION_OBSERVER: true,
},
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
        '@tarojs/taro': '@tarojs/taro-h5',
    "@tarojs/components": '@tarojs/components/lib/react',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@taro)', '^.+\\.(css|sass|scss|less)$'],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
   //每次测试前自动引入方便使用
  setupFilesAfterEnv:['<rootDir>/test/setup'],

}