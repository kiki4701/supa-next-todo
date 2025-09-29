<!--
    # 필요한 패키지 미리 설치
    ( version issue에 대응하여 특정 버전으로 설치하기 )
 -->
<!--
yarn add react-spinners@^0.13.8
yarn add react-icons@^5.0.1
yarn add @supabase/supabase-js@^2.42.0
yarn add @supabase/ssr@^0.1.0
yarn add @supabase/auth-ui-react@^0.4.7
yarn add @supabase/auth-ui-shared@^0.1.8
yarn add cookies-next@^4.1.1
-->

<!-- mac 에서는 이걸로 터미널에서 api 호출 해 볼 수 있음, 난 안되더라....
curl 'https://ltsrrjajvuihlqoaexum.supabase.co/rest/v1/todos_no_rls?select=*' \
-H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0c3JyamFqdnVpaGxxb2FleHVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1MjE0NjAsImV4cCI6MjA3NDA5NzQ2MH0.JjHlGUfO4TKh2CHasZ72HDbIToYbvi9beIiGgUKtwLY"
-->

npx supabase gen types typescript --project-id "ltsrrjajvuihlqoaexum" --schema public > types/supabase.ts

## 구글 로그인 구현 3단계

1. Google Cloud API Oauth 세팅
2. Auth UI 관련 작업
3. Callback 처리 (PKCE)

