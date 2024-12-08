import React from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';

import { I<FTName | pascalcase>Props,  T<FTName | pascalcase>FieldsKeys} from './<FTName>.types'
import { Styled<FTName | pascalcase> as Styled } from './<FTName>.styles'
import { use<FTName | pascalcase> } from './<FTName>.state'

export const <FTName | pascalcase>: React.FC<I<FTName | pascalcase>Props> = ({ onSubmit }) => {
  const {
    form: { touched, errors, isValid, handleSubmit },
    getFieldProps,
  } = use<FTName | pascalcase>({ onSubmit });

   //TODO change?
   const renderField = (field: T<FTName | pascalcase>FieldsKeys) => {
    const [error, isError] = [errors[field], touched[field] && errors[field]];

    return (
      <>
        <TextInput {...getFieldProps(field)} />
        {isError && <Text style={{ color: 'red' }}>{error}</Text>}
      </>
    );
  };
  
  return (
    <Styled.<FTName | pascalcase>>
      {renderField('email')}
      <TouchableOpacity disabled={!isValid} onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </Styled.<FTName | pascalcase>>
  );
};
