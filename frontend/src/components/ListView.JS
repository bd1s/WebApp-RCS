import React, { useState } from 'react';
import DoctorantInfoForm from './DoctorantInfoForm'; // Assurez-vous que le chemin est correct

const ListView = () => {
  const [selectedSection, setSelectedSection] = useState('personnelles');

  const renderFormSection = () => {
    switch (selectedSection) {
      case 'personnelles':
        return <DoctorantInfoForm section="personnelles" />;
      case 'baccalaureat':
        return <DoctorantInfoForm section="baccalaureat" />;
      case 'universitaires':
        return <DoctorantInfoForm section="universitaires" />;
      case 'cycleDoctoral':
        return <DoctorantInfoForm section="cycleDoctoral" />;
      default:
        return null;
    }
  };

  return (
    <div className="list-view flex">
      <aside className="w-1/4 bg-gray-200 p-4">
        <ul>
          <li
            className={`p-2 cursor-pointer ${selectedSection === 'personnelles' ? 'bg-gray-400' : ''}`}
            onClick={() => setSelectedSection('personnelles')}
          >
            Informations Personnelles
          </li>
          <li
            className={`p-2 cursor-pointer ${selectedSection === 'baccalaureat' ? 'bg-gray-400' : ''}`}
            onClick={() => setSelectedSection('baccalaureat')}
          >
            Informations sur le Baccalauréat
          </li>
          <li
            className={`p-2 cursor-pointer ${selectedSection === 'universitaires' ? 'bg-gray-400' : ''}`}
            onClick={() => setSelectedSection('universitaires')}
          >
            Informations Universitaires
          </li>
          <li
            className={`p-2 cursor-pointer ${selectedSection === 'cycleDoctoral' ? 'bg-gray-400' : ''}`}
            onClick={() => setSelectedSection('cycleDoctoral')}
          >
            Informations sur le Cycle Doctoral
          </li>
        </ul>
      </aside>
      <main className="w-3/4 p-4">
        {renderFormSection()}
      </main>
    </div>
  );
};

export default ListView;
