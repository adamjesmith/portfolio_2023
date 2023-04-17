const Figma = ({ ...props }) => {
  return (
    <svg viewBox='0 0 24 24' width='24' height='24' fill='none' {...props}>
      <path
        d='M8.334 22a3.334 3.334 0 003.333-3.333v-3.333H8.334a3.334 3.334 0 000 6.666z'
        fill='#0ACF83'
      />
      <path
        d='M5 12a3.334 3.334 0 013.333-3.333h3.334v6.667H8.334A3.335 3.335 0 015 12z'
        fill='#A259FF'
      />
      <path
        d='M5 5.333A3.334 3.334 0 018.333 2h3.334v6.667H8.334A3.335 3.335 0 015 5.333z'
        fill='#F24E1E'
      />
      <path d='M11.667 2H15a3.334 3.334 0 010 6.666h-3.333V2z' fill='#FF7262' />
      <path
        d='M17.357 14.357a3.333 3.333 0 10-4.714-4.714 3.333 3.333 0 004.714 4.714z'
        fill='#1ABCFE'
      />
    </svg>
  );
};

export default Figma;
