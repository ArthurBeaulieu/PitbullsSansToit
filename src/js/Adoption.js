import '../scss/adoption.scss';
import { fetchJSON, creditModal } from './tools/Utils';


class Adoption {


  constructor() {
    this._init();
    creditModal();
  }


  _init() {
    fetchJSON('assets/json/adoption.json')
      .then(adoption => {
        for (let i = 0; i < 2; ++i) {
          let type = 'adopt';
          if (i === 1) {
            type = 'adopted';
          }
          // Iterate over items to create entries
          for (let j = 0; j < adoption[type].length; ++j) {
            const animal = document.createElement('DIV');
            animal.classList.add('dog')
            const genderLogo = (adoption[type][j].gender === 'female') ? 'venus' : 'mars';
            animal.innerHTML = `
              <img src="${adoption[type][j].picture}" class="dog-pp" alt="animal-picture">
              <div class="dog-info">
                <h3 class="name">${adoption[type][j].name}<i class="fa fa-${genderLogo} ${adoption[type][j].gender}"></i></h3>
    		        <p class="lead">${adoption[type][j].breed} (${adoption[type][j].age})</p>
                <p class="desc">${adoption[type][j].description}</p>
                <div class="dog-match">
                  <i class="fa fa-dog ${adoption[type][j].affinity.dogs}"></i>&nbsp;
                  <i class="fa fa-cat ${adoption[type][j].affinity.cats}"></i>&nbsp;
                  <i class="fa fa-baby ${adoption[type][j].affinity.baby}"></i>
                </div>
              </div>`;
            requestAnimationFrame(() => {
              document.querySelector(`#${type}-dogs`).appendChild(animal);
            });
          }
        }
      });
  }


}


export default Adoption;
