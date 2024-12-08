import { FormikHelpers } from 'formik';

export interface I<FTName | pascalcase>Fields {
  email: string;  //TODO change?
}

export type T<FTName | pascalcase>Submit = (
  values: I<FTName | pascalcase>Fields, 
  actions: FormikHelpers<I<FTName | pascalcase>Fields>
) => void;

export interface I<FTName | pascalcase>Props {
  onSubmit: T<FTName | pascalcase>Submit,
}

export type T<FTName | pascalcase>FieldsKeys = keyof I<FTName | pascalcase>Fields;
