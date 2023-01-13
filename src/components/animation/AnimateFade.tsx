import { FC, PropsWithChildren, ElementType, useEffect, useMemo, useRef, useCallback } from 'react'
import { twMerge } from 'tailwind-merge'
import { gsap } from 'gsap'
import { useIsAppReadyContext } from '../../context/isAppReady'

type Props = {
  as?: ElementType;
  show: boolean;
  duration?: number;
  delay?: number;
  className?: string;
}

const AnimateFade: FC<PropsWithChildren<Props>> = ({
  as: Tag = 'div',
  show,
  duration = 0.5,
  delay = 0,
  children,
  className,
}) => {
  const containerRef = useRef<HTMLElement>(null)
  const [appIsReady] = useIsAppReadyContext()

  const classes = useMemo(() => {
    return twMerge('opacity-0', className)
  }, [className])

  const animate = useCallback(() => {
    gsap.to(containerRef.current, { opacity: 1, duration, delay, ease: 'none' })
  }, [delay, duration])

  useEffect(() => {
    if (appIsReady && show)
      animate()
  }, [appIsReady, show, animate])

  return (
    <Tag ref={containerRef} className={classes}>
      {children}
    </Tag>
  )
}

export default AnimateFade
