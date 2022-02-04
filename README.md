### ts/tsx ファイルの区別

ts: ロジック層。JSX が使用できないため、主にロジック等を記述する。
TSX: UI 層。JSX を使用できるため、主に UI を管理する。

### styled-components

css について基本的に styled-components を使用する。

- style が 2 つ以上の場合は styled を使用する。

  > 例：
  > const Wrapper = styled.div` color: #111; font-size: 12px;`

- style が１つの場合は css props を使用する。
  > 例：
  >
  > <div css={'color: blue'}></div>

※css props の使用方法
styled-components/macro を import する。

> 例：
> import 'styled-components/macro'

> × import styled from 'styled-components/macro'

### ディレクトリ構成

├── front
│ 　 ├── components
│ 　 │ 　 ├── pages
│ 　 │ 　 │ 　 └── [PageName]
│ 　 │ 　 │ 　　　　 ├── index.tsx
│ 　 │ 　 │ 　　　　 ├── index.test.tsx
│ 　 │ 　 │ 　　　　 ├── hooks.test.tsx
│ 　 │ 　 │ 　　　　 ├── hooks.ts
│ 　 │ 　 │ 　　　　 ├── presenter.test.tsx
│ 　 │ 　 │ 　　　　 ├── presenter.tsx
│ 　 │ 　 │ 　　　　 └── [Component Name]/
│ 　 │ 　 ├── projects
│ 　 │ 　 └── uiParts
│ 　 │ 　　　 ├── [Component Name]
│ 　 │ 　　　 │ 　 ├── index.stories.tsx
│ 　 │ 　　　 │ 　 ├── index.tsx
│ 　 │ 　　　 │ 　 ├── presenter.test-d.tsx
│ 　 │ 　　　 │ 　 ├── presenter.test.tsx
│ 　 │ 　　　 │ 　 ├── presenter.tsx
│ 　 │ 　　　 │ 　 └── style.tsx
│ 　 ├── contexts
│ 　 ├── ducks
│ 　 ├── hooks
│ 　 ├── styles
│ 　 ├── types
│ 　 └── utils

### front/components/pages/[PageName]/index.tsx

page/template の Container 層。ロジックを管理する。

### front/components/pages/[PageName]/presenter.tsx

page/template の Presentation 層。UI を管理する。

### front/components/pages/[PageName]/[Component Name]

[PageName]の独自 Component。organisms 層。

### front/components/projects/

共通で使用する organisms 層の component。

### front/components/uiParts

atoms/molecules 層の汎用 component。storybook を使用。

### utils/定数

module を使用して名前空間を分ける。
