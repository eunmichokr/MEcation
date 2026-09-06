import { defineConfig } from 'astro/config';

// GitHub Pages 배포 시 site/base 값을 본인 저장소에 맞게 수정하세요.
// 예: https://<username>.github.io/<repo-name>/
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/MEcation',
});
