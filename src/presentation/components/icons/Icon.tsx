import React, { memo } from 'react';

type CustomIconProps = {
  icon: React.FC;
  width?: number | undefined;
  height?: number | undefined;
  label?: string | undefined;
  style?: React.CSSProperties | undefined;
  viewBox: string;
};

// eslint-disable-next-line react/display-name
const Icon: React.FC<CustomIconProps> = memo(
  ({ icon, height, width, label, style, viewBox, ...restProps }) => {
    const Component = icon;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${width || 18}px`}
        height={`${height || 18}px`}
        viewBox={viewBox}
        role={label ? 'img' : 'presentation'}
        aria-label={label || undefined}
        style={style}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...restProps}
      >
        <Component />
      </svg>
    );
  },
);

export default Icon;
