try{
  #プロジェクト名を設定する
  if(Test-Path .\ini\my_PJ_name.ini)
  {
    $myPJName = Get-Content .\ini\my_PJ_name.ini
  }
  else
  {
    $myPJName = Read-Host "プロジェクト名を入力してください。"
    echo $myPJName > .\ini\my_PJ_name.ini
  }

  #設定済みのファイアウォールルールがあるか確認する
  if(Test-Path .\ini\my_alias.ini)
  {
    $_alias = Get-Content .\ini\my_alias.ini
  }
  else
  {
    $_alias = Read-Host "ファイアウォールルールを識別する名称を入力してください。"
    echo $_alias > .\ini\my_alias.ini
  }

  #設定済みのIPアドレスがあるか確認する
  if(Test-Path .\ini\my_ip.ini)
  {
  echo "古いファイアウォールルールを削除します。"
  .\delete_FW_rule.ps1
  }

  #IPアドレスを取得する
  echo "IPアドレスを取得します。"
  curl -s http://inet-ip.info　> .\ini\my_ip.ini
  $myIP = Get-Content .\ini\my_ip.ini
  echo "あなたのIPアドレス:"$myIP

  #ファイアウォールルールを設定する
  echo "新しいファイアウォールルールを追加します"
  gcloud compute --project=$myPJName firewall-rules create default-allow-access-$_alias --direction=INGRESS --priority=1 --network=default --action=ALLOW --rules=tcp:80,tcp:443 --source-ranges=$myIP/32
  echo "ファイアウォールルールの設定が終わりました"
  pause
}
catch{
  echo "エラーが発生しました。"
}