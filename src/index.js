import './style.css';
import dataJSON from './data.json';

window.addEventListener('DOMContentLoaded', () => {
  const table = document.createElement('table');
  let tableData = '<tr id="base"><td id="sort_id">id</td><td id="sort_title">title</td><td id="sort_year">year</td><td id="sort_imdb">imdb</td></tr>';
  dataJSON.forEach(
    (dataObj) => {
      tableData
        += `<tr data-id="${dataObj.id}" data-title="${dataObj.title}" data-year="${dataObj.year}" data-imdb="${dataObj.imdb}">
          <td>${dataObj.id}</td>
          <td>${dataObj.title}</td>
          <td>(${dataObj.year})</td>
          <td>imdb: ${dataObj.imdb.toFixed(2)}</td>
        </tr>`;
    },
  );
  table.innerHTML = tableData;
  document.body.insertAdjacentElement('afterbegin', table);

  const idStandart = Array.from(document.getElementsByTagName('tr'));

  let clickIdCount = 0; // 0 - Standart 1 - Прямая 2 - Обратная
  document.getElementById('sort_id').addEventListener('click', (e) => {
    document.getElementById('base').children.forEach((el) => {
      el.classList.remove('arrow_top');
      el.classList.remove('arrow_bottom');
    });
    if (clickIdCount === 2) clickIdCount = 0; else clickIdCount += 1;
    const id = [];
    document.getElementsByTagName('tr').forEach((el) => el.dataset.id && id.push(el.dataset.id));
    if (clickIdCount === 0) {
      idStandart.forEach((el, index) => index !== 0 && idStandart[index - 1].insertAdjacentElement('afterend', el));
      e.target.removeAttribute('class');
    } else {
      if (clickIdCount === 2) {
        e.target.classList.remove('arrow_bottom');
        e.target.classList.add('arrow_top');
      } else {
        e.target.classList.remove('arrow_top');
        e.target.classList.add('arrow_bottom');
      }
      const data = Array.from(document.getElementsByTagName('tr')).sort((prev, next) => (clickIdCount === 1 ? next.dataset.id - prev.dataset.id : prev.dataset.id - next.dataset.id));
      data.forEach((el) => el.id !== 'base' && data[0].insertAdjacentElement('afterend', el));
    }
  });

  let clickTitleCount = 0; // 0 - Standart 1 - Прямая 2 - Обратная
  document.getElementById('sort_title').addEventListener('click', (e) => {
    document.getElementById('base').children.forEach((el) => {
      el.classList.remove('arrow_top');
      el.classList.remove('arrow_bottom');
    });
    if (clickTitleCount === 2) clickTitleCount = 0; else clickTitleCount += 1;
    const id = [];
    document.getElementsByTagName('tr').forEach((el) => el.dataset.id && id.push(el.dataset.id));
    if (clickTitleCount === 0) {
      idStandart.forEach((el, index) => index !== 0 && idStandart[index - 1].insertAdjacentElement('afterend', el));
      e.target.removeAttribute('class');
    } else {
      if (clickTitleCount === 2) {
        e.target.classList.remove('arrow_bottom');
        e.target.classList.add('arrow_top');
      } else {
        e.target.classList.remove('arrow_top');
        e.target.classList.add('arrow_bottom');
      }
      let data = Array.from(document.getElementsByTagName('tr')).sort((prev, next) => (prev.dataset.title < next.dataset.title ? -1 : 1));
      data = clickTitleCount === 2 ? data.reverse() : data;
      data.forEach((el) => el.id !== 'base' && data[0].insertAdjacentElement('afterend', el));
    }
  });

  let clickYearCount = 0; // 0 - Standart 1 - Прямая 2 - Обратная
  document.getElementById('sort_year').addEventListener('click', (e) => {
    document.getElementById('base').children.forEach((el) => {
      el.classList.remove('arrow_top');
      el.classList.remove('arrow_bottom');
    });
    if (clickYearCount === 2) clickYearCount = 0; else clickYearCount += 1;
    const id = [];
    document.getElementsByTagName('tr').forEach((el) => el.dataset.id && id.push(el.dataset.id));
    if (clickYearCount === 0) {
      idStandart.forEach((el, index) => index !== 0 && idStandart[index - 1].insertAdjacentElement('afterend', el));
      e.target.removeAttribute('class');
    } else {
      if (clickYearCount === 2) {
        e.target.classList.remove('arrow_bottom');
        e.target.classList.add('arrow_top');
      } else {
        e.target.classList.remove('arrow_top');
        e.target.classList.add('arrow_bottom');
      }
      const data = Array.from(document.getElementsByTagName('tr')).sort((prev, next) => (clickYearCount === 1 ? next.dataset.year - prev.dataset.year : prev.dataset.year - next.dataset.year));
      data.forEach((el) => el.id !== 'base' && data[0].insertAdjacentElement('afterend', el));
    }
  });

  let clickImDBCount = 0; // 0 - Standart 1 - Прямая 2 - Обратная
  document.getElementById('sort_imdb').addEventListener('click', (e) => {
    document.getElementById('base').children.forEach((el) => {
      el.classList.remove('arrow_top');
      el.classList.remove('arrow_bottom');
    });
    if (clickImDBCount === 2) clickImDBCount = 0; else clickImDBCount += 1;
    const id = [];
    document.getElementsByTagName('tr').forEach((el) => el.dataset.id && id.push(el.dataset.id));
    if (clickImDBCount === 0) {
      idStandart.forEach((el, index) => index !== 0 && idStandart[index - 1].insertAdjacentElement('afterend', el));
      e.target.removeAttribute('class');
    } else {
      if (clickImDBCount === 2) {
        e.target.classList.remove('arrow_bottom');
        e.target.classList.add('arrow_top');
      } else {
        e.target.classList.remove('arrow_top');
        e.target.classList.add('arrow_bottom');
      }
      const data = Array.from(document.getElementsByTagName('tr')).sort((prev, next) => (clickImDBCount === 1 ? next.dataset.imdb - prev.dataset.imdb : prev.dataset.imdb - next.dataset.imdb));
      data.forEach((el) => el.id !== 'base' && data[0].insertAdjacentElement('afterend', el));
    }
  });
});
