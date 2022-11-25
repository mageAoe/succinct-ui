<template>
  <div class="simple-card">
    <div class="container">
      <div
        class="box"
        v-for="item in data"
        :key="item.color"
        :style="item.color"
      >
        <div class="content">
          <div class="icon" v-html="item.icon"></div>
          <div class="text">
            <h3>{{ item.title }}</h3>
            <p>
              {{ item.content }}
            </p>
            <a href="http://www.webqdkf.com" target="_blank">了解更多</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleCard",
  components: {},
  data: () => ({
    data: [
      {
        color: "--clr:#00a6bc",
        title: "UI设计",
        content:
          "UI设计（或称界面设计）UI即User Interface(用户界面)的简称，它分为实体UI和虚拟UI，互联网常用的UI设计是虚拟UI。",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet"viewBox="0 0 24 24"><path fill="currentColor" d="M6 2a4 4 0 0 1 4 4v2h4V6a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-2v4h2a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4v-2h-4v2a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4h2v-4H6a4 4 0 0 1-4-4a4 4 0 0 1 4-4m10 16a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2v2m-2-8h-4v4h4v-4m-8 6a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2v-2H6M8 6a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2h2V6m10 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2h2Z"/></svg>',
      },
      {
        color: "--clr:#f75bea",
        title: "前端开发",
        content:
          "前端开发,是通过HTML，CSS及JavaScript以及衍生出来的各种技术、框架、解决方案，来实现互联网产品的用户界面交互。",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M4.22 4.22C5.65 2.79 8.75 3.43 12 5.56c3.25-2.13 6.35-2.77 7.78-1.34c1.43 1.43.79 4.53-1.34 7.78c2.13 3.25 2.77 6.35 1.34 7.78c-1.43 1.43-4.53.79-7.78-1.34c-3.25 2.13-6.35 2.77-7.78 1.34c-1.43-1.43-.79-4.53 1.34-7.78c-2.13-3.25-2.77-6.35-1.34-7.78m11.32 4.24c.61.62 1.17 1.25 1.69 1.88c1.38-2.13 1.88-3.96 1.13-4.7c-.74-.75-2.57-.25-4.7 1.13c.63.52 1.26 1.08 1.88 1.69m-7.08 7.08c-.61-.62-1.17-1.25-1.69-1.88c-1.38 2.13-1.88 3.96-1.13 4.7c.74.75 2.57.25 4.7-1.13c-.63-.52-1.26-1.08-1.88-1.69m-2.82-9.9c-.75.74-.25 2.57 1.13 4.7c.52-.63 1.08-1.26 1.69-1.88c.62-.61 1.25-1.17 1.88-1.69c-2.13-1.38-3.96-1.88-4.7-1.13m4.24 8.48c.7.7 1.42 1.34 2.12 1.91c.7-.57 1.42-1.21 2.12-1.91c.7-.7 1.34-1.42 1.91-2.12c-.57-.7-1.21-1.42-1.91-2.12c-.7-.7-1.42-1.34-2.12-1.91c-.7.57-1.42 1.21-2.12 1.91c-.7.7-1.34 1.42-1.91 2.12c.57.7 1.21 1.42 1.91 2.12m8.48 4.24c.75-.74.25-2.57-1.13-4.7c-.52.63-1.08 1.26-1.69 1.88c-.62.61-1.25 1.17-1.88 1.69c2.13 1.38 3.96 1.88 4.7 1.13Z"/></svg>',
      },
      {
        color: "--clr:#e9ca18",
        title: "后端开发",
        content:
          "后端开发即“服务器端”开发，主要涉及软件系统“后端”的东西。比如，用于托管网站、App数据的服务器、放置在后端服务器与浏览器。",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M18.36 2.64c1.64 0 3 1.36 3 3c0 1.65-1.36 3-3 3c-1.65 0-3-1.35-3-3c0-.3.05-.58.14-.84c-1.07-.51-2.25-.8-3.5-.8a8 8 0 0 0-8 8l.04.84l-1.99.21L2 12A10 10 0 0 1 12 2c1.69 0 3.28.42 4.67 1.16c.49-.33 1.07-.52 1.69-.52m0 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1c.56 0 1-.45 1-1c0-.56-.44-1-1-1M5.64 15.36c1.65 0 3 1.35 3 3c0 .3-.05.58-.14.84c1.07.51 2.25.8 3.5.8a8 8 0 0 0 8-8l-.04-.84l1.99-.21L22 12a10 10 0 0 1-10 10c-1.69 0-3.28-.42-4.67-1.16c-.49.33-1.07.52-1.69.52c-1.64 0-3-1.36-3-3c0-1.65 1.36-3 3-3m0 2c-.56 0-1 .45-1 1c0 .56.44 1 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M12 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4Z"/></svg>',
      },
    ],
  }),
};
</script>

<style lang="less" scoped>
.simple-card {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #666;
}
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
  padding: 50px 0;
}

.container .box {
  position: relative;
  width: 300px;
  height: 350px;
  background: #2e2e2e;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .box::before {
  content: "";
  position: absolute;
  border-top: 4px solid var(--clr);
  border-bottom: 4px solid var(--clr);
  inset: -10px 50px;
  z-index: -2;
  transform: skewY(15deg);
  transition: 0.5s ease-in-out;
}
.container .box:hover::before {
  transform: skew(0deg);
  inset: -10px 40px;
}
.container .box::after {
  content: "";
  position: absolute;
  border-left: 4px solid var(--clr);
  border-right: 4px solid var(--clr);
  inset: 60px -10px;
  z-index: -1;
  transform: skew(15deg);
  transition: 0.5s ease-in-out;
}
.container .box:hover::after {
  transform: skew(0deg);
  inset: 40px -10px;
}
.container .box .content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  padding: 0 20px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.container .box .content .icon {
  color: var(--clr);
  font-size: 2.5em;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2e2e2e;
  color: var(--clr);
  transition: 0.5s ease-in-out;
  box-shadow: 0 0 0 4px #2e2e2e, 0 0 0 6px var(--clr);
}
.container .box:hover .content .icon {
  color: #2e2e2e;
  background: var(--clr);
  box-shadow: 0 0 0 4px #2e2e2e, 0 0 0 300px var(--clr);
}
.container .box .content .text h3 {
  font-size: 1.5em;
  color: #fff;
  font-weight: 500;
  transition: 0.5s ease-in-out;
}
.container .box:hover .content .text h3 {
  color: #2e2e2e;
}
.container .box .content .text p {
  color: #777;
  transition: 0.5s ease-in-out;
}
.container .box:hover .content .text p {
  color: #333;
}
.container .box .content .text a {
  position: relative;
  background: var(--clr);
  color: #2e2e2e;
  padding: 8px 15px;
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  margin-top: 10px;
  transition: 0.5s ease-in-out;
}
.container .box:hover .content .text a {
  background: #2e2e2e;
  color: var(--clr);
}
</style>
