<template>
  <div class="header">
    <div class="container">
      <p class="name">TAKETO NAKASUJI</p>
      <p class="role">TECH Consulting & Engineering</p>
    </div>
    <div class="flex-container">
      <div class="flex-item">
        <img src="images/logo_white.png" alt="logo_white">
        <p class="message">経営課題を技術で解決する。</p>
        <p class="message-sub">Resolve Management issues by tech.</p>
      </div>
      <div class="flex-item">
        <ul class="service-list">
          <li><a class="content-link" href="#services">SERVICES</a></li>
          <li><a class="content-link" href="#cases">CASES</a></li>
          <li><a class="content-link" href="#profiles">PROFILES</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: block;
  height: 100vh;
  background-color: #2a3134;
  background-image: url("/images/bglogo.png");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.container {
  max-width: 1200px;
  margin: auto;
  padding: 50px 30px 10px 30px;
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
  max-width: 750px;
  height: 85vh;
  margin: 0 auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-item {
  flex: 1;
  padding: 0 30px 0 30px;
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
.service-list li {
  display: inline-block;
  color: #FFFFFF;
  width: 33%;
  font-size: 16px;
  text-align: center;
  letter-spacing: 1px;
}
.content-link {
  color: #FFFFFF;
  text-decoration: none;
  letter-spacing: 1.8px;
}
@media screen and (max-width:768px) {
  .flex-container {
    flex-wrap: wrap;
    flex-direction: row;
  }
  .flex-item {
    min-width: 360px;
  }
  .flex-container img {
    width: 180px;
  }
}
@media screen and (max-width:480px) {
  .flex-container {
    flex-wrap: wrap;
    flex-direction: row;
    height: 400px;
    padding-top: 30px;
  }
  .flex-item {
    min-width: 360px;
  }
  .flex-container img {
    width: 140px;
  }
  .flex-container p {
    font-size: 12px;
  }
  .flex-container li {
    font-size: 12px;
  }
  .name {
    font-size: 12px;
  }
  .role {
    font-size: 8px;
  }
}
</style>

