import React from 'react';

type Props = {
  icon: any,
};

const Icon = ({ icon }: Props) => <img src={icon} alt={`${icon}`} />;

export default Icon;
