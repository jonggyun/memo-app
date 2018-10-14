# memo-app


## About

> 간단한 메모를 기록할 수 있는 메모 웹애플리케이션

  첫 번째 리액트 프로젝트, 기본 개념 익히기 정도로만 개발
  
  폴더 추가, 삭제, 메모 보기까지만 개발

## Project Duration

> 2018.09.19 ~ 2018.10.10

## Project Specification

> use create-react-app

> Client

* ReactJS

> Server

* Node.js (Koa Framework)

> Database

* MongoDB (mongoose)

> Structure

### Front-End
```
├── Root.js
├── components                          - 프레젠테이션 컴포넌트 모음
│   ├── App.js
│   ├── common
│   │   ├── Button
│   │   └── Header
│   ├── folders
│   │   ├── FolderButton
│   │   ├── FolderItem
│   │   ├── FolderList
│   │   └── Folders
│   ├── memo
│   │   ├── MemoHeader
│   │   ├── MemoList
│   │   ├── MemoPostPane
│   │   ├── MemoPostTemplate
│   │   ├── MemoTemplate
│   │   └── Memos
│   └── modal
│       ├── FolderModal
│       └── ModalWrapper
├── containers                           - 컨테니어 컴포넌트 모음
│   ├── common
│   ├── folders
│   ├── memo
│   └── modal
├── index.css
├── index.js
├── lib
│   └── api.js                            - axios 비동기 연결
├── pages
│   ├── MemoPage.js
│   ├── MemoPost.js
│   └── index.js
├── registerServiceWorker.js
├── store
│   ├── configure.js
│   └── modules                           - Ducks 구조로 Redux 표현
└── styles                                - 공통 CSS
```

### Back-End
```
├── api
│   ├── index.js         - memos 라우터 설정
│   └── memos
│       ├── index.js     
│       └── memo.ctrl.js - 비동기 방식을 이용한 DB접근 및 데이터 추출
├── index.js             - mongoDB와 접속하는 역할 및 api 라우터 설정
└── models               - schema 설정
    ├── folders.js       
    └── memos.js
```

