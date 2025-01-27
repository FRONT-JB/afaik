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

### Client Component

- Client Component에서 Server Component를 직접 import하여 자식 컴포넌트로 사용할 수 없다.

  - Client Component는 Server Component를 props로 전달받아 사용할 수 있음
  - 이를 "Server Component를 Client Component로 끌어올리기(lifting up)" 패턴이라고 함
  - 예시:

    ```jsx
    // ✅ 올바른 사용법
    // 부모 Server Component
    function Parent() {
      return (
        <ClientComponent>
          <ServerComponent />
        </ClientComponent>
      );
    }

    // ❌ 잘못된 사용법
    // Client Component
    import ServerComponent from "./ServerComponent";
    ```

### Client Component와 Server Component의 사용시점

- Client Component
  - 인터렉티브한 동작이 필요한 경우 (onClick, onChange 등 이벤트 핸들러)
  - useState, useEffect 등 React Hook을 사용해야 하는 경우
  - window, document 등 브라우저 API를 사용해야 하는 경우
  - 클라이언트 사이드 라이브러리를 사용해야 하는 경우 (analytics 등)
- Server Component
  - 데이터베이스나 백엔드 API에 직접 접근이 필요한 경우
  - 서버의 데이터나 리소스에 접근이 필요한 경우
  - 민감한 정보를 다루는 경우 (API 키, 토큰 등)
  - 큰 용량의 의존성이 필요한 경우 (클라이언트로 전송되는 JavaScript 번들 크기 감소)
  - SEO가 중요한 정적 콘텐츠를 렌더링하는 경우
