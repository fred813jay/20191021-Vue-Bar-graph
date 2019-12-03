var datas = [];
var elements = [];
function generateData(){
  var temp = [];
  for(let i=0;i<10;i++){
    temp.push({value: parseInt(Math.random()*10)+5});
  }
  return temp;
}
datas = generateData();

var vm = new Vue({
  el: "#app",
  data: {
    datas: datas,
    checked: false,
  },
  methods: {
    gen_style(data){
      return {
        "height": data*20+"px",
        "background-color": "rgb("+data*10+","+data*10+","+data*10+")"
      };
    },
    ST() {
      var timer = null
      this.timer = setInterval(() => {
        datas = generateData()
        vm.datas = datas;
      },800);
    },
    auto(checked){
      if(checked == true){
        this.ST();
      }
      if (checked == false) {
        clearInterval(this.timer);
      }
    },
  },
})

//自動更新
// var ST = setInterval(()=>{
//   datas = generateData()
//   vm.datas = datas;
// },800);