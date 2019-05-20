# 프로그래머스 썸머코딩 2019 2차 개발과제 
## 이진우 (etture@gmail.com)
## TODO list 만들기 -- 백엔드 API
## 실행 URL: https://todo-programmers-api.herokuapp.com

### 개발 스택
- Node.js Express
- TypeScript
- MariaDB
- Heroku (배포)
- AWS RDS (remote database)

### 실행 방법
- `Git repo clone` 후 `npm install`
- 개발 환경에서 실행 커맨드는 `npm run dev` --> `process.env.PORT`에 지정된 포트 혹은 `3380`에서 실행
- 데이터베이스 연동을 위해 `.env` 환경변수 파일에 다음 4개 변수를 데이터베이스 (MySQL/MariaDB) 환경에 맞게 선언해야 한다
  1. `DB_HOST`
  2. `DB_USER`
  3. `DB_PASSWORD`
  4. `DB_DATABASE`
- 데이터베이스 상 정의되어 있는 테이블은 다음과 같다:
```
CREATE TABLE todos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userid INT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT NOW(),
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    priority INT NOT NULL DEFAULT 3,
    deadline DATETIME,
    FOREIGN KEY (userid) REFERENCES users(id)
);

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nickname VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
```
