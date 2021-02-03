import '../scss/apst.scss';


class APST {


  constructor(view) {
    if (view === 'homepage') {
      this._initHomepage();
    } else if (view === 'adopt') {
      this._initAdopt();
    } else if (view === 'help') {
      this._initHelp();
    }
  }


  _initHomepage() {
    this._fetchJSON('assets/json/adopt.json')
      .then(animals => {
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
                <i class="fa fa-dog ok"></i>&nbsp;
                <i class="fa fa-cat ko"></i>&nbsp;
                <i class="fa fa-baby ok"></i>
              </div>
              <p class="more">En savoir plus...</p>
            </div>`;
          document.querySelector('#dogs-to-adopt').appendChild(animalContainer);
        }
      });
  }


  _initAdopt() {
    console.log('Adoption');
  }


  _initHelp() {
    console.log('Help');
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


}


export default APST;