import {config} from 'dotenv';
import * as fs from 'fs';
import path from 'path';
import CORTX from '../../src/index';

config();

(async () => {
  console.log("uploading current file to CORTEX s3 example ");

  const {
    S3_ACCESS_KEY_ID = '',
    S3_SECRET_ACCESS_KEY = '',
    S3_ENDPOINT = ''
  } = process.env;

  if (!S3_ACCESS_KEY_ID || !S3_SECRET_ACCESS_KEY || !S3_ENDPOINT) {
    throw new Error('S3 environment parameters are missing please add a .env file');
  }

  const cortx = new CORTX(S3_ENDPOINT, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY);
  const s3 = cortx.createS3Connector();

  // Read in the file, convert it to base64, store to S3
  const file = fs.readFileSync(path.resolve(__dirname, __filename));

  const res =  await s3.putObject({
    Bucket: 'testbucket/',
    Key: 'file.txt',
    Body: Buffer.from(file),
    ACL: 'public-read'
  }).promise();

  console.log(res);
})();
