const ChevronDown = ({ ...props }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      width='24'
      height='24'
      fill='currentColor'
      stroke='none'
      {...props}
    >
      <path d='M22 7.947L20.96 7 12 15.112 3.04 7 2 7.947 12 17l10-9.053z' />
    </svg>
  );
};

export default ChevronDown;
