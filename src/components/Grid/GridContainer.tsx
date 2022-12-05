import { ElementType, FC, PropsWithChildren, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends PropsWithChildren {
  as?: ElementType;
  margins?: boolean;
  gap?: boolean;
  className?: string;
}

const GridContainer: FC<Props> = ({as: Tag = 'div', margins = true, gap = true, className, children}) => {
  const classes = useMemo(() => {
    return twMerge(
      'grid grid-cols-12 mx-auto w-full',
      margins && 'px-30 md:px-60',
      gap && 'gap-x-30',
      className,
    )
  }, [margins, gap, className])

  return (
    <Tag className={classes}>
      {children}
    </Tag>
  )
}

export default GridContainer
