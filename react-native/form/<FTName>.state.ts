import { useFormik } from 'formik';
import { I<FTName | pascalcase>Fields, I<FTName | pascalcase>Props, T<FTName | pascalcase>FieldsKeys } from './<FTName>.types'
import { <FTName | camelcase>InitialValues } from './<FTName>.constants'
import { <FTName | camelcase>ValidationSchema } from './<FTName>.schema'

export const use<FTName | pascalcase> = ({ onSubmit }: I<FTName | pascalcase>Props) => {
  const { setFieldTouched, handleChange, values, ...form } = useFormik<I<FTName | pascalcase>Fields>({
    initialValues: <FTName | camelcase>InitialValues,
    validationSchema: <FTName | camelcase>ValidationSchema,
    onSubmit,
  });

  const onBlur = (field: T<FTName | pascalcase>FieldsKeys) => () => setFieldTouched(field);

  const getFieldProps = (field: T<FTName | pascalcase>FieldsKeys) => ({
    onBlur: onBlur(field),
    onChangeText: handleChange(field),
    value: values[field],
  });

  return {
    form,
    getFieldProps,
  };
}
