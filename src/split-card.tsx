import React from 'react';

import Card, { CardProps } from './card';

import cn from './utilities/classnames';

export interface SplitCardSeparatorProps {
  label?: string;
  className?: string;
}

export const SplitCardSeparator: React.SFC<SplitCardSeparatorProps> = ({
  label,
  className,
  ...attributes,
}) => {
  return <hr className={cn(className, { 'has-label': label })} data-label={label} />;
};

export const SplitCard: React.SFC<CardProps> = ({
  children,
  className,
  ...attributes,
}) => {

  return (
    <Card
      thin
      className={cn('is-split', className)}
      {...attributes}
    >
      <div className="split-content">
        {children}
      </div>
    </Card>
  );
};

export default SplitCard;
