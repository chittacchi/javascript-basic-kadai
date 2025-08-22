const btn = document.getElementById('btn');// ボタンの要素を取得
const text = document.getElementById('text');// id="text"のh2要素を取得

btn.addEventListener('click', () => {
   text.textContent='ボタンをクリックしました';// h2要素のテキストを変更
}); 