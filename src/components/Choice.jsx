export default function Choice({ selected }) {
  let message;
  if (selected) {
    message = `Ви обрали: ${selected}`;
    console.log(`Ви обрали: ${selected}`);
  } else {
    message = "Натисніть на стікер";
    // console.log("Натисніть на стікер");
  }
  return <div>{message}</div>;
}
