// Create Client
import AWS from 'aws-sdk';
import https from 'https';


class CORTX_S3 extends AWS.S3 {
  // @ts-ignore
  private endpoint: string;
  private accessKeyId: string;
  private secretAccessKey: string;


  constructor(endpoint: string, accessKeyId: string, secretAccessKey: string) {
    super({
      accessKeyId,
      secretAccessKey,
      endpoint,
      s3ForcePathStyle: true,
      httpOptions: {
        agent: new https.Agent({rejectUnauthorized: false})
      }
    });

    this.endpoint = endpoint;
    this.accessKeyId = accessKeyId;
    this.secretAccessKey = secretAccessKey;
  }
}


export default {
  CORTX_S3
};
