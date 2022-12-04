import { createContext, useContext, useState, FC, PropsWithChildren } from "react"

const Context = createContext([])

export const AppIsReadyProvider: FC<PropsWithChildren> = ({ children }) => {
  const [appIsReady, setAppIsReady] = useState(false)
  return (
    <Context.Provider value={[appIsReady, setAppIsReady]}>
      {children}
    </Context.Provider>
  )
}

export const useAppIsReadyContext = () => {
  return useContext(Context)
}
