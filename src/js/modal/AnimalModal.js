import Modal from './Modal.js';


class AnimalModal extends Modal {



  constructor(options) {
    super(options);
    this._info = options.info;
    this._fillAttributes();
  }


  _fillAttributes() {
    const genderLogo = (this._info.gender === 'female') ? 'venus' : 'mars';
    document.querySelector('#animal-name').innerHTML = `${this._info.name}<i class="fa fa-sm fa-${genderLogo} ${this._info.gender}"></i>`;
    document.querySelector('#modal-container').innerHTML = `
    	<div class="dog">
	      <img src="${this._info.picture}" class="dog-pp" alt="">
	      <div>
		      <h3>${this._info.breed} (${this._info.age})</h3>
		      <p class="desc">${this._info.description}</p>
	        <p><u>Affinités :</u></p>
	        <p>
		        <span><i class="fa fa-dog ${this._info.affinity.dogs}"></i>${this._info.affinity.dogs.toUpperCase()} chiens</span><br>
		        <span><i class="fa fa-cat ${this._info.affinity.cats}"></i>${this._info.affinity.cats.toUpperCase()} chats</span><br>
		        <span><i class="fa fa-baby ${this._info.affinity.baby}"></i>${this._info.affinity.baby.toUpperCase()} enfants</span>
	        </p>
	        <p class="desc">Vous voulez changer la vie de cet animal? Consultez la page "À l'adoption" pour plus d'information, ou n'hésitez pas à nous contacter pour vous positionnez pour une adoption!</p>
					<p><i><a href="tel:33619270852"><b>+33 6 19 27 08 52</b></a> ou par <a href="mailto:contact@pitbulls-sans-toit.com"><b>mail</b></a></i></p>
	      </div>
	    </div>`;
  }


}


export default AnimalModal;
