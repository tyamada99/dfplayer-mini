# DFPlayer Mini サンプルプログラム
MP3プレイヤーモジュール：[DFPlayer Mini](https://wiki.dfrobot.com/DFPlayer_Mini_SKU_DFR0299)を動作させるためのサンプルプログラムです。
拡張機能：[DFPlayer Mini driver](https://makecode.microbit.org/pkg/51bit/dfplayermini)を使用しています。
モジュールはAmazonで[これ](https://www.amazon.co.jp/gp/product/B07WNZXJW5/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1)を買いました。

## 接続図
接続は、micro:bitとは電源とUARTシリアルポートに接続します[^1] 。後、スピーカーと接続します。
![接続図](/.github/images/connection.png)

以下の写真は、[KeyStudioのセンサーシールド](https://wiki.keyestudio.com/Ks0360_Keyestudio_Sensor_Shield_V2_for_BBC_micro:bit)を使用した例です。（本当は1kΩの抵抗を入れたほうがいいです。）
![接続例](/.github/images/sample.JPG)


[^1]: 　~~実は[公式のWiki](https://wiki.dfrobot.com/DFPlayer_Mini_SKU_DFR0299)では、Arduinoでのシリアルポートとの接続で、RX側に1kΩの抵抗が入っています。  
確かArduinoは5Vで動作すると思うので、これが電圧レベル変換もどきだとすると、micro:bitは3.3Vで動作するので、抵抗はいらないのではないかと勝手に想像して、1kΩの抵抗を入れずに接続させています。一応これで正常に動作しました。~~
やっぱり3.3Vでも電流が流れすぎないように1kΩ程度の抵抗は入っていたほうが良いようです。

## 使い方
上記接続図の通り接続後、MP3ファイルが保存されているマイクロSDカードを挿入します。

操作|動作
----|----
A+Bボタン|再生・停止の切替。再生中は音符マークが表示されます。）
Aボタン|ボリュームダウン
Bボタン|ボリュームアップ
ゆさぶる|次の曲を再生


> このページを開く [https://tyamada99.github.io/dfplayer-mini/](https://tyamada99.github.io/dfplayer-mini/)

<!--
## 拡張機能として使用

このリポジトリは、MakeCode で **拡張機能** として追加できます。

* [https://makecode.microbit.org/](https://makecode.microbit.org/) を開く
* **新しいプロジェクト** をクリックしてください
* ギアボタンメニューの中にある **拡張機能** をクリックしてください
* **https://github.com/tyamada99/dfplayer-mini** を検索してインポートします。
-->
## このプロジェクトを編集
<!-- ![ビルド ステータス バッジ](https://github.com/tyamada99/dfplayer-mini/workflows/MakeCode/badge.svg) -->

MakeCode でこのリポジトリを編集します。

* [https://makecode.microbit.org/](https://makecode.microbit.org/) を開く
* **読み込む** をクリックし、 **URLから読み込む...** をクリックしてください
* **https://github.com/tyamada99/dfplayer-mini** を貼り付けてインポートをクリックしてください

## ブロックのプレビュー

この画像はマスター内の最後のコミットからのブロックコードを示しています。
このイメージは更新に数分かかる場合があります。

![生成されたブロック](https://github.com/tyamada99/dfplayer-mini/raw/master/.github/makecode/blocks.png)

<!--
#### メタデータ (検索、レンダリングに使用)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
-->
