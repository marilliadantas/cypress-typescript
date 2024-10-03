import { home } from "../elements/homeElements";
import { get_text } from "../actions";

export default {
  validarMsgSucesso() {
    return get_text(home.msgWelcome);
  }
};