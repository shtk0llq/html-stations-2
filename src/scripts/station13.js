function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const textElement = document.getElementById('text');

  if (e.target.checked) {
    textElement.style.backgroundColor = 'red';
  } else {
    textElement.style.backgroundColor = '';
  }
}
