const recommended = [ 
  '『公式ですけど』',
  '『要らね～』',
  '『二次創作は幻覚でしょうが』',
  '『知らんけど』',
  '『人の心が無い』',
  '『違うと思う』',
  '『ムカつく～！』',
  '『ノーコメントで』',
  '『どの膳だよ』',
  '『ちょっと待って』',
  '『ちょっと待った』',
  '『そんなわけなくない？』',
  '『おつかれー(冷)』',
  '『イエーイ(激低)』',
  '『はいよーいスタート』',
];
var btn = document.getElementById('btn');


btn.addEventListener('click', function() {
  
    console.log('クリックされました！');
  
}, false);
function randomvoice(){
  console.log("ボタンが押されました");
const random = Math.floor(Math.random() * recommended.length);
  document.getElementById("recommended").innerText = "recommended[random]";
}
