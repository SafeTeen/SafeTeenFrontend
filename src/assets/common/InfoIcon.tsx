interface Props {
  isActive: boolean;
}

const InfoIcon = ({ isActive }: Props) => {
  const color = isActive ? "#424242" : "#DEDEDE";
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.826 12.8262L17 17.0001"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.6087 14.2174C11.2586 14.2174 14.2174 11.2586 14.2174 7.6087C14.2174 3.95881 11.2586 1 7.6087 1C3.95881 1 1 3.95881 1 7.6087C1 11.2586 3.95881 14.2174 7.6087 14.2174Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default InfoIcon;
