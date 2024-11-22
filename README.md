### NEXT.js Supabase 연동 TODO-LIST 제작

#### 1. 프로젝트 설명

해당 프로젝트는 `NEXT.js`와 `Supabase`를 활용한 나만의 일정관리(TASK 관리) 웹 애플리케이션 만들기 프로젝트입니다. <br />
`Supabase`를 활용하여 기본적인 `CRUD`(Create, Read, Update, Delete) 기능을 구현하고, <br /> `Figma` 디자인 시안을 통해 필요한 데이터베이스 간단한 구조설계 연습을 해보았습니다.<br/>
해당 프로젝트는 전적으로 Shadcn UI 디자인 시스템을 사용하여 UI/UX 개발을 진행하였습니다. <br/>

### 프로젝트 환경설정

#### 1. Shadcn UI 공식문서의 CLI를 통해 NEXT.js 프로젝트를 생성.

-   하기에 작성한 명령어를 통해 설치해줍니다. 또한, 모든 기본 설정을 통해 진행하였습니다.
-   단, 컬러 테마는 본인의 취향에 맞게 선택해주십시오.

-   npx shadcn@latest init

-   전반적인 폰트는 Google Font의 Noto Sans KR 폰트를 사용했습니다. <br/>(feat. app > layout.tsx 파일 참조)

-   SASS/SCSS 설치: npm i sass

-   React 마크다운 에디터 설치: npm i @uiw/react-markdown-editor

-   Supabase 연동을 위한 라이브러리 설치: npm install @supabase/supabase-js

#### 2. UI Component 설치

1. Alert Dialog: `npx shadcn@latest add alert-dialog
`
2. Button: `npx shadcn@latest add button
`
3. Calendar: `npx shadcn@latest add calendar
`
4. Card: `npx shadcn@latest add card
`
5. Checkbox: `npx shadcn@latest add checkbox
` <br /> 수정부분 있음(색상:[#00EA88])
6. Dialog: `npx shadcn@latest add dialog
`<br /> 수정부분 있음(max-w-lg=>max-w-3xl)
7. Input: `npx shadcn@latest add input
`
8. Popover: `npx shadcn@latest add popover
`
9. Progress: `npx shadcn@latest add progress
`
10. Separator: `npx shadcn@latest add separator
`
11. Skeleton: `npx shadcn@latest add skeleton
`
12. Toast: `npx shadcn@latest add toast
`
