import { object, ObjectSchema, string } from 'yup';

import { I<FTName | pascalcase>Fields } from './<FTName>.types'

export const <FTName | camelcase>ValidationSchema: ObjectSchema<I<FTName | pascalcase>Fields> = object({
  email: string().email('Invalid format').required('Enter email'),
});
