import React from 'react';
import Header from 'src/components/Header';
import ListElement from 'src/components/ListElement';
import {listElements} from 'src/mocks/mocks';

const HooksList = () => <div>
    <Header />
    <div>
      {listElements.map((e, i) =>
        <ListElement key={i} {...e} />
      )}
    </div>
</div>;

export default HooksList;
