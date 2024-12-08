import React from 'react'
import { Text } from 'react-native'
import { Styled<FTName | pascalcase> as Styled } from './<FTName>.styles'
import { I<FTName | pascalcase>Props } from './<FTName>.types'
import { use<FTName | pascalcase> } from './<FTName>.state'

export const <FTName | pascalcase>: React.FC<I<FTName | pascalcase>Props> = () => {
  const { name } = use<FTName | pascalcase>();
  
  return (
    <Styled.<FTName | pascalcase>>
      <Text>{name}</Text>
    </Styled.<FTName | pascalcase>>
  );
};
