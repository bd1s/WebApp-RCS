// src/components/DoctorantInfoForm.js

import React from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import BaccalaureateInfoForm from './BaccalaureateInfoForm';
import UniversityInfoForm from './UniversityInfoForm';
import DoctoralCycleInfoForm from './DoctoralCycleInfoForm';

const DoctorantInfoForm = () => {
  return (
    <div>
      <h1>Formulaire d'Informations des Doctorants</h1>
      <PersonalInfoForm />
      <BaccalaureateInfoForm />
      <UniversityInfoForm />
      <DoctoralCycleInfoForm />
    </div>
  );
};

export default DoctorantInfoForm;
