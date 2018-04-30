<template>
  <div class="header">
    <div class="container">
      <p class="name">TAKETO NAKASUJI</p>
      <p class="role">TECH Consulting & Engineering</p>
    </div>
    <div class="flex-container">
      <div class="flex-item-left">
        <img src="images/logo_white.png" alt="logo_white">
        <p class="message">経営課題を技術で解決する。</p>
        <p class="message-sub">Resolve Management issues by tech.</p>
      </div>
      <div class="flex-item-right">
        <ul class="service-list">
          <li>SERVICES</li>
          <li>CASES</li>
          <li>PROFILE</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: block;
  background-color: #2a3134;
  background-image: url("/images/bglogo.png");
  background-size: 110%;
  background-attachment: fixed;
  background-position: -150px -110px;
  background-repeat: no-repeat;
}
.container {
  width: 1200px;
  margin: auto;
  padding: 50px 12px 10px 12px;
}
.name {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 4.16px;
}
.role {
  color: #fff;
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 3.2px;
  padding-top: 5px;
}
.flex-container {
  width: 750px;
  height: 600px;
  margin: 0 auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-item-left {
  flex: 1;
}
.flex-item-right {
  flex: 1;
}
.message {
  padding-top: 15px;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 2px;
}
.message-sub {
  padding-top: 5px;
  font-size: 16px;
  color: #68757a;
}
.flex-container img {
  width: 250px;
}
.service-list ul {
  font-size: 0px;
}
.service-list li {
  display: inline-block;
  color: #FFFFFF;
  width: 33%;
  font-size: 16px;
  text-align: center;
}
@media screen and (min-width:600px){
  body{
    p: blue;
  }
}
</style>

