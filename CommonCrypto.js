var e = {
    d: (t, a) => {
      for (var n in a)
        e.o(a, n) &&
          !e.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
    },
    o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  },
  t = {};
async function a(e, t, a) {
  const n = await c(t),
    r = await crypto.subtle.importKey("raw", n.buffer, "AES-CTR", !1, [
      "encrypt",
      "decrypt",
    ]),
    i = await c(a),
    y = (function (e) {
      const t = window.atob(e),
        a = t.length,
        n = new Uint8Array(a);
      for (let e = 0; e < a; e++) n[e] = t.charCodeAt(e);
      return n.buffer;
    })(e),
    s = await window.crypto.subtle.decrypt(
      { name: "AES-CTR", counter: i, length: 128 },
      r,
      y
    ),
    o = new TextDecoder();
  return JSON.parse(o.decode(s));
}
e.d(t, { A: () => s });
const n = async (e, t, a) => {
  let n = await c(t),
    i = await c(a);
  const y = JSON.stringify(e);
  let s = new TextEncoder().encode(y);
  const o = await window.crypto.subtle.importKey(
    "raw",
    n.buffer,
    "AES-CTR",
    !1,
    ["encrypt", "decrypt"]
  );
  return r(
    await window.crypto.subtle.encrypt(
      { name: "AES-CTR", counter: i, length: 128 },
      o,
      s
    )
  );
};
async function c(e) {
  const t = await window.crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(e)
  );
  return new Uint8Array(t.slice(0, 16));
}
function r(e) {
  let t = "";
  const a = new Uint8Array(e),
    n = a.byteLength;
  for (let e = 0; e < n; e++) t += String.fromCharCode(a[e]);
  return window.btoa(t);
}
const i = async (e) => {
  const t = new TextEncoder().encode(e.join(""));
  return r(await window.crypto.subtle.digest("SHA-256", t));
};
async function y(e) {
  return await i(["VPbugbWKzLxXrbzrD1AmSJdiYGAHHcnpL4l+ezc965M=", e]);
}
const s = {
  decryptMessage: a,
  encryptMessage: n,
  hashMessage: async function (e) {
    return await i([e]);
  },
  getUserKey: async function (e) {
    return await i(["vvV+x/U6bUC+tkCngKY5yDvCmsipgW8fxsXG3Nk8RyE=", e]);
  },
  getUserProfileKey: async function (e) {
    return await i([e, 1]);
  },
  getUserShoppingKey: async function (e) {
    return await i([e, 2]);
  },
  getUserReportKey: async function (e) {
    return await i([e, 3]);
  },
  getProjectKey: y,
  getProjectAttachmentKey: async function (e) {
    const t = await y(e);
    return await i([t, 4]);
  },
  getDataBaseKeyDecryptionKey: async function (e, t) {
    return await i(["CK6ukpMVcJUGp+XAnIyK77SRKQslUgRNr/d3gQBw40A=", e, t]);
  },
  getDataBaseKey: async function (e, t) {
    return a(e, t, "iv");
  },
  getTimestampBaseKey: async function (e, t) {
    return await i([e, t, 5]);
  },
  getTimestampReturnKey: async (e) => await i([e, 11]),
  getTimestampEncryptedBaseKey: () => {
    console.log("get key");
  },
  getTimestampDecryptedBaseKey: () => {
    console.log("get key");
  },
  getDataTimestampFirstKey: async (e) => await i([e, 10]),
  getDataTimestampPreInfoKey: async (e) => await i([e, 6]),
  getDataTimestampPostInfoKey: async (e) => await i([e, 7]),
  getDataTimestampCallFlowKey: async (e) => await i([e, 8]),
  getDataTimestampCallTreeKey: async (e) => await i([e, 9]),
  getSequenceBaseKey: async (e) => await i([e, 12]),
  getSequenceListBehaviorKey: async (e) => await i([e, 13]),
  getSequenceListProtocolKey: async (e) => await i([e, 14]),
  getSequenceListArchitectureKey: async (e) => await i([e, 15]),
  getSequenceSearchTypeKey: async (e) => await i([e, 16]),
  getSequenceSearchKey: async (e) => await i([e, 17]),
  getSearchBaseKey: async (e) => await i([e, 18]),
  getSearchTimestampListKey: async (e) => await i([e, 19]),
  getSearchStringListKey: async (e) => await i([e, 20]),
  getSearchStringKey: async (e) => await i([e, 21]),
  getSearchURLListKey: async (e) => await i([e, 22]),
  getSearchURLKey: async (e) => await i([e, 23]),
  getSearchFilenameListKey: async (e) => await i([e, 24]),
  getSearchFilenameKey: async (e) => await i([e, 25]),
  getSearchFunctionListKey: async (e) => await i([e, 26]),
  getSearchFunctionKey: async (e) => await i([e, 27]),
  getSearchStructureListKey: async (e) => await i([e, 28]),
  getSearchStructureKey: async (e) => await i([e, 29]),
  getSearchMemoryListKey: async (e) => await i([e, 30]),
  getSearchMemoryKey: async (e) => await i([e, 31]),
  getEncryptedSharingKey: async (e) => await n(e, "Iz+5IMWUXfO2rlS1", "iv"),
  getDecryptedSharingKey: async (e) => await a(e, "Iz+5IMWUXfO2rlS1", "iv"),
};
var o = t.A;
export { o as default };
