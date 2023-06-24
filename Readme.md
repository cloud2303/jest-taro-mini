# Taro 测试
react-testing-library jest js-dom
taro的生命周期函数无法使用
## 1.安装
```
npm install -D @testing-library/jest-dom @testing-library/react  jest-environment-jsdom jest
```

## 修改jest.config.js

```
module.exports = {
  "testEnvironment": "jsdom",
globals: {
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
    "@tarojs/components": '@tarojs/components/lib/react',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@taro)', '^.+\\.(css|sass|scss|less)$'],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  //每次测试前自动引入方便使用
  setupFilesAfterEnv:['<rootDir>/test/setup'],
}
```

## 3.创建setup.js(每次测试前自动引入方便使用)
```
import '@testing-library/jest-dom/extend-expect'
```