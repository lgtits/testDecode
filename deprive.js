import CommonCrypto from "./CommonCrypto";

const DBK = "data-base-key";
const DTFK = "+7PQqsn3hUP7Y4OB/ZEgEaLnV+eoKgw2VM+y9gy9MCo=";
const timestamp = "18896721981026";
const tbk = await CommonCrypto.getTimestampBaseKey(DBK, timestamp);
console.log("tbk: ", tbk); //mXo6Sy3CA8zxEyoDqzGmTwIF1tQOtrBrAbsubFFuwTM=
const preKey = await CommonCrypto.getDataTimestampPreInfoKey(tbk);
const postKey = await CommonCrypto.getDataTimestampPostInfoKey(tbk);

const sequenceBaseKey = await CommonCrypto.getSequenceBaseKey(DBK);
const sequenceSearchKey = await CommonCrypto.getSequenceSearchKey(
  sequenceBaseKey
);
const sequenceSearchTypeKey = await CommonCrypto.getSequenceSearchTypeKey(
  sequenceBaseKey
);

const sequenceListBehaviorKey = await CommonCrypto.getSequenceListBehaviorKey(
  sequenceBaseKey
);

const sequenceListProtocolKey = await CommonCrypto.getSequenceListProtocolKey(
  sequenceBaseKey
);

const sequenceListArchitectureKey =
  await CommonCrypto.getSequenceListArchitectureKey(sequenceBaseKey);

// const DBK = await CommonCrypto.decryptMessage(key_slot, DBKDK, "iv");
// console.log("DBK: ", DBK);

//
const projectId = "apache2";
const email = "demo@ossint.info";
// const email = "a0937370704@gmail.com";
const hashEmail = await CommonCrypto.hashMessage(email);
const salt_user = "abcdef";
const salt_project = "ghijkl";
const salt_data = "mnopqr";
const key_for_sharing = "sharing-key";
const hashSaltUser = await CommonCrypto.hashMessage(salt_user);
const hashSaltProject = await CommonCrypto.hashMessage(salt_project);
const hashSaltData = await CommonCrypto.hashMessage(salt_data);
const hashKeyForSharing = await CommonCrypto.hashMessage(key_for_sharing);
console.log("hash salt user: ", hashSaltUser);
console.log("hash salt project: ", hashSaltProject);
console.log("hash salt datar: ", hashSaltData);
console.log("hash key sharing: ", hashKeyForSharing);
const slicedSharingKey = hashKeyForSharing.slice(0, 16);
console.log("slicedSharingKey: ", slicedSharingKey);
// console.log("length: ", slicedSharingKey.length);

const safeHashEmail = encodeURIComponent(hashEmail);

const userKey = await CommonCrypto.getUserKey(hashEmail);
const shoppingKey = await CommonCrypto.getUserShoppingKey(userKey);

const profileKey = await CommonCrypto.getUserProfileKey(userKey);
// console.log("rpofilekey: ", profileKey);
const reportListKey = await CommonCrypto.getUserReportKey(userKey);
const projectKey = await CommonCrypto.getProjectKey(projectId);

const DBKDK = await CommonCrypto.getDataBaseKeyDecryptionKey(
  userKey,
  projectKey
);

// console.log("DBKDK: ", DBKDK);

const keySLot = await CommonCrypto.encryptMessage(DBK, DBKDK);

const searchBaseKey = await CommonCrypto.getSearchBaseKey(DBK);
const dataSearchStringListKey = await CommonCrypto.getSearchStringListKey(
  searchBaseKey
);
const dataSearchStringKey = await CommonCrypto.getSearchStringKey(
  searchBaseKey
);
const dataSearchMemoryListKey = await CommonCrypto.getSearchMemoryListKey(
  searchBaseKey
);
const dataSearchMemoryKey = await CommonCrypto.getSearchMemoryKey(
  searchBaseKey
);
const dataSearchTimestampListKey = await CommonCrypto.getSearchTimestampListKey(
  searchBaseKey
);
const timestampReturnKey = await CommonCrypto.getTimestampReturnKey(tbk);

const data = DBK;

const usingKey = DBKDK;

const keySlotEncrypted = await CommonCrypto.encryptMessage(
  data,
  usingKey,
  "iv"
);

console.log("encrypted: ", keySlotEncrypted);
