const BASE_UPPER_CHAR_CODE = 'A'.charCodeAt();
const ROOM_CODE_LENGTH = 4;

/**
 * Generates a four letter code
 * {String} code
 */
export default function GenerateRoomCode() {
  // TODO: Verify that generated code does not exist in database
  let code = '';
  while (code.length < ROOM_CODE_LENGTH) {
    code += generateRandomLetter();
  }
  return code;
}

/**
 * Returns a random letter from the 26 letter English alphabet
 */
const generateRandomLetter = () => {
  return String.fromCharCode(BASE_UPPER_CHAR_CODE + Math.round(Math.random() * 25));
}