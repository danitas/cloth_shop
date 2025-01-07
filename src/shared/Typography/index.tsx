import React from 'react';
import clsx from 'clsx';
import classes from './index.module.scss';

type variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger';
type weight = 'bold' | 'normal' | 'thin';
type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TTypographyTags<T extends keyof JSX.IntrinsicElements> =
  T extends 'a'
    ? {
        tag?: T;
        href: string;
        variant?: variant;
        weight?: weight;
        size?: size;
        className?: string;
        uppercase?: boolean;
      }
    : {
        tag?: T;
        href?: never;
        variant?: variant;
        weight?: weight;
        size?: size;
        className?: string;
        uppercase?: boolean;
      };

export type TTypographyProps<T extends keyof JSX.IntrinsicElements> =
  React.PropsWithChildren & TTypographyTags<T>;

const Typography = <T extends keyof JSX.IntrinsicElements>({
  tag,
  children,
  variant = 'primary',
  weight = 'normal',
  size = 'md',
  className,
  uppercase = false,
  ...props
}: TTypographyProps<T>) => {
  const Tag = tag ?? 'p';

  const styles = {
    [classes[`variant-${variant}`]]: true,
    [classes[`weight-${weight}`]]: true,
    [classes[`size-${size}`]]: true,
    [classes.uppercase]: uppercase,
  };

  return (
    <Tag {...props} className={clsx(classes.typography, styles, className)}>
      {children}
    </Tag>
  );
};

export default Typography;
