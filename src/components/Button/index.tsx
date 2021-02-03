import React from 'react';
import './style.scss';

type PropsType = {
  children?: string | JSX.Element | Array<JSX.Element>;
  icon?: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
}

type IconType = React.ForwardRefRenderFunction<React.RefAttributes<SVGSVGElement>, {}>;

function Button(props: PropsType) {
  const icon = props.icon as IconType;
  const CustomIcon = icon ? React.createElement(icon) : null;

  return (
    <button className="button">
      {CustomIcon}
      {props.children}
    </button>
  )
}

export default Button;