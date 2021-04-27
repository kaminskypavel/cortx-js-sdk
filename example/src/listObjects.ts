import {config} from 'dotenv';
import CORTX from '../../src/index';

config();


(async () => {

  const {
    S3_ACCESS_KEY_ID = '',
    S3_SECRET_ACCESS_KEY = '',
    S3_ENDPOINT = ''
  } = process.env;

  if (!S3_ACCESS_KEY_ID || !S3_SECRET_ACCESS_KEY || !S3_ENDPOINT) {
    throw new Error('S3 environment parameters are missing please add a .env file');
  }

  const bucketParams = {
    Bucket: 'testbucket',
    Delimiter: '/'
  };

  const cortx = new CORTX(S3_ENDPOINT, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY);
  const s3 = cortx.createS3Connector();

  s3.listObjects(bucketParams, (err, data) => {
    if (err)
      throw err;


    console.log(data);
  });
})();
