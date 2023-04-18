## 创建包含 `eslint` 的模板项目

```bash
? Pick a linter / formatter config:
  ESLint with error prevention only
  ESLint + Airbnb config
❯ ESLint + Standard config
  ESLint + Prettier

? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to
invert selection, and <enter> to proceed)
❯◉ Lint on save
 ◯ Lint and fix on commit
```

## eslint 规则

- [no-console](https://www.eslint.com.cn/docs/rules/)
- [comma-dangle](https://www.eslint.com.cn/docs/rules/comma-dangle)

下载安装扩展

- ESLint
- Prettier - Code formatter
- Vetur

`"prettier.configPath": "./prettierrc"` 没找到老师的这份文件

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "eslint.alwaysShowStatus": true,
  "prettier.trailingComma": "none",
  "prettier.semi": false,
  "prettier.printWidth": 300,
  "prettier.singleQuote": true,
  "prettier.arrowParens": "avoid",
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.ignoreProjectWarning": true,
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": false
    },
    "prettier": {
      "trailingComma": "none",
      "semi": false,
      "printWidth": 300,
      "singleQuote": true,
      "arrowParens": "avoid"
    }
  }
}
```
