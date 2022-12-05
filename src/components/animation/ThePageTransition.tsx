import { FC, PropsWithChildren } from 'react'
import { SwitchTransition, Transition } from 'react-transition-group'
import gsap from 'gsap'
import { useRouter } from 'next/router'

const PageTransition: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const duration = {
    in: 0.5,
    out: 0.25,
  }

  const onPageEnter = (node) => {
    gsap.fromTo(
      node,
      {  autoAlpha: 0  },
      {  autoAlpha: 1, duration: duration.in, ease: 'none' }
    )
  }


  const onPageExit = (node) => {
    gsap.fromTo(node,
      { autoAlpha: 1 },
      { autoAlpha: 0, duration: duration.out, ease: 'none' }
    )
  }

  return (
    <SwitchTransition>
      <Transition
        key={router.asPath}
        timeout={duration.out * 1000}
        in={true}
        onEnter={onPageEnter}
        onExit={onPageExit}
        onExited={() => window.scrollTo(0, 0)}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        {children}
      </Transition>
    </SwitchTransition>
  )
}

export default PageTransition
