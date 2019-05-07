// 最初にuse strictと書くことで、ブラウザが厳密なエラーチェックをしてくれる
'use strict';

const num = 5;
// Math.random() * numで 0 - num の数値が返り、
// これをMath.floorで囲めばmunの最大値-1の値がランダムで返って来る
const winner = Math.floor(Math.random() * num);

// for文を使い要素を増やしていく
for (let i = 0; i < num; i++) {
    // document.createElement();で動的に要素を作る
    const div = document.createElement('div');
    // classList.add();でクラス要素を作成（今回なら<div class="box">）
    div.classList.add('box');
    // dataset.resultの結果で処理を分ける（文字列であることに注意）
    if (i === winner) {
        div.dataset.result = '0';
    } else {
        div.dataset.result = '1';
    }
    // addEventListener();でイベント処理実行
    div.addEventListener('click', function() {
        // テキストにメッセージを追加しclassを追加（結果によって変える）
        if (div.dataset.result === '0') {
            div.textContent = 'win!';
            div.classList.add('win');
        } else {
            div.textContent = 'lose!';
            div.classList.add('lose');
        }

        // div.classList.toggle('circle');
    });
    // 上記処理をブラウザに表示させるため、bodyの小要素としてdivを呼び出す
    document.body.appendChild(div);
}


/* 
何度も使う命令文は、定数を定義しメンテンス性を高める
const target1 = document.getElementById('target1');

target1.addEventListener('click', function() {
    // toggleメソッドでclickした時に、circleを表示したり非表示にしたりする
    target1.classList.toggle('circle');
});
*/