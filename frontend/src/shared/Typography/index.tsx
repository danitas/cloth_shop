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
type size =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | {
      mobile: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
      desktop: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    };

type TRel = 'noopener' | 'noreferrer' | 'nofollow';

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
        title: string;
        target?: '_blank';
        rel?: TRel;
      }
    : {
        tag?: T;
        href?: never;
        variant?: variant;
        weight?: weight;
        size?: size;
        className?: string;
        uppercase?: boolean;
        title?: string;
        rel?: string;
        target?: never;
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

  const isResponsiveSize = typeof size === 'object';

  const styles = {
    [classes[`variant-${variant}`]]: true,
    [classes[`weight-${weight}`]]: true,
    [classes[`size-${isResponsiveSize ? size.mobile : size}`]]:
      !isResponsiveSize || size.mobile,
    [classes[`desktop-size-${isResponsiveSize ? size.desktop : ''}`]]:
      isResponsiveSize && size.desktop,
    [classes.uppercase]: uppercase,
  };

  return (
    <Tag
      {...props}
      className={clsx(classes.typography, styles, className)}
      {...(Tag === 'a' && props.target === '_blank'
        ? { rel: props.rel ?? 'noopener' }
        : {})}
    >
      {children}
    </Tag>
  );
};

export default Typography;
