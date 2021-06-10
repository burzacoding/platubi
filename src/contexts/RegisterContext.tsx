import React, { createContext, useState } from "react";

export const RegisterContext = createContext({})

interface errorStateProps {
  email?: string,
  password?: string,
}

export const useRegisterContext = () => {
  const [errors, setErrors] = useState<errorStateProps>({});
  return { errors, setErrors }
}

interface RegisterProviderProps {}

export const RegisterProvider: React.FC<RegisterProviderProps> = ({children}) => {
  
  const { errors } = useRegisterContext()

  return(
    <RegisterContext.Provider value={errors}>
      {children}
    </RegisterContext.Provider>
  )
}
