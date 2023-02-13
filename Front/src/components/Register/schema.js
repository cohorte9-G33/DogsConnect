import * as Yup from 'yup';

export const schema = Yup.object({
  email: Yup.string().email('Correo electrónico inválido').required('El email es requerido'),
  location: Yup.string().required('El localidad es requerida'),
  password: Yup.string().required('La contaseña es requerida'),
});
