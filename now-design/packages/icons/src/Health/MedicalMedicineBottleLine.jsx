import React from 'react';

const MedicalMedicineBottleLine = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M15.833 1.66663V3.33329H14.1663V5.83329C15.5471 5.83329 16.6663 6.95258 16.6663 8.33329V17.5C16.6663 17.9602 16.2933 18.3333 15.833 18.3333H4.16634C3.70611 18.3333 3.33301 17.9602 3.33301 17.5V8.33329C3.33301 6.95258 4.4523 5.83329 5.83301 5.83329V3.33329H4.16634V1.66663H15.833ZM14.1663 7.49996H5.83301C5.37277 7.49996 4.99967 7.87306 4.99967 8.33329V16.6666H14.9997V8.33329C14.9997 7.87306 14.6266 7.49996 14.1663 7.49996ZM10.833 9.16662V10.8333H12.4997V12.5H10.8322L10.833 14.1666H9.16634L9.16551 12.5H7.49967V10.8333H9.16634V9.16662H10.833ZM12.4997 3.33329H7.49967V5.83329H12.4997V3.33329Z" fill="#E3E3E3"/>
    </svg>
  );
};

export default MedicalMedicineBottleLine;
