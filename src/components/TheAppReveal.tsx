import { FC, useCallback, useEffect, useRef } from 'react'
import { Transition } from 'react-transition-group'
import { gsap } from 'gsap'
import { useAppIsReadyContext } from "../context/appIsReady"

const TheAppReveal: FC = () => {
  const nodeRef = useRef(null)
  const [appIsReady, setAppIsReady] = useAppIsReadyContext()
  const duration = 0.25

  const hideAppReveal = useCallback(() => {
    setAppIsReady(true)
    window.removeEventListener('load', hideAppReveal)
  }, [setAppIsReady])

  useEffect(() => {
    if (!appIsReady)
      if (document.readyState !== 'complete')
        window.addEventListener('load', hideAppReveal)
      else
        hideAppReveal()
  }, [appIsReady, hideAppReveal])

  const onExit = () => {
    gsap.to(nodeRef.current, { autoAlpha: 0, duration: duration, ease: 'none' })
  }

  return (
    <Transition
      nodeRef={nodeRef}
      in={!appIsReady}
      timeout={duration * 1000}
      onExit={onExit}
      unmountOnExit={true}
    >
      <div ref={nodeRef} className="fixed inset-0 flex items-center justify-center bg-dark" />
    </Transition>
  )
}

export default TheAppReveal
