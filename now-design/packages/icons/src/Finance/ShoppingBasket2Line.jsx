import React from 'react';

const ShoppingBasket2Line = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.8092 2.8667L15.4851 7.5017L18.3376 7.50185V9.16853L17.3651 9.16837L16.7346 16.7377C16.6986 17.1696 16.3375 17.5019 15.9041 17.5019H4.10435C3.67094 17.5019 3.30988 17.1696 3.27389 16.7377L2.64257 9.16837L1.6709 9.16853V7.50185L4.52257 7.5017L7.19922 2.8667L8.64258 3.70003L6.44757 7.5017H13.5601L11.3659 3.70003L12.8092 2.8667ZM15.6926 9.16837L4.31507 9.16853L4.8709 15.8352H15.1367L15.6926 9.16837ZM10.8376 10.8352V14.1685H9.17092V10.8352H10.8376ZM7.50423 10.8352V14.1685H5.83757V10.8352H7.50423ZM14.1709 10.8352V14.1685H12.5042V10.8352H14.1709Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default ShoppingBasket2Line;
