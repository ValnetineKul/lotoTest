/* eslint-disable react/button-has-type */

import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type Props = {
  name?: string | number,
  onClick?: () => any,
  type?: 'button' | 'submit' | 'reset',
  className?: string,
  selected?: boolean,
};

const LotoCell = ({
  name = '',
  type = 'button',
  onClick,
  className = '',
  selected = false,
}: Props) => (
    <button
      type={type}
      className={cx(
        styles.lotoCell,
        {
          [styles.selected]: selected,
        },
        className,
      )}
      onClick={onClick}
    >
      <div>{name}</div>
    </button>
);

export default LotoCell;
