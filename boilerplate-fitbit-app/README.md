# Fitbit Smartwatch App/Clockface Boilerplate

- TypeScript で開発が可能（jsxはJSのまま）
- ESLint/Prettierは一通り揃えたからVSCodeで快適（）に開発しましょう
- ビルドコマンド一発で TypeScript のコンパイルからアプリのパッケージまで全部終わる
- テスト環境は取り揃えてません

# Installation And Setup

## まずはインストール

```
npm i
```
## アプリIDを割り当てる

```
npm run appIdGen
```

## package.json いじる

次は package.json の`fitbit`ブロック内の項目を決める。この部分だけはブラウザの Studio でプロジェクト作っちゃったほうが楽だったりして。


### `appType`

string: 

- `clockface` : 文字盤ならこれ。このリポジトリは文字盤を作るときの想定しかしてない。
- `app` : アプリとしてつくるならこれ。

### `appDisplayName`

string: アプリの表示名。多分英語のほうがいい。

### `iconFile`

string: アイコンのパス。`resources/xxx.png`という感じで指定する。appType が app のときしか意味ないんじゃないか。

### `wipeColor`

string: アプリの色。`#FFFFFF`形式で指定する

### `requestedPermissions`

string[]: インストール時、どんなAPIへのアクセス許可を求める？

### `defaultLanguage`

国内向けなら`ja-JP`で、それ以外なら`en-US`とかにしときゃいいんじゃないか


# Develop

フォルダ構成がちょっとトリッキーになってしまったが、以下の要領。

```
build // ビルド成功するとここにアプリが保存される
  - app.fba
build-template // ビルドするときのtsconfigとかをここに置く。基本手を触れない。
  - tsconfig.json
dist // コンパイル後の、package.json, 本番用tsconfigなどの格納先。この中のファイルでアプリのビルドを行う
  - app
  - resources
  - settings
  - package.json
  - tsconfig.json
node_modules
resources // 画面の定義はここ。
  - index.gui
  - style.css
  - widgets.gui
settings // jsxはTypeScript化するの面倒なのでsrc外のここに置くことにした
  - xxx.jsx
src // 後述
  - app
    - index.ts
    - tsconfig.json
    - ...その他コード
  - common
    - ...その他コード
  - companion
    - tsconfig.json
    - ...その他コード
```

くわしくは[ここ](https://dev.fitbit.com/build/guides/application/)も確認する

## `src` ディレクトリについて

Fitbitアプリのソースコードのディレクトリ構成は以下の通りある程度制約があるので注意する。

### 前提：スマートウォッチやコンパニオンのAPIへのアクセス方法

NPMモジュールをインポートするのと同じ方法でアクセスする。こんな感じ：

```typescript
import { Accelerometer } from "accelerometer"; // ウォッチの加速度センサーAPIを使うよ

if (Accelerometer) {
   accelerometer.start();
}
```

### app ディレクトリ

ウォッチのアプリの動作に必要なメインのコードがここに置かれる。そのため、`index.ts(js)`が存在しないとビルド失敗になるので、必ずそれだけは用意すること。

[Device API](https://dev.fitbit.com/build/reference/device-api/)と呼ばれる、端末の情報や時計表示を行うためのAPIにアクセスできるのはこのディレクトリ内のコードからだけ。

### companion ディレクトリ

母艦となるスマホ側の動作に必要なコードがここに置かれる。たとえば、ウォッチとスマホでデータをやり取りするとき、スマホ側でどんなロジックを動かすかは、このディレクトリ内で実装する。

なので、[Companion API](https://dev.fitbit.com/build/reference/companion-api/)と呼ばれる、APIにアクセスできるのはこのディレクトリ内のコードからだけ。

スマホ側のロジックだから、API充実してんのかなと思ったら結構しょぼい。

必須じゃないけど、1個上にあるsettings/index.jsxを作った場合はcompanion/index.tsも実装しないとだめ。

### common ディレクトリ

あっても無くても良いディレクトリ。共通処理などをここに置いておく。ただし、app・companionそれぞれに特有な型を宣言できる保証が一切ないので、変なコンパイルエラーが起きたら諦めてください。

## 型定義を与えるのがクソむずかしい

- Fitbit公式でAPIの型定義が配布　されていなかった！！
- このままだとTSなのにAPIアクセスするときの型安全が一切保証されないんじゃ？
- その証拠にtsconfigのstrict指定が一切無い模様。これじゃあTSで書く意味がない。
- 型定義を自作しようとしたけど、“fitbit-sdk-types”という非公式型定義ならあったので、思うところはあるけど導入。
- [ここ](https://www.npmjs.com/package/fitbit-sdk-types)を参考に、appディレクトリなど、インポートできるものが限られているディレクトリの直下にtsconfigを配置。これでインポートできるモジュールの型定義が確実になった。
- しかし、commonディレクトリの扱いはどうしましょう。と思って、ルートのtsconfigに型定義ぜんぶ突っ込んだらエラーが出た。
- 型定義がコンフリクト起こしているらしい。型を再宣言出来ないと言われた。ここに関しては正直積みなので、commonディレクトリ内で書ける処理は非常に限られたものになっています。残念。

# Build

アプリが完成したら、以下のコマンドを実行

```
npm run build
```

distディレクトリがクリアされ、tsがコンパイルされ、リソースなどが格納され、package.jsonとtsconfigも格納される。そしてアプリのビルドが始まる。

成功すると、リポジトリ直下に`build`ディレクトリが出来上がってその中にアプリが生成されてるはず。

## インストールと起動

予めFitbit OS SimulatorなりウォッチをDeveloper Bridgeなどに繋いで、アプリ受け入れの準備をしておく。その後、以下コマンドを打ってインストールする。

```
npx fitbit
fitbit$ install
```

ログインを求められたらログインする。シミュレータやウォッチの準備ができてると、勝手に端末へのインストールと起動が行われる。
