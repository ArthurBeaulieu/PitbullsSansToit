import '../scss/about.scss';
import { creditModal, adoptionHighlight } from './tools/Utils';


class About {


  constructor() {
    this._init();
    creditModal();
  }


  _init() {
    adoptionHighlight();
  }


}


export default About;
