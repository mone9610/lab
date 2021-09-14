GCP_firewall_set_tool
===
## このツールについて
GCPのFirewallに対して、自分のパブリックIPアドレスを許可してくれるツールです。

## 使い方(初期設定)
1. Google cloud SDKをインストールしてください。  
[Google Cloud SDK のインストール](https://cloud.google.com/sdk/docs/install?hl=JA)

2. Google cloud SDKインストール後、powerShellにて以下のコマンドを入力してください。

```
> Set-PSRepository -Name PSGallery -InstallationPolicy Trusted
```

3. powerShellにて以下のコマンドを入力し、モジュールをインストールしてください。

```
> Install-Module GoogleCloud
```

4. powerShellにて以下のコマンドを入力し、プロジェクトの設定、認証等をを行ってください。

```
> gcloud init --console-only
```

## 使い方(初期設定後)
1. powerShellにて、create_FW_rule.ps1を実行し、必要事項を入力してください。
2. パブリックIPアドレスが変更された場合には、再度create_FW_rule.ps1を実行してください。

## 注意事項
* Google Compute Engine APIを有効化してから使用してください。 
* 当ツールで許可されるポートは80番および443番です。ポートを追加したい場合には、スクリプト内の下記のコマンドに直接ポート番号を記載してください。

```
  gcloud compute --project=$myPJName firewall-rules create default-allow-access-$_alias --direction=INGRESS --priority=1 --network=default --action=ALLOW --rules=tcp:80,tcp:443 --source-ranges=$myIP/32
```
* Google Cloud SDKは、IPv6による通信が無効になっております。(2021/1/3現在) 以下のコマンドで、IPv6をオフにした上で各種作業を実施してください。 (OS Xで動作確認済み。) 

```
> networksetup -setv6off Wi-Fi
```


## 免責事項
当方は当ツールの継続性や機能等を何ら保証するものではなく、これらの欠陥、瑕疵等について、これらを使用したこと、又は使用できなかったことから生じる一切の損害に関して、いかなる責任も負いません。

## ライセンス
[MIT](https://github.com/mone9610/auto_cryptocurrency_trader_go/blob/main/LICENSE)

## 制作者
[mone9610](https://github.com/mone9610)
