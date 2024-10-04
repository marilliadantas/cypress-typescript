import { UserRegister } from "../../@types";

import { register } from "../elements/registerElements";
import { click, set, get_text } from "../actions";

interface PreencherRegisterParams {
  userRegister: UserRegister;
}

export default {
  preencherCadastro({ userRegister }: PreencherRegisterParams) {
    if (userRegister) {
      const { name, email, password } = userRegister;

      if (name !== null) {
        set(register.inputNome, name, { log: false });
      }

      if (email !== null) {
        set(register.inputEmail, email, { log: false });
      }

      if (password !== null) {
        set(register.inputPassword, password, { log: false });
      }
    }
  },

  clicarCadastrar() {
    click(register.btnCadastrar);
  },

  validarMsgSucesso() {
    return get_text(register.alertaSucesso);
  },
};
