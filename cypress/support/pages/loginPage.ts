import { User } from "../../@types";

import { login } from "../elements/loginElements";
import { click, set, get_text } from "../actions";

interface PreencherLoginParams {
  user: User;
}

export default {
  preencherLogin({ user }: PreencherLoginParams) {
    if (user) {
      const { email, password } = user

      if (email !== null) {
        set(login.inputEmail, email, { log: false });
      }

      if (password !== null) {
        set(login.inputPassword, password, { log: false });
      }
    }
  },

  clicarEntrar() {
    click(login.btnEntrar);
  },

  validarMsgErro() {
    return get_text(login.msgErro);
  },
};