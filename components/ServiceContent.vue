<template>
  <div id="services" class="wrapper">
    <div class="container">
      <p class="content-title">SERVICES</p>
      <div class="flex-container">
        <div class="flex-box">
          <div class="number-box">
            <div class="list-number-one">
              <p class="service-number">01</p>
            </div>
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
        </div>
        <div class="flex-box">
          <div class="number-box">
            <div class="list-number">
              <p class="service-number">02</p>
            </div>
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
        </div>
        <div class="flex-box">
          <div class="number-box">
            <div class="list-number">
              <p class="service-number">03</p>
            </div>
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
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:500i');
.wrapper {
  display: block;
  background-color: #232c30;
  padding-top: 90px;
  padding-bottom: 70px;
}
.container {
  max-width: 1200px;
  text-align: center;
  margin: auto;
}
.content-title {
  color: #fff;
  font-size: 22px;
  letter-spacing: 4px;
}
.flex-container {
  max-width: 1100px;
  min-height: 350px;
  margin: 0 auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: left;
}
.flex-box {
  display: flex;
  flex: 1;
  align-items: center;
}
.flex-item {
  flex: 1;
  border-left: solid 1px #677075;
  height: 65%;
  padding: 0 30px 0 30px;
  color: #fff;
}
.number-box {
  position: relative;
  overflow: hidden;
}
.list-number-one {
  width: 60px;
  position: relative;
  left: 8px;
}
.list-number {
  width: 60px;
  position: relative;
  left: 2px;
}
.service-number {
  color: #677075;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 70px;
  font-style: oblique;
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
@media screen and (max-width:768px) {
  .wrapper {
    padding-top: 70px;
    padding-bottom: 10px;
  }
  .flex-item p {
    font-size: 12px;
  }
  .flex-item li {
    font-size: 10px;
  }
  .content-title {
    font-size: 20px;
  }
}
@media screen and (max-width:480px) {
  .flex-container {
    height: auto;
    flex-direction: column;
  }
  .flex-box {
    min-width: 260px;
    padding: 30px 0 20px 0;
  }
}
</style>