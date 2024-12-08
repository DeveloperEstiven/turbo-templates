import { FC } from 'react'
import './<FTName>.styles.css'
import { I<FTName | pascalcase>Props } from './<FTName>.types'
import { use<FTName | pascalcase> } from './<FTName>.state'

export const <FTName | pascalcase>: FC<I<FTName | pascalcase>Props> = () => {
  const { name } = use<FTName | pascalcase>();
  
  return (
    <div>
      {name}
    </div>
  );
};
