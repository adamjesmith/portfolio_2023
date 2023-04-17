const Sketch = ({ ...props }) => {
  return (
    <svg viewBox='0 0 24 24' width='24' height='24' fill='none' {...props}>
      <path
        d='M6.364 3.596L12 3l5.636.596L22 9.454 12 21.099 2 9.454l4.364-5.858z'
        fill='#FDB300'
      />
      <path
        d='M6.05 9.454L12 21.099 2 9.454h4.05zM17.95 9.454L12 21.099 22 9.454h-4.05z'
        fill='#EA6C00'
      />
      <path d='M6.05 9.454h11.9L12 21.099 6.05 9.454z' fill='#FDAD00' />
      <path
        d='M12 3l-5.636.596-.313 5.858L12 3zM12 3l5.636.596.314 5.858L12 3z'
        fill='#FDD231'
      />
      <path
        d='M22 9.454l-4.364-5.858.314 5.858H22zM2 9.454l4.364-5.858-.313 5.858H2z'
        fill='#FDAD00'
      />
      <path d='M12 3L6.05 9.454h11.9L12 3z' fill='#FEEEB7' />
    </svg>
  );
};

export default Sketch;
