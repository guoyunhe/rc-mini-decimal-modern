import cn from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import './index.css';

export interface MiniDecimalProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function MiniDecimal({ children, className, style }: MiniDecimalProps) {
  return <MiniDecimal className={cn('mini-decimal', className)} style={style}>{children}</MiniDecimal>;
}
