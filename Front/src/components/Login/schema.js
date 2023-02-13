import * as Yup from 'yup';

export const schema = Yup.object({
  email: Yup.string().email('Correo electrónico inválido').required('El email es requerido'),
  password: Yup.string().required('La contaseña es requerida'),
});
