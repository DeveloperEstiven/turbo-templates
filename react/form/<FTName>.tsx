import { FC } from 'react';

import { I<FTName | pascalcase>Props,  T<FTName | pascalcase>FieldsKeys} from './<FTName>.types'
import './<FTName>.styles.css'
import { use<FTName | pascalcase> } from './<FTName>.state'

export const <FTName | pascalcase>: FC<I<FTName | pascalcase>Props> = ({ onSubmit }) => {
  const {
    form: { touched, errors, isValid, handleSubmit, getFieldProps }
  } = use<FTName | pascalcase>({ onSubmit });

   //TODO change?
   const renderField = (field: T<FTName | pascalcase>FieldsKeys) => {
    const [error, isError] = [errors[field], touched[field] && errors[field]];

    return (
      <>
        <input {...getFieldProps(field)} />
        {isError && <span style={{ color: 'red' }}>{error}</span>}
      </>
    );
  };
  
  return (
    <form>
      {renderField('email')}
      <button type="submit" disabled={!isValid} onClick={handleSubmit}></button>
    </form>
  );
};
