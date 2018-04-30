<template>
  <div class="wrapper">
    <div class="container">
      <p class="content-title">SERVICES</p>
      <div class="flex-container">
        <div class="flex-list">
          <p class="service-number">01</p>
        </div>
        <div class="flex-item">
          <img class="service-icon" src="/images/technicaladvise-icon.png" alt="technicaladvise-icon.png">
          <p class="service-name-en">TECHNICAL ADVISER</p>
          <p class="service-name-ja">技術顧問</p>
          <ul class="service-list">
            <li>組織設計</li>
            <li>評価制度設計</li>
            <li>アーキテクチャレビュー</li>
            <li>コードレビュー</li>
          </ul>
        </div>
        <div class="flex-list">
          <p class="service-number">02</p>
        </div>
        <div class="flex-item">
          <img class="service-icon" src="/images/application-icon.png" alt="application-icon.png">
          <p class="service-name-en">APPLICATION</p>
          <p class="service-name-ja">アプリケーション開発</p>
          <ul class="service-list">
            <li>WEBアプリケーション開発</li>
            <li>業務システム開発</li>
            <li>API開発</li>
            <li>ツール開発</li>
          </ul>
        </div>
        <div class="flex-list">
          <p class="service-number">03</p>
        </div>
        <div class="flex-item">
          <img class="service-icon" src="/images/infrastructure-icon.png" alt="infrastructure-icon.png">
          <p class="service-name-en">INFRASTRUCTURE</p>
          <p class="service-name-ja">インフラ構築</p>
          <ul class="service-list">
            <li>商用サービスインフラ</li>
            <li>各種クラウド対応可</li>
            <li>ネットワーク設計</li>
            <li>無線LAN設計</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: block;
  background-color: #232c30;
}
.container {
  max-width: 1200px;
  text-align: center;
  margin: auto;
}
.content-title {
  padding-top: 60px;
  color: #fff;
  font-size: 18px;
  letter-spacing: 3px;
}
.flex-container {
  max-width: 1000px;
  height: 400px;
  margin: 0 auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}
.flex-item {
  flex: 3;
  border-left: solid 1px #677075;
  height: 220px;
  padding-left: 30px;
  color: #fff;
}
.flex-list {
  flex: 0.2;
}
.service-number {
  color: #677075;
  font-family: "Barlow Semi Condensed - Medium Italic";
  font-size: 50px;
  letter-spacing: 1px;
  transform: scale(0.9, 1);
}
.service-icon {
  width: 40px;
}
.service-name-en {
  padding-top: 20px;
  font-size: 16px;
}
.service-name-ja {
  padding-top: 7px;
  font-size: 12px;
}
.service-list {
  padding-top: 30px;
  padding-left: 15px;
  list-style-type: disc;
  font-size: 14px;
}
.service-list li {
  padding-bottom: 15px;
}
</style>