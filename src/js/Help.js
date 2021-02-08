import '../scss/help.scss';
import { creditModal, adoptionHighlight } from './tools/Utils';


class Help {


  constructor() {
    this._init();
    creditModal();
  }


  _init() {
    adoptionHighlight();
  }


}


export default Help;
