#### [機能確認画面(外部リンク)](https://yuh0shin0.github.io)

#### package.json

```
ライブラリのインストール
esbuildをCIにて利用するためパッケージのインストール時は以下のコマンドを利用する
% npm install --save-dev --force
```

```
型宣言の確認

% npm run check
利用するライブラリ
- [typescript](https://www.typescriptlang.org/)
```

```
src/*.tsをbundle.jsへ結合する

% npm run bundle
利用するライブラリ
ローカル用
- [@esbuild/darwin-arm64](https://esbuild.github.io/)

CI用
- [@esbuild/linux-x64](https://esbuild.github.io/)
```

```
テスト

% npm run test
利用するライブラリ
- [@playwright/test](https://playwright.dev/)
- [@types/node](https://github.com/DefinitelyTyped/DefinitelyTyped)
```

#### 参考文献

- [W3C](https://www.w3.org/TR/)
- [immersive-web.github.io](https://immersive-web.github.io/)
- [MDN](https://developer.mozilla.org/)
- [HTML Spec](https://html.spec.whatwg.org/)
- [CSS Working Group Editor Drafts](https://drafts.csswg.org/)
- [Datatracker](https://datatracker.ietf.org/doc/rfc9001/)
