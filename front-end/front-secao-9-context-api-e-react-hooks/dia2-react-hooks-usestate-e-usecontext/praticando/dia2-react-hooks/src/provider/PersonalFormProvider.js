import React, { useState } from 'react';
import PersonalFormContext from '../context/PersonalFormContext';

function Provider({ children }) {
    const initialState = {
        name: '',
        age: 0,
        module: '',
      };
  const [formPersonalData, setFormPersonalData] = useState(initialState);

  handleFormPersonalData = () => {
    
  }

  return (
    <PersonalFormContext.Provider value={ formPersonalData }>
        {children}
    </PersonalFormContext.Provider>
  );
}

export default Provider;
