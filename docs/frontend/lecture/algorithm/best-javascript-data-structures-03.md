---
id: best-javascript-data-structures-03
title: JavaScript 알고리즘 & 자료구조 마스터클래스 3
tags: ["Algorithm", "Udemy"]
# hide_table_of_contents: true
---

## 문제의 이해

> 알고리즘 문제를 해결하기 전에 아래 다섯 가지 질문을 통해 문제를 철저히 이해하는 것이 중요하다.

1. **문제를 내 방식대로 다시 설명할 수 있나요?**

   - 문제를 자신의 언어로 다시 표현해보세요
   - 다른 사람에게 설명하듯이 정리해보세요
   - 핵심 요구사항을 파악하세요

2. **문제에 들어가는 입력값들은 무엇인가요?**

   - 파라미터의 종류와 개수는 무엇인가요?
   - 입력값의 데이터 타입은 무엇인가요?
   - 입력값의 범위나 크기는 어떻게 되나요?

3. **문제의 해결책에서 나와야 하는 출력값은 무엇인가요?**

   - 어떤 형태의 결과를 반환해야 하나요?
   - 출력값의 데이터 타입은 무엇인가요?
   - 예상되는 결과값의 형식은 어떠한가요?

4. **입력값들로부터 출력값을 결정할 수 있나요?**

   - 주어진 입력값으로 문제를 해결하기에 충분한가요?
   - 추가적인 정보가 필요한가요?
   - edge case(경계 조건)는 어떻게 처리해야 하나요?
   - 이 단계에서 완벽한 답을 할 수 없더라도, 고민해보는 것이 중요합니다

5. **문제의 일부인 중요한 데이터들을 어떻게 라벨링해야 할까요?**
   - 사용할 변수들의 이름을 어떻게 정할까요?
   - 데이터의 구조를 어떻게 조직화할까요?
   - 핵심 정보들을 어떻게 체계적으로 관리할까요?

## 세부 분석

> 문제를 해결하기 전에 구체적인 구현 계획을 세우는 것이 중요하다.

- 문제의 요구사항을 주석으로 먼저 작성하여 단계별로 정리한다.
- 각 단계에서 필요한 로직을 의사코드(pseudocode)로 표현한다.
- 예상되는 edge case들을 미리 파악하고 처리 방법을 계획한다.
- 필요한 헬퍼 함수나 유틸리티 함수들을 미리 식별한다.

> 이러한 세부 분석 과정을 통해

- 복잡한 문제를 작은 단위로 분해할 수 있다.
- 구현 전에 발생할 수 있는 문제점들을 미리 파악할 수 있다.
- 더 체계적이고 효율적인 코드를 작성할 수 있다.

## 되돌아보기

> 초기 구현을 완료한 후에는 코드를 개선하기 위한 리팩토링 과정이 필요하다.
> 리팩토링은 지속적인 과정이며, 코드의 품질을 점진적으로 향상시키는 중요한 단계이다.

### 리팩토링

1. **코드 가독성 개선**

   - 변수와 함수명이 명확한가?
   - 코드의 들여쓰기와 포맷팅이 일관적인가?
   - 복잡한 로직에 대한 주석이 충분한가?

2. **성능 최적화**

   - 시간 복잡도를 개선할 여지가 있는가?
   - 공간 복잡도를 줄일 수 있는 방법이 있는가?
   - 불필요한 연산이나 반복문이 있는가?

3. **코드 구조 개선**
   - 중복된 코드를 제거할 수 있는가?
   - 함수나 모듈로 분리할 수 있는 부분이 있는가?
   - 더 적절한 자료구조를 사용할 수 있는가?

### 리팩토링 접근 방법

1. **점진적 개선**

   - 한 번에 한 가지 측면만 개선하기
   - 각 변경 사항 후 테스트 수행하기
   - 성능 측정을 통한 개선 효과 확인하기

2. **코드 재사용성**

   - 유틸리티 함수 추출하기
   - 공통 로직 모듈화하기
   - 확장 가능한 구조로 개선하기

3. **에러 처리 보완**
   - 예외 상황 처리 로직 추가하기
   - 에러 메시지 명확하게 작성하기
   - 디버깅을 위한 로깅 개선하기
