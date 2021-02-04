import '../scss/apst.scss';
import AnimalModal from './modal/AnimalModal';
import CreditModal from './modal/CreditModal';


class APST {


  constructor(view) {
    if (view === 'homepage') {
      this._initHomepage();
    } else if (view === 'adopt') {
      this._initAdopt();
    } else if (view === 'help') {
      this._initHelp();
    }

    this._commonInteractions();
  }


  _initHomepage() {
    this._adoptionHighlight();

    this._fetchJSON('assets/json/homepage.json')
      .then(json => {
        const announcement = document.createElement('DIV');
        announcement.classList.add('announce');
        announcement.innerHTML = `
          <h3 class="title">${json.title}</h3>
          <p><i>${json.date}</i></p>
          <p class="desc">${json.description}</p>
          <img src="${json.picture}" class="dog-pp" alt="">
          <a href="${json.link}" class="more">En savoir plus...</a>`;
        document.querySelector('#homepage-announcement').appendChild(announcement);
      });
  }


  _initAdopt() {
    this._fetchJSON('assets/json/adoption.json')
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
            document.querySelector(`#${type}-dogs`).appendChild(animal);
          }
        }
      });
  }


  _initHelp() {
    this._adoptionHighlight();
  }


  _commonInteractions() {
    document.querySelector('#credit-modal').addEventListener('click', () => {
      this._fetchHTML('assets/html/credit.html')
        .then(template => {
          new CreditModal({
            template: template
          });
        });
    }, false);
  }


  _adoptionHighlight() {
    this._fetchJSON('assets/json/adoption-highlight.json')
      .then(animals => {
        // Fill highlighted animals to adopt
        for (let i = 0; i < animals.length; ++i) {
          const animalContainer = document.createElement('DIV');
          animalContainer.classList.add('dog');
          const genderLogo = (animals[i].gender === 'female') ? 'venus' : 'mars';
          animalContainer.innerHTML = `
            <div class="dog-info">
              <h3 class="name">${animals[i].name}<i class="fa fa-${genderLogo} ${animals[i].gender}"></i></h3>
              <p class="lead desc">${animals[i].breed}</p>
              <img src="${animals[i].picture}" class="dog-pp" alt="">
              <div class="dog-match">
                <p>Affinités :</p>&nbsp;
                <i class="fa fa-dog ${animals[i].affinity.dogs}"></i>&nbsp;
                <i class="fa fa-cat ${animals[i].affinity.cats}"></i>&nbsp;
                <i class="fa fa-baby ${animals[i].affinity.baby}"></i>
              </div>
              <p class="more">En savoir plus...</p>
            </div>`;
          document.querySelector('#dogs-to-adopt').appendChild(animalContainer);
          animalContainer.addEventListener('click', () => {
            this._fetchHTML('assets/html/animal.html')
              .then(template => {
                new AnimalModal({
                  template: template,
                  info: animals[i]
                });
              });
          }, false);
        }
      });
  }


  _fetchJSON(url) {
    return new Promise(resolve => {
      const options = {
        method: 'GET',
        headers: new Headers([ ['Content-Type', 'application/json; charset=UTF-8'] ])
      };

      fetch(url, options)
        .then(response => {
          if (response) {
            if (response.ok) {
              resolve(response.json());
            } else {
              console.error(response.status);
            }
          }
        })
        .catch(error => {
          console.error(error);
        });
    });
  }


  _fetchHTML(url) {
    return new Promise(resolve => {
      const options = {
        method: 'GET',
        headers: new Headers([ ['Content-Type', 'application/json; charset=UTF-8'] ])
      };

      fetch(url, options)
        .then(response => {
          if (response) {
            if (response.ok) {
              resolve(response.text());
            } else {
              console.error(response.status);
            }
          }
        })
        .catch(error => {
          console.error(error);
        });
    });
  }


}


export default APST;