import CreditModal from "../modal/CreditModal";
import AnimalModal from "../modal/AnimalModal";


const fetchJSON = url => {
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
};


const fetchHTML = url => {
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
};


const creditModal = () => {
  document.querySelector('#credit-modal').addEventListener('click', () => {
    fetchHTML('assets/html/credit.html')
      .then(template => {
        new CreditModal({
          template: template
        });
      });
  }, false);
};


const adoptionHighlight = () => {
  fetchJSON('assets/json/adoption-highlight.json')
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
        requestAnimationFrame(() => {
          document.querySelector('#dogs-to-adopt').appendChild(animalContainer);
        });
        animalContainer.addEventListener('click', () => {
          fetchHTML('assets/html/animal.html')
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


export { fetchJSON, fetchHTML, creditModal, adoptionHighlight };
