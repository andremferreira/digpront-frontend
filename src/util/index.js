import { createTextMask } from "redux-form-input-masks";

export const matchPassword = (value, allValues) =>
  value !== allValues.password
    ? `Sua Senha não confere com a anterior`
    : undefined;

export const required = value => (value ? undefined : "Campo obrigatório");

export const strongPassword = value =>
  value && !/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,12})/.test(value)
    ? "Senha não está segura"
    : undefined;

export const email = value =>
  value && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value)
    ? "Email inválido"
    : undefined;

export const cep = value =>
  value && !/^[0-9]{5}[0-9]{3}$/.test(value) ? "Cep inválido" : undefined;

export const crm = value =>
  value && !/^[0-9]{1,5}$/.test(value) ? "Crm inválido" : undefined;

/^\([1-9]{2}\) [0-9]{5}-[0-9]{4}$/;

export const phoneMask = createTextMask({
  pattern: "(99) 99999 -9999"
});

export const cepMask = createTextMask({
  pattern: "99999-999"
});
