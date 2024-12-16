const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071L1.29289 12.7071C0.902369 12.3166 0.902369 11.6834 1.29289 11.2929C1.68342 10.9024 2.31658 10.9024 2.70711 11.2929L7 15.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z"
        fill="#1E0E62"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.7071 9.29289C23.0976 9.68342 23.0976 10.3166 22.7071 10.7071L15.2071 18.2071C14.8166 18.5976 14.1834 18.5976 13.7929 18.2071L12.2929 16.7071C11.9024 16.3166 11.9024 15.6834 12.2929 15.2929C12.6834 14.9024 13.3166 14.9024 13.7071 15.2929L14.5 16.0858L21.2929 9.29289C21.6834 8.90237 22.3166 8.90237 22.7071 9.29289Z"
        fill="#1E0E62"
      />
    </svg>
  );
};

export default CheckIcon;