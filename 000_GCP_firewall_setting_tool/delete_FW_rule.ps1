#IPアドレスを記載したファイルが存在していなければ処理を強制終了
$flg = Test-Path .\ini\my_ip.ini
$flg2 = Test-Path .\ini\my_alias.ini
if($flg -eq $flg2)
{
}
else
{
  echo "設定ファイルが見つかりません "
  exit
}

#設定済みのファイアウォールを設定を取得する
$_alias = Get-Content .\ini\my_alias.ini

#既存のファイアウォールルールを削除する
gcloud compute firewall-rules delete default-allow-access-$_alias --quiet
echo "古いファイアウォールルールを削除しました。"