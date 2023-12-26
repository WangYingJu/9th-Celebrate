$(function () {
  // ham icon 漢堡選單
  $(".ham-icon").click(function (e) {
    e.preventDefault();
    $(".dropdown").toggleClass("active");
  });

  $(".dropdown li a").click(function (e) {
    $(".dropdown").toggleClass("active");
  });

  // $("body").click(function (e) {
  //   $(".dropdown").removeClass("active");
  // });
});

$("body").click(function (e) {
  var container = $(".dropdown");
  var btn = $(".ham-icon");
  // 判斷點擊的地方不是DIV或按鈕
  if (
    !container.is(e.target) &&
    !container.has(e.target).length &&
    !btn.is(e.target) &&
    !btn.has(e.target).length
  ) {
    container.removeClass("active");
  }
});

// 彩帶
console.clear();

const app = {
  data() {
    return {
      total: 30,
      w: window.innerWidth,
      h: window.innerHeight,
    };
  },
  mounted() {
    let page = document.querySelector(".page"); // 取得場景

    // 產生數量
    for (let i = 0; i < this.total; i++) {
      let leaf = document.createElement("div"); // 創建一個div給物件
      // 設定產生物件的位置
      gsap.set(leaf, {
        attr: {
          class: "dot",
        },
        x: this.r(0, this.w),
        y: this.r(-200, 150),
        z: this.r(-200, 200),
      });
      page.appendChild(leaf);
      this.anim(leaf);
    }
  },
  methods: {
    r(min, max) {
      return min + Math.random() * (max - min);
    },
    anim(el) {
      gsap.to(el, this.r(6, 15), {
        y: this.h + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -15,
      });

      gsap.to(el, this.r(4, 8), {
        x: "+=100",
        rotationZ: this.r(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
      });

      gsap.to(el, this.r(2, 8), {
        rotationY: this.r(0, 360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5,
      });
    },
  },
};

Vue.createApp(app).mount("#app");

// loading
// imitation of new page loading
window.onload = function () {
  ($body = $("body")), ($btn = $(".btn"));

  loader(10);

  $btn.on("click", function () {
    $body.removeClass().addClass("restart");
    loader(getRandomNumber(300, 3000));
  });

  function loader(delay) {
    setTimeout(function () {
      $body.addClass("loading");
    }, delay);

    setTimeout(function () {
      $body.addClass("loaded");
    }, delay + 1700);

    setTimeout(function () {
      $body.removeClass("restart").addClass("new-page");
    }, delay + 1950);
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
