// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let p;
let i;
let n;
// そのほか，必要に応じて変数を宣言してもよい

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu = kaisu +1;
  p = document.querySelector('span#kaisu');
  p.textContent = kaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso;
  i = document.querySelector('input[name="shimei"]'); 
  yoso = i.value
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  n = document.querySelector('p#result');
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する
  if(Number(yoso)===kotae && kaisu<4){
    n.textContent = '正解です. おめでとう!';
  }else if(kaisu===3){
    n.textContent = 'まちがい. 残念でした答えは'+kotae+'です.';
  }else if(Number(yoso)<kotae && kaisu<4){
    n.textContent = 'まちがい. 答えはもっと大きいですよ';
  }else if(Number(yoso)>kotae && kaisu<4){
    n.textContent = 'まちがい. 答えはもっと小さいですよ';
  }else if(kaisu>=4){
    n.textContent = '答えは'+kotae+'でした. すでにゲームは終わっています';
  }
  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let b = document.querySelector('button#kekka'); 
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
b.addEventListener('click', hantei); 