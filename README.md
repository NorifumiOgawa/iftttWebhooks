# IFTTT Webhooks

IFTTT Webhooksは、ScratchからIFTTTを利用するための拡張機能です。
この拡張機能を使うと、ScratchからIFTTTのWebhooksにWEBリクエストを送信することができます。

- [IFTTT](https://ifttt.com)

## 使い方

### IFTTT Webhooks用「key」の取得

1. [IFTTT](https://ifttt.com) にアカウント登録してログインします。
2. [Webhooks](https://ifttt.com/maker_webhooks) 画面から「Documentation」を確認します。

![Webhooks works better with IFTTT](https://user-images.githubusercontent.com/770527/144384025-233322cc-2675-4cd3-a432-98bf61bb0479.png)

3. 「Your key is:」に続く英数の文字列が、ScratchからWebhooksにリクエストを送る際に必要な「key」です。※「key」は個人ごとに設定される値なので、他人と共有しないようにしてください。

![IFTTT Maker Webhooks](https://user-images.githubusercontent.com/770527/144384042-381c270a-c148-4ae4-a8ba-aacbf772e40e.png)

### IFTTT Applets の作成

以下の手順は、IFTTTがWebhooksで受け取った値を、LINEのトークに通知する場合の設定例です。

1. IFTTTの[Create](https://ifttt.com/create) 画面で「If This (Add)」を選びます。
2. Choose a service で「Webhooks」を選びます。
3. 「Receive a web request」を選びます。
4. 「Event Name」に任意のイベント名を設定してください。（例）`line_notify`
5. 「Create trigger」でトリガーを保存します。
6. 「Then That (Add)」を選びます。
7. Choose a service で「LINE」を選びます。
8. 「Send message」を選びます。
9. 「Recipient」で通知先のLINEトークを選択します。
10. 「Message」にScratchから受け取った値（Value1~3）の表示フォーマットを設定します。
11. 「Create action」でアクションを保存します。
12. 「Continue」で「Review and finish」に進み、「Finish」でAppletを保存します。

### Scratchから値を送る

1. https://stretch3.github.io/ をChromeで開きます。
2. 「拡張機能を選ぶ」画面を開き、「IFTTT Webhooks」を選びます。

![Stretch3](https://user-images.githubusercontent.com/770527/144393562-13478991-d35f-4423-98bc-4920955814c3.png)

3. 「IFTTT event:」ブロックにIFTTT Webhooks用「key」を設定します。
4. 「IFTTT key:」ブロックにIFTTT Appletsに設定したイベント名を設定します。

![Stretch3](https://user-images.githubusercontent.com/770527/144414969-921245c7-6e9a-4210-93b3-91f0625a0440.png)

5. 「value1を（　）にする」~「value3を（　）にする」のブロックに、送信したい値を設定します。

![Stretch3](https://user-images.githubusercontent.com/770527/144414548-53cafda0-2c28-44c0-9c87-f81ab21aa8a5.png)

6. 「送る」ブロックを実行すると、設定した値がIFTTTのWebhooksにWEBリクエストとして送信され、LINEに通知されます。

![IMG_94B94C6081C7-1](https://user-images.githubusercontent.com/770527/144417513-a4797391-4ae7-447a-a7a9-c12412763b89.jpeg)

## For Developers - How to run IFTTT Webhooks extension on your computer

This requires you to have Git and Node.js installed.

1. Setup LLK/scratch-gui on your computer.
```
% git clone --depth 1 git@github.com:LLK/scratch-gui.git
% cd scratch-gui
% npm install
```

2. set up ifttt Webhooks extension.
```
% git clone git@github.com:NorifumiOgawa/iftttWebhooks.git
% sh iftttWebhooks/install.sh
```

3. Run Scratch, then go to http://localhost:8601 .
```
% npm start
```

## Release Notes
* 2020.7.25 v1.0 Initial release
