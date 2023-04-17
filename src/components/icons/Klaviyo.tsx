const Klaviyo = ({ ...props }) => {
  return (
    <svg viewBox='0 0 24 24' width='24' height='24' fill='none' {...props}>
      <path
        d='M2.394 11.115l8.97-5.944a1.246 1.246 0 011.262 0l8.97 5.944a.713.713 0 010 1.285l-1.198.788a9.943 9.943 0 00-16.806 0L2.394 12.4a.72.72 0 010-1.285zm9.594-.07a7.516 7.516 0 00-6.338 3.507l2.065 1.372a4.975 4.975 0 018.514 0l2.065-1.372a7.406 7.406 0 00-6.306-3.508zm0 4.965a2.539 2.539 0 00-2.192 1.293l1.388.907c.228.189.512.291.804.3.3 0 .583-.103.804-.3l1.387-.907a2.504 2.504 0 00-2.191-1.293z'
        fill='url(#paint0_linear_155_2386)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_155_2386'
          x1='11.998'
          y1='18.561'
          x2='11.998'
          y2='5.01'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#EFC11A' />
          <stop offset='.33' stopColor='#93C252' />
          <stop offset='.49' stopColor='#74BA5D' />
          <stop offset='.75' stopColor='#30AB5A' />
          <stop offset='.9' stopColor='#27AC6B' />
          <stop offset='1' stopColor='#27AC6B' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Klaviyo;
