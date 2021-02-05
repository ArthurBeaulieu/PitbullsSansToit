import '../scss/homepage.scss';
import { fetchJSON, creditModal, adoptionHighlight } from './tools/Utils';


class Homepage {


  constructor() {
    this._init();
    creditModal();
  }


  _init() {
    adoptionHighlight();
    fetchJSON('assets/json/homepage.json')
      .then(json => {
        const announcement = document.createElement('DIV');
        announcement.classList.add('announce');
        announcement.innerHTML = `
          <h3 class="title">${json.title}</h3>
          <p><i>${json.date}</i></p>
          <p class="desc">${json.description}</p>
          <img src="${json.picture}" class="dog-pp" alt="">
          <a href="${json.link}" class="more">En savoir plus...</a>`;
        requestAnimationFrame(() => {
          document.querySelector('#homepage-announcement').appendChild(announcement);
        });
      });
  }


}


export default Homepage;
