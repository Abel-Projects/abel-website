// Address is stored reversed and split so it never appears as plain text in the page or bundle.
const EMAIL_PARTS = ["moc.liamg", "nifsemgleba"];

export const getEmail = () => EMAIL_PARTS.join("@").split("").reverse().join("");
