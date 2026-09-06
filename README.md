# 조은미 X 윔호프 — 숨결 스튜디오

한옥과 국악, 윔호프 메소드를 결합한 웰니스 스튜디오 웹사이트 겸 PWA(설치형 웹앱)입니다.

## 이 프로젝트에 들어있는 것

- `src/pages/` — 홈, 소개, 프로그램, 예약, 후기, 블로그 6개 페이지
- `src/styles/global.css` — 한지·먹·청자색 기반 디자인 토큰
- `public/manifest.json`, `public/sw.js` — PWA 설정 (홈 화면에 앱처럼 설치 가능)
- `.github/workflows/deploy.yml` — GitHub Pages 자동 배포

## 로컬에서 실행하기 (Claude Code 또는 터미널)

```bash
npm install
npm run dev
```

`http://localhost:4321` 에서 확인할 수 있습니다.

## 다음에 꼭 해야 할 일

1. **GitHub 저장소 만들기**: 이 폴더를 새 저장소(예: `joeunmi-wimhof`)로 푸시하세요.
2. **`astro.config.mjs` 수정**: `site`와 `base` 값을 본인 GitHub 사용자명/저장소명으로 바꾸세요.
3. **`public/manifest.json` 수정**: `start_url`, `scope`, 아이콘 경로의 `/joeunmi-wimhof/` 부분을 저장소명과 맞추세요.
4. **GitHub Pages 켜기**: 저장소 Settings → Pages → Source를 "GitHub Actions"로 설정하면, `main` 브랜치에 푸시할 때마다 자동 배포됩니다.
5. **Calendly 연결**: `src/pages/booking.astro`에서 `data-url`을 본인 Calendly 링크로 교체하세요. (calendly.com 무료 가입)
6. **블로그 연결**: `src/pages/blog.astro`의 링크를 기존에 운영 중인 블로그 주소로 교체하거나, 같은 저장소 안에 합치세요.
7. **아이콘 교체**: `public/icons/`에 있는 원 모양 아이콘은 임시 플레이스홀더입니다. 실제 로고로 교체하세요.
8. **사진 추가**: 현재 히어로 영역은 색상 블록으로 처리되어 있습니다. 한옥/스튜디오 실제 사진으로 교체하면 훨씬 완성도가 올라갑니다.

## Claude Code로 이어서 개발하기

Claude Code를 설치한 뒤, 이 폴더에서 실행하면 파일을 직접 보면서
"예약 페이지에 지도를 추가해줘", "소개 페이지 문구를 더 다듬어줘" 같은
요청을 자연어로 하실 수 있습니다.

```bash
npm install -g @anthropic-ai/claude-code
cd joeunmi-wimhof
claude
```
