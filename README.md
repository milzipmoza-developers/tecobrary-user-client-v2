# Tecobrary v2 User Web Application

> 현재 배포한 User 클라이언트의 코드는 '나도 알아보기 힘든' 코드이기 때문에 해당 코드가 유지보수 되기 바라는 의도에서 나름의 규칙을 세우고 정돈된 코드와 커밋으로 User 클라이언트를 재구현하기 위해 진행하는 프로젝트입니다.

## 기술 스택

> 2019.09.09 업데이트 - 추가되는 라이브러리를 지속적으로 업데이트 합니다.

1. **React 라이브러리**로 구현합니다.
2. 테스트는 기본적으로 Jest 를 사용합니다.

## 프로젝트 관리
1. 레포지토리 관리는 [밀집모자개발단 Organization Page](https://github.com/milzipmoza-devs) 에서 진행합니다.
2. 추후 진척도에 따라 [테크코스 Organization Page](https://github.com/woowacourse) 로 이관합니다.
3. 프로젝트 관리는 Zebhub 를 이용합니다.
4. 현재는 혼자 진행하는 프로젝트지만 모든 이슈들을 칸반보드를 이용해 관리하는 것을 원칙으로 합니다.

## 기본 규칙
1. TDD 로 개발을 진행합니다.
2. 테스트 커버리지는 70% 를 목표로 합니다.
3. 코드 컨벤션은 eslint 패키지를 이용해 [Airbnb Style](https://github.com/airbnb/javascript/tree/master/react) 을 따르도록 합니다.
4. git commit 내역과 문서를 보고 미래의 작업자가 별다른 인수 인계 없이 코드 수정할 수 있도록 최대한 상세히 작성합니다.
5. 모든 코드 작성 주기는 1주일로 합니다.
6. 기본 규칙 5번을 바탕으로 프로젝트를 생성합니다.
7. 코드 작성 주기 1주일은 월, 화, 수요일은 새로운 코드를 작성하고 목, 금요일은 해당 주기에 작성된 코드를 리팩토링하며 테스트를 보완합니다.
8. README.md 이외의 문서들은 모두 Wiki 에서 작성합니다.

## 브랜치 관리 전략

> 기본 브랜치 관리는 [여기](https://nvie.com/posts/a-successful-git-branching-model/) 의 문서를 기반으로 진행합니다.

1. 마스터 레포지토리는 master branch 와 develop branch 만 존재합니다.
2. 마스터 레포지토리에 직접적으로 commit 하는 것은 최초 README.md 작성시에만 가능합니다.
3. 모든 기능 구현 및 이슈 dealing 은 해당 브랜치를 포크한 본인의 레포지토리에서 진행합니다.
4. 포크한 레포지토리에서 생성하는 모든 브랜치명은 다음의 규칙을 따릅니다.
    - 기능 구현 : ``feature/[issueNumber]/[issueName]``
    - 버그 수정 : ``fix/[issueNumber]/[issueName]``
5. 포크한 레포지토리에서 마스터 레포지토리로 Pull Request 시에는 4번의 명명 규칙을 title 로 지정하여 Squash 커밋이 4번의 명명 규칙에 따라 생성되도록 합니다.

## 커밋 규칙

> 기본 커밋 규칙은 [Udacity Git Commit Message Style Guide](https://udacity.github.io/git-styleguide/) 를 따릅니다.

1. 커밋 내용은 전부 한글로 작성합니다.
2. 함수 단위로 커밋을 작성합니다. (마스터 브랜치에는 Squash Commit 만 남게 합니다.)

## 프로젝트 목표
1. 프론트엔드 개발에서 TDD 를 연습합니다.
2. 프론트엔드 개발에서도 우아한테크코스에서 전수받은 방법들을 적용하여 체득합니다.
3. 컴포넌트 명확하게 분리합니다.
4. 기존의 테코브러리 UI/UX 를 개선합니다.
5. 프론트엔드 배포 자동화에 도전합니다.