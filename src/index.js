import './style.css';
import dataJSON from './data.json';

window.addEventListener('DOMContentLoaded', () => {
  const table = document.createElement('table');
  let tableData = '<tr id="base"><td id="sort_id">id</td><td id="sort_title">title</td><td id="sort_year">year</td><td id="sort_imdb">imdb</td></tr>';
  dataJSON.forEach(
    (dataObj) => {
      tableData += 
        `<tr data-id="${dataObj.id}" data-title="${dataObj.title}" data-year="${dataObj.year}" data-imdb="${dataObj.imdb}">
          <td>${dataObj.id}</td>
          <td>${dataObj.title}</td>
          <td>${dataObj.year}</td>
          <td>imdb: ${dataObj.imdb.toFixed(2)}</td>
        </tr>`;
    }
  );
  table.innerHTML = tableData;
  document.body.insertAdjacentElement('afterbegin', table);

  let clickCount = 0; // 0 - Standart 1 - Прямая 2 - Обратная
  const idStandart = Array.from(document.getElementsByTagName('tr'));
  document.getElementById('sort_id').addEventListener('click', (e) => {
    if (clickCount === 2) clickCount = 0; else clickCount += 1;
    let id = [];
    document.getElementsByTagName('tr').forEach((el) => el.dataset.id && id.push(el.dataset.id));
    if (clickCount === 0) {
      idStandart.forEach((el, index) => index !== 0 && idStandart[index-1].insertAdjacentElement('afterend', el));
      e.target.removeAttribute('class');
    } else {
      if (clickCount === 2) {
        e.target.classList.remove('arrow_bottom');
        e.target.classList.add('arrow_top');
      } else {
        e.target.classList.remove('arrow_top');
        e.target.classList.add('arrow_bottom')
      }
      let data = Array.from(document.getElementsByTagName('tr')).sort((prev, next) =>
                  clickCount === 1 ? next.dataset.id - prev.dataset.id : prev.dataset.id - next.dataset.id);
      data.forEach(el => el.id !== 'base' && data[0].insertAdjacentElement('afterend', el));
    }
  });
});
