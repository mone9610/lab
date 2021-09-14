# signup_with_auth0
## この記事について
Reactでauth0(SPAモード)利用時のサインアップボタン作成手順について解説します。  

## 前提
- React
    - react@17.0.2
- Maretial-UI
    - @material-ui/core@4.12.3
- node
    - v14.17.4
- yarn
    - 1.22.11
- auth0
    - @auth0/auth0-react@1.7.0
    - @auth0/auth0-spa-js@1.17.1
    - auth0については[こちら]("https://auth0.com/jp")

## 要約
useAuth0利用時に、propertyにscreen_hint:"signup"を指定しましょう。

```typescript
      <Button
        color="primary"
        style={{ maxWidth: '180px', minWidth: '180px' }}
        variant="contained"
        onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
      >
```

## 詳細
### 検証の背景
Reactでauth0を利用する時、useauth0というモジュールを組み込むと、簡単にログイン機能を実装することができます。  
イベントハンドラと、useauth0のloginWithRedirectというコンポーネントを利用することでサインイン用のボタンを作成することができるのですが、プロパティを指定しなければ、下記のようなユニバーサルログイン画面へ誘導されます。  
[画像]
    
プロパティに **screen_hint:'signup'** を指定することで、ユニバーサルログイン画面ではなく、サインアップ画面を表示することが可能です。  
[画像]

### 手順解説
1. create-react-appで、新しくReactアプリを作成しましょう。
```
$ npx create-react-app signuptest --template=typescript
```
2. ディレクトリを移動し、yarnでMaterial-UIとauth0のライブラリをインストールしましょう。
```
$ cd signuptest
$ yarn add yarn add @material-ui/core @auth0/auth0-react
```
3. auth0を起動し、サイドバーの[Applications]>[Applications]から、[Single Page Web Applications]を選択し、新規にアプリケーションを作成してください。  
[画像]  


4. auth0の公式手順に則り、index.tsxにAuth0 Providerのコンポーネントを記載してください、   
[画像]  
[画像]

5. App.tsxに、サインイン用のボタンと、サインアップ用のボタンを作成してください。  
参考  
```typescript

```
6. yarn startで、両者の挙動を確認してください。  
[画像]  
[画像]  
[画像]


## リポジトリ
今回利用したファイルは、[こちらのリポジトリ]("https://github.com/mone9610/lab/tree/main/001_signup_with_auth0")に格納しております。  
auth0利用時の助けになれば幸いです。

以上