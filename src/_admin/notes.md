### Bootstrap SASS template
- $`create-react-app bootstrap-temp`
- Created `_admin` folder
- Created `notes.md` (this)
- Moved README.md to `_admin` > renamed `create-react_notes.md`
- Removed `logo.svg`
- Gutted App.js / App.css
- Removed `import logo from './logo.svg';` from `App.js`
- Color Palette: https://coolors.co/59535f-be3930-f85649-985356-fd8945

Created
- `rootData.json`
- `/page_components`
  - `/Home`
    - `Home.js`
    - `Home.sass`
  - `/page2`
    - `page2.js`
    - `page2.sass`
  - `/FullPage`
    - `fullPage.js`
    - `fullPage.sass`
  - `/Theme`
    - `theme.js`
    - `theme.sass`

Added
- added to `.gitignore`
```
package-lock.json
*.DS_Store
```

Add React Router dom
- `npm install react-router-dom`

Add bootstrap
- `npm install bootstrap`
- `npm install react-bootstrap`
- add `import 'bootstrap/dist/css/bootstrap.min.css'` to `index.js`

Add SASS
- `npm install node-sass`

Create `index.scss`
- Add `import './index.scss'` to index.js BEFORE `import App ...`
- See `node_modules/bootstrap/scss/_variables.scss`

### Resources
- Color Palette: https://coolors.co/59535f-be3930-f85649-985356-fd8945
- unicode: https://www.compart.com/en/unicode
- react bootstrap: https://react-bootstrap.github.io
