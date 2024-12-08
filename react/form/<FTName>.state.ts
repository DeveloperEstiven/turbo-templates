import { useFormik } from 'formik';
import { I<FTName | pascalcase>Fields, I<FTName | pascalcase>Props } from './<FTName>.types'
import { <FTName | camelcase>InitialValues } from './<FTName>.constants'
import { <FTName | camelcase>ValidationSchema } from './<FTName>.schema'

export const use<FTName | pascalcase> = ({ onSubmit }: I<FTName | pascalcase>Props) => {
  const form = useFormik<I<FTName | pascalcase>Fields>({
    initialValues: <FTName | camelcase>InitialValues,
    validationSchema: <FTName | camelcase>ValidationSchema,
    onSubmit,
  });

  return {
    form,
  };
}
