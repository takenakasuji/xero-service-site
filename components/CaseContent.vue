<template>
  <div class="wrapper">
    <div class="container">
      <p class="content-title">CASES</p>
      <div class="flex-container">
        <div class="flex-item case_one">
          <div>
            <p class="case-title">CLIENT</p>
            <p class="case-detail">フォトグラファーマッチングサービス</p>
          </div>
          <div>
            <p class="case-title">SERVICE</p>
            <p class="case-detail">技術顧問</p>
          </div>
          <div>
            <p class="case-title">DETAIL</p>
            <p class="case-detail">技術顧問 / アーキテクチャレビュー / 技術教育 など</p>
          </div>
        </div>
        <div class="flex-item case_two">
          <div>
            <p class="case-title">CLIENT</p>
            <p class="case-detail">マーケティングコンサルティング会社</p>
          </div>
          <div>
            <p class="case-title">SERVICE</p>
            <p class="case-detail">技術顧問 / アプリケーション開発 / インフラ構築</p>
          </div>
          <div>
            <p class="case-title">DETAIL</p>
            <p class="case-detail">サービス立ち上げ時のアーキテクチャ設計 / 技術相談 / BI構築 / 分析基盤構築 など</p>
          </div>
        </div>
        <div class="flex-item case_three">
          <p class="case-title">CLIENT</p>
          <p class="case-detail">アプリケーション開発会社</p>
          <p class="case-title">SERVICE</p>
          <p class="case-detail">インフラ構築</p>
          <p class="case-title">DETAIL</p>
          <p class="case-detail">コンシューマー向けの商用サービスの各種サーバ構築</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: block;
  background-color: #2a3134;
  background-image: url("/images/cases_background.png");
  background-size: 140%;
  background-position: center 80px;
  background-repeat: no-repeat;
  padding-top: 90px;
  padding-bottom: 70px;
  height: 600px;
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
  max-width: 1200px;
  min-height: 600px;
  margin: 0 auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: top;
  text-align: left;
  margin-top: 50px;
}
.flex-item {
  flex: 1;
  padding: 40px 80px 0 80px;
  color: #fff;
}
.case_one {
  background-image: url("/images/case_01.png");
  background-position: center 0px;
  background-size: contain;
  background-repeat: no-repeat;
}
.case_two {
  background-image: url("/images/case_02.png");
  background-position: center 0px;
  background-size: 100%;
  background-repeat: no-repeat;
}
.case_three {
  background-image: url("/images/case_03.png");
  background-position: center 0px;
  background-size: 100%;
  background-repeat: no-repeat;
}
.case-title {
  font-size: 12px;
  padding-bottom: 10px;
}
.case-detail {
  font-size: 14px;
  padding-bottom: 40px;
  line-height: 1.5;
}
</style>