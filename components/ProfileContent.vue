<template>
  <div class="wrapper">
    <div class="container">
      <div class="flex-container">
        <div class="flex-item-left">
          <div class="flex-container-profile">
            <div class="flex-item-img">
              <img class="footer-logo" src="/images/footer_logo.png" />
            </div>
            <div class="flex-item-profile">
              <p class="profile-title">PROFILE</p>
              <p class="profile-name">中筋 丈人</p>
              <p class="profile-name profile-name-sub">TAKETO NAKASUJI</p>
            </div>
          </div>
          <p class="message">経営課題を技術で解決する。</p>
          <div class="flex-container-info">
            <div class="flex-item-attribute">
              <div class="info-box">
                <p class="attribute-en">NAME</p>
                <p class="attribute-jp">屋号</p>
              </div>
              <div>
                <p class="attribute-en">SERVICE</p>
                <p class="attribute-jp">事業内容</p>
              </div>
            </div>
            <div class="flex-item-value">
              <div class="info-box">
                <p class="value">XERO</p>
              </div>
              <div>
                <p class="value">技術コンサルティングサービス</p>
                <p class="value">システム開発サービス</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-item-right">
          <div class="flex-item-biography">
            <p class="biography-en">BIOGRAPHY</p>
            <p class="biography-jp">略歴</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: block;
  min-height: 400px;
  background-color: #232c30;
  padding-top: 60px;
  padding: 90px 30px 70px;
}
.container {
  max-width: 1200px;
  text-align: center;
  margin: auto;
}
.flex-container {
  margin: 0 auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: top;
  text-align: left;
    letter-spacing: 0.2vh;
}
.flex-container-profile {
  margin: 0 auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: top;
  text-align: left;
  flex-direction: row;
}
.flex-container-info {
  margin: 60px auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: top;
  text-align: left;
  flex-direction: row;
}
.flex-item-left {
  flex: 1;
  padding: 0 0 0 5%;
  color: #fff;
}
.flex-item-right {
  flex: 1.5;
  padding: 0 5%;
  color: #fff;
}
.flex-item-img {
  flex: 1;
}
.flex-item-profile {
  flex: 1.8;
  padding-left: 40px;
}
.flex-item-biography {
  flex: 1;
}
.flex-item-attribute {
  flex: 1;
  padding-top: 5px;
  padding-right: 20px;
}
.flex-item-value {
  flex: 2;
  padding: 5px 0 0 50px;
  border-left: solid 1px #677075;
}
.footer-logo {
  width: 100px;
  float: left;
}
.profile-title {
  font-size: 14px;
  padding-bottom: 30px;
}
.profile-name {
  font-size: 12px;
  padding-bottom: 5px;
}
.profile-name-sub {
  font-size: 10px;
}
.message {
  margin-top: 30px;
}
.attribute-en {
  font-size: 12px;
  padding-bottom: 5px;
  line-height: 1.5;
}
.attribute-jp {
  font-size: 10px;
  padding-bottom: 5px;
}
.value {
  font-size: 12px;
  padding-bottom: 5px;
  line-height: 1.5;
}
.info-box {
  height: 70px;
}
.biography-en {
  font-size: 12px;
  padding-bottom: 5px;
}
.biography-jp {
  font-size: 10px;
}
@media screen and (max-width:480px) {
  .flex-container {
    flex-direction: column;
  }
}
</style>