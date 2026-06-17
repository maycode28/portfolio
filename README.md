# 📁 My Portfolio & Projects

안녕하세요! 문제를 깊이 파고들어 끝까지 해결하는 개발자 **김지현**입니다.
이 저장소는 제가 진행한 프로젝트의 아키텍처와 기술적 고민들을 정리한 포트폴리오 웹사이트입니다.

## 🚀 사이트 바로가기

👉 [https://maycode28.github.io/portfolio/](https://maycode28.github.io/portfolio/)

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Deployment:** GitHub Pages

## 📂 주요 프로젝트 기술 요약

본 포트폴리오에는 다음과 같은 실무적 트러블슈팅 경험이 기록되어 있습니다.

### 1. ORDA (GPS 기반 등산 플랫폼)

- **기간:** 2026.03 - 2026.04 / 팀 프로젝트 (팀장)
- **Tech Stack:** Spring Boot, PostgreSQL, PostGIS, React, TypeScript, Docker, GCP Cloud Run, Vercel
- **핵심 역할:**
  - 등산로 공간 데이터 수집,정제 파이프라인 설계 및 고도 보정 방식 구상
  - 세션 상세 페이지, 경로 리플레이 기능 개발 (GPS 기록 ↔ 지도 데이터 연동)
  - 팀장으로서 프론트-백엔드 간 공통 API 응답 규격 및 공용 컴포넌트 구조 제안
- **기술적 고민:**
  - 공공데이터 누락, GPX 중복도 등 데이터 소스 한계를 빠르게 포착하여 서비스 범위에 맞게 재선택
  - OOM 제약 속 현장 테스트 일정 사수를 위해 Docker 컨텍스트 활용, JVM 메모리 튜닝, GCP 마이그레이션 등 단계별 차선책 리드
  - 복잡한 기능일수록 작업을 작게 쪼개고 Git Diff로 단계별 검증 → PR 교차 검증으로 이어지는 안전한 AI 활용 개발 워크플로우 구축

### 2. SmileTrack (치기공소 공정 관리 시스템)

- **기간:** 2026.02 - 2026.03 / 개인 프로젝트
- **Tech Stack:** Java, Spring Boot, MariaDB, React
- **핵심 역할:**
  - 기존 전산 프로그램이 해결하지 못한 실시간 보철물 위치 추적·작업자 부하 예측 문제를 전 직장 랩 매니저와의 인터뷰로 도출
  - 보철물 공정의 동적인 흐름(반려·역행 포함)을 안전하게 기록하는 1:N 상태 이력 테이블 설계
  - Figma 화면 설계와 ERD를 유기적으로 연결하여 다형성 있는 보철물 데이터 필드의 정규화 수준 향상 및 DB 제약 조건 레벨의 누락 방지
- **기술적 고민:**
  - 코드 작성 전 비즈니스 요구사항과 데이터 흐름을 먼저 설계하는 것이 복잡한 도메인 로직 구현의 나침반이 됨을 체득

### 3. oopsLog (CBT 기반 AI 심리 분석 서비스)

- **기간:** 2026.04 / 공모전
- **Tech Stack:** Spring Boot, MariaDB, React, TypeScript, Vite, Gemini API, OpenAI API, Railway, Vercel
- **핵심 역할:**
  - CBT 기반 3단계(사실 추출 → 왜곡 탐지 → 인지 재구성) 분석 프롬프트 설계
  - 토큰 비용 최적화를 위해 JSON Strict Output의 Key 라벨을 약어로 압축, 백엔드 역직렬화 파이프라인 조율
  - Gemini 장애 시 OpenAI로 자동 전환되는 Fallback 로직 구현
  - 분산 배포 환경(Railway + Vercel)에서의 CORS / Pre-flight(OPTIONS) 차단 문제 트러블슈팅
- **기술적 고민:**
  - Pre-flight 요청이 커스텀 AuthInterceptor에 차단됨을 확인 → 인터셉터 임시 비활성화로 API 연동 검증
  - **향후 과제:** Spring Security 도입 및 필터 체인 레벨에서의 전역 CORS 정책 통합 관리 예정

---

## 💡 개발 철학

> "단순히 기능을 구현하는 것을 넘어 문제가 왜 발생했는지 끝까지 파고들고 어떻게 아키텍처를 견고하게 만들지 고민합니다."

## 📧 Contact

- **Email:** [may.code.28@gmail.com](mailto:may.code.28@gmail.com)
- **GitHub:** [github.com/maycode28](https://github.com/maycode28)
- **Velog:** [velog.io/@maycode28/posts](https://velog.io/@maycode28/posts)
