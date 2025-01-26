---
sidebar_position: 1
---

# Nextjs

## Nextjs15를 사용하면서 만난 문제들

### Slots

- default.tsx 를 사용하지 않으면 렌더링되지 않아 문제가 발생했다.
  - default.tsx를 사용하지 않으면 슬롯이 렌더링 되지 않음
  - Next.js가 빌드 에러를 발생시킬 수 있음
  - Slots을 적용한 라우팅 시스템이 정상적으로 동작하려면 default.tsx를 사용해야 함

### Server Actions

- 서버액션 사용시 async 함수로 작성하지 않아 에러가 발생했다.
  - 모든 서버액션은 Promise를 반환해야 한다.
  - 모든 서버액션은 비동기적으로 처리되어야 한다.
