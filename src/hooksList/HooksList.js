import React from 'react';
import Header from 'src/components/Header';
import ListElement from 'src/components/ListElement';

const HooksList = ({listElements}) => <div>
    <Header />
    <div>
      {listElements.map((e, i) =>
        <ListElement key={i} {...e} />
      )}
    </div>
</div>;

export default HooksList;
