document
  .getElementById("jsonFileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async function (e) {
      try {
        // 解析 JSON
        const jsonData = JSON.parse(e.target.result);
        const stringifyJson = JSON.stringify(jsonData, null, 2);
        // 格式化並顯示 JSON
        document.getElementById("output").textContent = stringifyJson;
        const key = document.getElementById("using-key").value;
        const encryptedMessage = await CommonCrypto.encryptMessage(
          jsonData,
          key,
          "iv"
        );
        document.getElementById("encrypted-json").textContent =
          encryptedMessage;
      } catch (error) {
        // 處理解析錯誤
        document.getElementById(
          "output"
        ).textContent = `Error parsing JSON: ${error.message}`;
      }
    };

    reader.readAsText(file);
  });

import CommonCrypto from "./CommonCrypto.js";

document.getElementById("getKeysBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const projectId = document.getElementById("project").value;
  console.log("get keys");

  if (!email) {
    alert("請輸入email");
    return;
  }

  try {
    // Hash email
    const hashEmail = await CommonCrypto.hashMessage(email);
    document.querySelector(".hash-email").textContent = hashEmail;

    // Get User Key
    const userKey = await CommonCrypto.getUserKey(hashEmail);
    document.querySelector(".user-key").textContent = userKey;
    const shoppingKey = await CommonCrypto.getUserShoppingKey(userKey);
    document.querySelector(".shopping-key").textContent = shoppingKey;
    const profileKey = await CommonCrypto.getUserProfileKey(userKey);
    document.querySelector(".profile-key").textContent = profileKey;
    const reportListKey = await CommonCrypto.getUserReportKey(userKey);
    document.querySelector(".report-key").textContent = reportListKey;
    const projectKey = await CommonCrypto.getProjectKey(projectId);
    document.querySelector(".project-key").textContent = projectKey;
  } catch (error) {
    console.error("Error:", error);
    alert("處理金鑰時發生錯誤");
  }
});
