var vm = new Vue({
    el: "#app",
    data: {
      attr1: 1,
      joke: "笑话",
    },
    methods: {
      getJoke: function () {
        console.log(this.attr1);
        var that = this;
        "http://wthrcdn.etouch.cn/weather_mini";
        axios.get("https://autumnfish.cn/api/joke/list?num=3").then(
          function (response) {
            console.log(response);
            that.joke=response.data.jokes[0];
          },
          function (err) {
            console.log(err);
          }
        );
      },
    },
  });