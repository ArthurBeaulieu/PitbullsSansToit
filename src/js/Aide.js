import '../scss/help.scss';
import { creditModal, adoptionHighlight } from './tools/Utils';


class Aide {


  constructor() {
    this._init();
    creditModal();
  }


  _init() {
    adoptionHighlight();
  }


}


export default Aide;
