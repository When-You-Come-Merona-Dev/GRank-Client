interface ISvg {
  width: number;
  height: number;
}

const AddPerson: React.FC<ISvg> = ({ width, height }) => {
  return (
    <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="557.5" cy="218.5" r="218.5" fill="#C4C4C4" />
      <path d="M967.88 912.481c.132 5.522-4.483 10.019-10.006 10.019H163.862c-5.523 0-10.374-4.498-10.246-10.019C158.743 690.224 333.909 497 557 497s405.537 193.224 410.88 415.481z" fill="#C4C4C4" />
      <path stroke="#C4C4C4" stroke-width="20" d="M0 421h297" />
      <path stroke="#C4C4C4" stroke-width="17" d="M144.5 564V286" />
    </svg>
  );
};

AddPerson.defaultProps = {
  width: 20,
  height: 20,
};

export default AddPerson;
