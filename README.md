[![npm version](https://badge.fury.io/js/cortx-js-sdk.svg)](https://badge.fury.io/js/cortx-js-sdk)

# Cortx-js-sdk

<p align="center">
    <img  src="./assets/logo.png">
    <p align="center">a typescript sdk for seagate's CORTX engine</p>
</p>

---

# Install

```sh
$ npm install --save cortx-js-sdk
```

# Typescript

`cortx-js-sdk` comes with its own type definitions, and can be imported in typescript.

# Connectors

## Amazon S3

`cortx-js-sdk` exposes a fully wrapped AWS.S3 class to communicate with CORTX

```typescript
const cortx = new CORTX(S3_ENDPOINT, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY);
const s3 = cortx.createS3Connector();
```

in example above `s3` is a proxy object to Cortx.

```typescript
const res = await s3
  .putObject({
    Bucket: 'testbucket/',
    Key: 'file.txt',
    Body: Buffer.from(file),
    ACL: 'public-read',
  })
  .promise();
```

## MOTR

TBD , once Cortx release motr apis.

## Google Cloud Storage

TBD , once Cortx integrates with GCS.

## Examples

See a more examples example under `./example/src/` folder

## License

Copyright © [Pavel 'PK' Kaminsy](https://www.pavel-kaminsky.com), released under an MIT license.
