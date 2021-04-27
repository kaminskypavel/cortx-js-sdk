import dotenv from 'dotenv';

dotenv.config();

(async () => {

  const {S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_ENDPOINT} = process.env;
  console.log(S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_ENDPOINT);
  console.log('example');
})();
