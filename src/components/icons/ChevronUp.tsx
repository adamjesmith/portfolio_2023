const ChevronUp = ({ ...props }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      width='24'
      height='24'
      fill='currentColor'
      stroke='none'
      {...props}
    >
      <path d='M2 16.053L3.04 17 12 8.888 20.96 17l1.04-.947L12 7 2 16.053z' />
    </svg>
  );
};

export default ChevronUp;
