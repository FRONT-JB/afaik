---
slug: commit-lint
title: Conventional Commits 적용하기
authors: jb
description: Husky와 git hooks를 활용한 커밋 메시지 관리하기
keywords: [husky, commit lint, conventional commits]
tags: [husky, lint]
---

## [Conventional Commits](https://www.conventionalcommits.org/ko/v1.0.0/)

> **커밋 메세지에 사용자와 기계 모두가 이해할 수 있는 의미를 부여하기 위한 스펙**

---

**[Husky](https://github.com/typicode/husky)**와 **[git hooks](https://git-scm.com/book/ko/v2/Git%EB%A7%9E%EC%B6%A4-Git-Hooks)**를 사용하여 커밋 메시지 관리하기

```bash
# npm을 사용하는 경우
npm install husky --save-dev
npx husky install

# yarn을 사용하는 경우
yarn add husky --dev
yarn husky install
```

```bash
# npm을 사용하는 경우
npm install --dev @commitlint/config-conventional @commitlint/cli

# yarn을 사용하는 경우
yarn add --dev @commitlint/config-conventional @commitlint/cli
```

```bash
#.husky 디렉토리 밑에 commit-msg라는 파일을 만들고 아래와 같이 작성

#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# npm을 사용하는 경우
npm commitlint --edit $1

# yarn을 사용하는 경우
yarn commitlint --edit $1

```

```js
// 프로젝트 루트 디렉토리에 commitlint.config.js 파일을 만들고 아래와 같이 작성해 줍니다.
module.exports = { extends: ["@commitlint/config-conventional"] };
```

:::tip 커스텀 옵션
[커스텀이 가능한 다양한 옵션](https://github.com/somedaycode/husky_commitlint_test#default)

```js
// @commitlint/config-conventional 기본 설정
module.exports = {
  parserPreset: "conventional-changelog-conventionalcommits",
  rules: {
    "body-leading-blank": [1, "always"],
    "body-max-line-length": [2, "always", 100],
    "footer-leading-blank": [1, "always"],
    "footer-max-line-length": [2, "always", 100],
    "header-max-length": [2, "always", 100],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
  },
};
```

:::

## References

- [Conventional Commits](https://www.conventionalcommits.org/ko/v1.0.0/)
- [효율적인 커밋 메세지 관리를 위한 Conventional Commits 적용하기](https://blog.flynnpark.dev/13)
- [husky와 commitlint를 사용하여 commit 규칙을 지키며 협업하기](https://somedaycode.tistory.com/13)
