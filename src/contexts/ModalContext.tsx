import { useState } from "react";
import { createContext, useContext } from "react";
import Modal from "../components/Templates/Modal";
import { modalNames } from "../Utils/ModalsHandler";
import { stateSetter } from "../Utils/Utils";

interface ModalContextInterface {
  modalVisibility: boolean,
  setModalVisibility: stateSetter<boolean>,
  modalName: modalNames | undefined,
  setModalName: stateSetter<modalNames | undefined>
}

const ModalContext = createContext<ModalContextInterface>({} as ModalContextInterface)

export function useModal() {
  return useContext(ModalContext)
}
 
export const ModalProvider: React.FC = ({children}) => {

  const [modalVisibility, setModalVisibility] = useState(true);
  const [modalName, setModalName] = useState<modalNames | undefined>('add')

  const value = {modalVisibility, setModalVisibility, modalName, setModalName}

  return (
    <ModalContext.Provider value={value}>
      {modalVisibility && <Modal />}
      {children}
    </ModalContext.Provider>
  );
}
 