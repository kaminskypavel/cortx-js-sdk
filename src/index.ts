// Create Client
import AWS from 'aws-sdk';
import https from 'https';


export default class CORTX {
  private endpoint;
  private accessKeyId;
  private secretAccessKey;

  constructor(endpoint: string, accessKeyId: string, secretAccessKey: string) {
    this.endpoint = endpoint;
    this.accessKeyId = accessKeyId;
    this.secretAccessKey = secretAccessKey;
  }

  createS3Connector = () => {
    const {secretAccessKey, accessKeyId, endpoint} = this;
    return new AWS.S3({
      accessKeyId,
      secretAccessKey,
      endpoint,
      s3ForcePathStyle: true,
      httpOptions: {
        agent: new https.Agent({rejectUnauthorized: false})
      }
    });
  };

  createGoogleStorageConnector = () => {
    return null;
  };

  createMOTRConnector = () => {
    return null;
  };
}

