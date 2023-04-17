export default function newLineFromString(text: string) {
  return text.split('\n').map((str, i) => (
    <span className='titleLine' key={i}>
      {str}
    </span>
  ));
}
