# 🚀 SandBox

샌드박스 리포지토리 - 자유롭게 다양한 기술 스택을 테스트하는 웹페이지 테스트베드

## 📌 프로젝트 소개

이 레포지토리는 다양한 웹 기술을 자유롭게 실험하고 테스트할 수 있는 샌드박스 환경입니다.
HTML, CSS, JavaScript 등 다양한 기술 스택을 사용하여 웹페이지를 만들고, GitHub에 저장한 후 Cloudflare Pages로 자동 배포됩니다.

## 🎯 주요 특징

- **자유로운 실험 환경**: 다양한 웹 기술을 제약 없이 테스트
- **간편한 배포**: GitHub과 Cloudflare Pages 자동 연동
- **빠른 성능**: Cloudflare의 글로벌 CDN을 통한 빠른 페이지 로딩
- **버전 관리**: Git을 통한 체계적인 코드 관리

## 📁 프로젝트 구조

```
SandBox/
├── index.html           # 메인 HTML 페이지
├── style.css            # 스타일시트
├── script.js            # JavaScript 기능
├── cloudflare-pages.md  # Cloudflare Pages 배포 가이드
├── .gitignore           # Git 제외 파일 목록
├── LICENSE              # MIT 라이선스
└── README.md            # 프로젝트 설명서
```

## 🚀 시작하기

### 로컬에서 실행하기

1. 저장소 클론:
```bash
git clone https://github.com/aiandyou50/SandBox.git
cd SandBox
```

2. 웹 브라우저로 `index.html` 파일 열기
   - 파일 탐색기에서 `index.html`을 더블 클릭하거나
   - 브라우저 주소창에 파일 경로 입력

### 로컬 서버로 실행하기 (선택사항)

Python이 설치되어 있다면:
```bash
# Python 3
python -m http.server 8000

# 브라우저에서 http://localhost:8000 접속
```

Node.js가 설치되어 있다면:
```bash
# http-server 설치 (전역)
npm install -g http-server

# 서버 실행
http-server

# 브라우저에서 http://localhost:8080 접속
```

## ☁️ Cloudflare Pages 배포

### 자동 배포 설정

1. **Cloudflare 계정 생성**
   - [Cloudflare](https://www.cloudflare.com/)에 가입 (무료)

2. **Pages 프로젝트 생성**
   - Cloudflare 대시보드에서 "Pages" 선택
   - "Create a project" 클릭
   - "Connect to Git" 선택

3. **GitHub 연동**
   - GitHub 계정 연결
   - 이 저장소 (SandBox) 선택

4. **빌드 설정**
   - Framework preset: `None` (정적 HTML)
   - Build command: (비워두기)
   - Build output directory: `/` 또는 비워두기
   - Root directory: `/`

5. **배포**
   - "Save and Deploy" 클릭
   - 몇 초 내에 자동 배포 완료!

### 배포 후

- 자동으로 생성된 URL로 사이트에 접속 가능
- `main` 브랜치에 push할 때마다 자동으로 재배포
- 다른 브랜치는 프리뷰 환경으로 자동 배포

## 🛠️ 개발하기

### 파일 수정

1. 원하는 파일 수정 (HTML, CSS, JS)
2. 로컬에서 테스트
3. Git으로 커밋 및 푸시:

```bash
git add .
git commit -m "설명을 작성하세요"
git push origin main
```

4. Cloudflare Pages가 자동으로 배포

### 새로운 기술 스택 추가

이 샌드박스에 자유롭게 다양한 기술을 추가할 수 있습니다:
- React, Vue, Svelte 등의 프레임워크
- TypeScript
- Tailwind CSS, Bootstrap 등의 CSS 프레임워크
- 기타 npm 패키지

## 📝 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🤝 기여하기

이 프로젝트는 테스트베드이므로 자유롭게 실험하고 기여할 수 있습니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 문의

프로젝트 링크: [https://github.com/aiandyou50/SandBox](https://github.com/aiandyou50/SandBox)

---

**Happy Coding! 🎉**
