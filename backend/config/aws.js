// // config/aws.js
// const AWS = require('aws-sdk');

// const spacesEndpoint = new AWS.Endpoint(process.env.DO_SPACES_ENDPOINT);

// const s3 = new AWS.S3({
//   endpoint: spacesEndpoint,
//   accessKeyId: process.env.DO_SPACES_KEY,
//   secretAccessKey: process.env.DO_SPACES_SECRET,
//   s3ForcePathStyle: true, // Ajoutez ceci si nécessaire
//   signatureVersion: 'v4'  // Ajoutez ceci si nécessaire
// });

// module.exports = s3;



// config/aws.js
const { S3Client } = require('@aws-sdk/client-s3');

const s3 = new S3Client({
  endpoint: process.env.DO_SPACES_ENDPOINT,
  region: 'fra1', 
  credentials: {
    accessKeyId: process.env.DO_SPACES_KEY,
    secretAccessKey: process.env.DO_SPACES_SECRET,
  },
});

module.exports = s3;
