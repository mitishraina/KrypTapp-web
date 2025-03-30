import CryptoJS from "crypto-js";

export function encryptPrivateKey(privateKey, password) {
  const encryptSalt = CryptoJS.lib.WordArray.random(128 / 8).toString(
    CryptoJS.enc.Hex
  );
  const encryptIV = CryptoJS.lib.WordArray.random(128 / 8).toString(
    CryptoJS.enc.Hex
  );

  const key = CryptoJS.PBKDF2(password, CryptoJS.enc.Hex.parse(encryptSalt), {
    keySize: 256 / 32,
    iterations: 1000,
  });

  const encrypted = CryptoJS.AES.encrypt(privateKey, key, {
    iv: CryptoJS.enc.Hex.parse(encryptIV),
  });

  return {
    encryptedPrivateKey: encrypted.toString(),
    encryptSalt,
    encryptIV,
  };
}

export function decryptPrivateKey(
  encryptedPrivateKey,
  password,
  decryptSalt,
  decryptIV
) {
  const key = CryptoJS.PBKDF2(password, CryptoJS.enc.Hex.parse(decryptSalt), {
    keySize: 256 / 32,
    iterations: 1000,
  });

  const decrypted = CryptoJS.AES.decrypt(encryptedPrivateKey, key, {
    iv: CryptoJS.enc.Hex.parse(decryptIV),
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
}

export function Sud0Wallet() {
  const [privateKey, setPrivateKey] = useState("");
  const [encryptPassword, setEncryptPassword] = useState("");
  const [decryptPassword, setDecryptPassword] = useState("");
  const [encryptedPrivateKey, setEncryptedPrivateKey] = useState("");
  const [encryptSalt, setEncryptSalt] = useState("");
  const [encryptIV, setEncryptIV] = useState("");
  const [decryptedPrivateKey, setDecryptedPrivateKey] = useState("");
  const [decryptSalt, setDecryptSalt] = useState("");
  const [decryptIV, setDecryptIV] = useState("");
  const [decryptEncryptedPrivateKey, setDecryptEncryptedPrivateKey] =
    useState("");

  const handleEncrypt = () => {
    const { encryptedPrivateKey, encryptSalt, encryptIV } = encryptPrivateKey(
      privateKey,
      encryptPassword
    );

    setEncryptedPrivateKey(encryptedPrivateKey);
    setEncryptSalt(encryptSalt);
    setEncryptIV(encryptIV);
  };

  const handleDecrypt = () => {
    const decrypted = decryptPrivateKey(
      encryptedPrivateKey,
      decryptPassword,
      decryptSalt,
      decryptIV
    );
    setDecryptedPrivateKey(decrypted);
  };
}
