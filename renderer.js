const axios = require('axios');

document.addEventListener('DOMContentLoaded', () => {
  const fetchDataButton = document.getElementById('fetchData');
  const dataList = document.getElementById('dataList');

  fetchDataButton.addEventListener('click', async () => {
    try {
      // ダミーAPIのURL
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments'); 
      
      // 必要なデータを抽出（例: 名前、コメント、金額として適当に加工）
      const data = response.data.slice(0, 10).map((item, index) => ({
        name: item.name,
        comment: item.body,
        amount: (index + 1) * 1000 // ダミー金額
      }));

      // データをリストに表示
      dataList.innerHTML = '';
      data.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${item.name}</strong>: ${item.comment} (金額: ${item.amount}円)`;
        dataList.appendChild(div);
      });
    } catch (error) {
      console.error('データの取得に失敗しました:', error);
      dataList.innerHTML = '<p style="color:red;">データの取得に失敗しました。</p>';
    }
  });
});
