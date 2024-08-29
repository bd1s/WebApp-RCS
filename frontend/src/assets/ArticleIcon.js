import React from 'react';
import ArticleIcon from '@mui/icons-material/Article';

export default function ArticleIconCustom({ fillColor = 'white', width = 20, height = 20 }) {
  return (
    <div className="p-[5px]">
      <ArticleIcon
        sx={{
          fontSize: width, // Définit la largeur de l'icône
          color: fillColor, // Définit la couleur de l'icône
          height: height, // Définit la hauteur de l'icône
        }}
      />
    </div>
  );
}
