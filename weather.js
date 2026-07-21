
let id; //入力された都市名

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let old = document.querySelector("#result"); 
  if (old) { 
    old.remove(); 
  } 
  let div = document.createElement('div');
  let body = document.querySelector('body');
  body.insertAdjacentElement('beforeend', div);
  div.setAttribute('id', 'result');

  let u = document.createElement('ul');
  div.insertAdjacentElement('beforeend', u);

  if (document.querySelector("#city").checked) {
    let li = document.createElement("li");
    li.textContent = "都市名：" + data.name;
    u.insertAdjacentElement('beforeend', li);
  }
  if (document.querySelector("#lat").checked) {
    let li = document.createElement("li");
    li.textContent = "緯度：" + data.coord.lat;
    u.insertAdjacentElement('beforeend', li);
  }
  if (document.querySelector("#lon").checked) {
    let li = document.createElement("li");
    li.textContent = "経度：" + data.coord.lon;
    u.insertAdjacentElement('beforeend', li);
  }
   if (document.querySelector("#weather").checked) {
    let li = document.createElement("li");
    li.textContent = "天気：" + data.weather[0].description;
    u.insertAdjacentElement('beforeend', li);
  }
  if (document.querySelector("#temp").checked) {
    let li = document.createElement("li");
    li.textContent = "気温：" + data.main.temp + " ℃";
    u.insertAdjacentElement('beforeend', li);
  }
  if (document.querySelector("#temp_min").checked) {
    let li = document.createElement("li");
    li.textContent = "最低気温：" + data.main.temp_min;
    u.insertAdjacentElement('beforeend', li);
  }
  if (document.querySelector("#temp_max").checked) {
    let li = document.createElement("li");
    li.textContent = "最高気温：" + data.main.temp_max;
    u.insertAdjacentElement('beforeend', li);
  }
  if (document.querySelector("#humidity").checked) {
    let li = document.createElement("li");
    li.textContent = "湿度：" + data.main.humidity;
    u.insertAdjacentElement('beforeend', li);
  }
  if (document.querySelector("#speed").checked) {
    let li = document.createElement("li");
    li.textContent = "風速：" + data.wind.speed;
    u.insertAdjacentElement('beforeend', li);
  }
  if (document.querySelector("#deg").checked) {
    let li = document.createElement("li");
    li.textContent = "風向：" + data.wind.deg;
    u.insertAdjacentElement('beforeend', li);
  }

  let img = document.createElement("img");
  img.width = 300;

  if (id === 360630) {
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3_9Eada3d-XkfRd_v8KAnGll9IsV1x9uvqnz6hy7kQ&s=10';
  } else if (id === 524901) {
    img.src = 'https://dol.ismcdn.jp/mwimgs/d/e/-/img_60566193d774cf8fe9ca29e12f06591e286416.jpg';
  } else if (id === 993800) {
    img.src = 'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltaf0ccbb8ac3870bc/6878ad7053a3363f4054ace8/iStock-813195980-header_mobile.jpg?fit=crop&auto=webp&quality=60&crop=smart&format=avif';
  } else if (id === 1816670) {
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6AB9A7CV1vL9usxiaqajmml_rp5atsGlp1xjrashKQ&s=10';
  } else if (id === 1850147) {
    img.src = 'https://www.gotokyo.org/jp/destinations/eastern-tokyo/images/area024_1000_78.jpg';
  } else if (id === 1880252) {
    img.src = 'https://www.veltra.com/jp/guide/wp-content/uploads/2023/10/pixta_40776811_M.jpg';
  } else if (id === 2147714) {
    img.src = 'https://img-www.knt.co.jp/travelguide/kaigai/image/travelguide_020_mv.png';
  } else if (id === 2643743) {
    img.src = 'https://d21hrr2lgpdozs.cloudfront.net/image/column/org/80fea044de7ba14652cafc730454f75d.jpeg';
  } else if (id === 2968815) {
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4qsJ1UenfU-JqVudcbrKPYeTFQXrVyCheAQlbz3uKSg&s=10';
  } else if (id === 3451189) {
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1WjXPIinmu1NFyT51dw-z8LdSulx91bKr9YD-V2mtaw&s=10';
  } else if (id === 5128581) {
    img.src = 'https://www.kkday.com/ja/blog/wp-content/uploads/america-usa-new-york-must-do.jpg';
  } else if (id === 5368361) {
    img.src = 'https://www.veltra.com/jp/guide/wp-content/uploads/2023/10/pixta_86309750_M.jpg';
  }
  div.insertAdjacentElement("beforeend", img);
}


let button = document.querySelector('button#kekka');
button.addEventListener('click', sendRequest);
// 課題6-1 のイベントハンドラ登録処理は以下に記述



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let i = document.querySelector('input[name="shimei"]');
  let name = i.value;  
  if(name === 'カイロ'){
    id = 360630;
  }
  if(name === 'モスクワ'){
    id = 524901 ;
  }
  if(name === 'ヨハネスブルグ'){
    id = 993800;
  }
  if(name === '北京'){
    id = 1816670;
  }
  if(name === '東京'){
    id = 1850147;
  }
  if(name === 'シンガポール'){
    id = 1880252;
  }
  if(name === 'シドニー'){
    id = 2147714;
  }
  if(name === 'ロンドン'){
    id = 2643743;
  }
  if(name === 'パリ'){
    id = 2968815;
  }
  if(name === 'リオデジャネイロ'){
    id = 3451189;
  }
  if(name === 'ニューヨーク'){
    id = 5128581;
  }
  if(name === 'ロサンゼルス'){
    id = 5368361;
  }
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+ id +'.json';

  axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
        }

    // data をコンソールに出力
    console.log(data);
    // data.x を出力
    console.log(data.x);

    printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

