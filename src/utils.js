export default function getRandonInteger(min, max) {
  const minNumber = min ?? 0;
  const maxNumber = max ?? 100;
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
