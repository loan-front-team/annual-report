import React from 'react';

// function ood() {
//   return (new Date()).getTime() >= (new Date('2018/01/07 06:00:00')).getTime();
// }

const data = {
  // button: ood() ? '直播已结束' : '01.06 线上同步直播', // 立即报名
  code: '',
  url: 'https://render.alipay.com/p/w/seeconftwa/www/enrol.html',
  pre_url: 'https://render-pre.alipay.com/p/w/seeconftwa/www/enrol.html',
  schemeUrl: 'https://ds.alipay.com/?scheme=alipays%3A%2F%2Fplatformapi%2Fstartapp%3FappId%3D20000067%26url%3Dhttps%253A%252F%252Frender.alipay.com%252Fp%252Fw%252Fseeconftwa%252Fwww%252Fenrol.html%253F__webview_options__%253D',
  pre_schemeUrl: 'https://ds.alipay.com/?scheme=alipays%3A%2F%2Fplatformapi%2Fstartapp%3FappId%3D20000067%26url%3Dhttps%253A%252F%252Frender-pre.alipay.com%252Fp%252Fw%252Fseeconftwa%252Fwww%252Fenrol.html%253F__webview_options__%253D',
  banner: {
    enName: [
      <span key="1"> FRONT TEAM</span>,
    ],
    title: '贷款组前端团队2017回顾',
    cnName: '探索极致用户体验与最佳工程实践',
    // time: `${ood() ? '大会已结束' : '报名已截止'}，非常感谢你的关注`, // 2018.01.06  ／  中国  ·  杭州
  },
  page1: {
    title: '普惠新老系统',
    coming: '坐席操作体验对比',
    row: [
      { src: 'https://gw.alipayobjects.com/zos/rmsportal/cwTbPCIZjulrwvwEkUhh.jpg', name: '胡喜(阿玺)', post: '蚂蚁金服 副总裁' },
      { src: 'https://gw.alipayobjects.com/zos/rmsportal/DXoDyCKYjbyDvJuzKBHX.png', name: '刘平川(rank)', post: '美团 高级技术总监 业务负责人' },
      { src: 'https://gw.alipayobjects.com/zos/rmsportal/piumyrtFBPEsVoiCMdmj.png', name: '林建锋(sofish)', post: '饿了么 大前端部门负责人' },
      { src: 'https://gw.alipayobjects.com/zos/rmsportal/yGhGYYMpjSTXQvEyuOne.png', name: '贺师俊(hax)', post: '百姓网 资深前端架构师' },
      { src: 'https://gw.alipayobjects.com/zos/rmsportal/sKMURYAmOmTyHuGHyqNk.png', name: '张克军(kejun)', post: '豆瓣 资深前端工程师' },
      { src: 'https://gw.alipayobjects.com/zos/rmsportal/GwoUxWfYSluTQVRmpKri.png', name: '石玉磊(佩玉)', post: '钉钉 资深技术专家' },
      { src: 'https://gw.alipayobjects.com/zos/rmsportal/iruQsZNououMqfkKvUxe.jpg', name: '梁山鹰(隼飞)', post: '支付宝 UED 负责人' },
      { src: 'https://gw.alipayobjects.com/zos/rmsportal/HwKTQOSxbYuwYQIqeczd.jpg', name: '王保平(玉伯)', post: '蚂蚁金服 体验技术部负责人' },
    ],
  },
  page2: {
    title: '技术变革历程',
    timeline: [
      {
        src: '/assets/images/1.jpg',
        name: '老CTS',
        post: '基于jsp的前端实现',
        time: '2016.12 - 2017.03',
        title: '没有专职前端',
        content: ['基于业务的需求文档，从前端到后端数据库单人完成'],
      },
      {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
        name: 'NTMS系统',
        post: '前后端分离, 前端工程化',
        time: '2017.04 - 2017.10',
        title: '专业的人做专业的事',
        content: ['新的工作模式：基于系统原型的需求讲解业务，大大降低沟通成本，开发对需求的理解更形象，全面。', '新的开发模式：职责分离，技术分离，带来的用户体验提升，业务理解解构。前端工程化实现前端自动化构建，部署，同时提高开发效率，是前端项目更易维护，管理。', '新的思考模式：不在基于原有一体化WEB开发模式来思考，技术人员从复杂技术组合中解放，更关注于自己擅长领域开发探索。', '新的挑战：前后端测试，接口的设计，接口的主导，团队的沟通交流要求更高，前后端团队必须设计同一套相对稳定web API, 要求接口不止存在于人的记忆中，更要文档化，持久化。'],
      },
      {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
        name: '对接产品组的合作',
        post: '从寿险大屏到DBOX',
        time: '2017.11 - 至今',
        title: '大屏，组件化，高可复用',
        content: [{
          text: '寿险大屏',
          link: 'http://10.20.9.80:8080/goodstart/index.html',
        },
        {
          text: 'DBOX组件',
          link: 'http://10.20.9.80:8080/goodstart/index.html',
        }],
      },
      {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
        name: '移动端的尝试',
        post: 'H5营销，金服好贷APP',
        time: '2017.12 - 至今',
        title: '移动端',
        content: ['H5活动营销', '平安好贷hybrid APP'],
      },
    ],
  },
  page4: {
    title: '更多的精彩期待2018',
    content: '更多的精彩期待2018',
    content2: '更多的精彩期待2018',
  },
  page3: {
    title: '',
    content: '',
  },
  page5: {
    title: '探索 · 看见',
  },
  page6: {
    title: '赞助商',
    block: [
      'https://gw.alipayobjects.com/zos/rmsportal/TFicUVisNHTOEeMYXuQF.svg', /* 知几基因 */
      'https://gw.alipayobjects.com/zos/rmsportal/hkLGkrlCEkGZeMQlnEkD.svg', /* 云凤蝶 */
      'https://gw.alipayobjects.com/zos/rmsportal/bqyPRSZmhvrsfJrBvASi.svg', /* 图灵 */
      'https://gw.alipayobjects.com/zos/rmsportal/UcsyszzOabdCYDkoPPnM.svg', /* 彩虹心愿 */
      'https://gw.alipayobjects.com/zos/rmsportal/kRBeaICGexAmVjqBEqgw.svg', /* Broadview */
      'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg', /* 天猫精灵 */
      // 'https://gw.alipayobjects.com/zos/rmsportal/shccivlkqhhTiveGIbGf.png', /* 知几基因 */
      // 'https://gw.alipayobjects.com/zos/rmsportal/pwEEAfsqMfvIxMXdrHal.png', /* 云凤蝶 */
      // 'https://gw.alipayobjects.com/zos/rmsportal/VYcbssnWgkrPdIuCuePC.png', /* 图灵 */
      // 'https://gw.alipayobjects.com/zos/rmsportal/nAqbXOvjFNgZfFOIuIZx.png', /* 彩虹心愿 */
      // 'https://gw.alipayobjects.com/zos/rmsportal/hFdquOcmEcuLcHzYGKXS.png', /* Broadview */
      // 'https://gw.alipayobjects.com/zos/rmsportal/eDqDArYKxFMFbTrSrveb.png', /* 天猫精灵 */
    ],
  },
  footer: {
    name: 'Copyright ©  贷款组前端',
    logoName: '贷款组前端团队2017回顾',
  },
};

export default data;

// image 预加载，避逸出不了图;
const div = document.createElement('div');
div.style.display = 'none';
document.body.appendChild(div);
function loadImage(src) {
  const img = new Image();
  img.src = src;
  div.appendChild(img);
}
let imageArray = [];

function mapImage(d) {
  d.forEach((item) => {
    item.forEach((c) => {
      imageArray.push(c.src);
    });
  });
}
mapImage([data.page1.row, data.page2.timeline]);
imageArray = imageArray.concat(data.page6.block, 'https://gw.alipayobjects.com/zos/rmsportal/CPGuYZxqYoqLAeBUknUd.png');
imageArray.forEach((src) => {
  loadImage(src);
});
