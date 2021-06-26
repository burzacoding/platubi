import { useState } from "react";
import { createContext, useContext } from "react";
import Modal from "../components/Templates/Modal";
import { modalNames } from "../Utils/ModalsHandler";
import { stateSetter } from "../Utils/Utils";

interface ModalContextInterface {
  modalVisibility: boolean,
  setModalVisibility: stateSetter<boolean>,
  modalName: modalNames | undefined,
  setModalName: stateSetter<modalNames | undefined>,
  openModal: (modalNameParam: modalNames) => void,
  closeModal: () => void,


}

const ModalContext = createContext<ModalContextInterface>({} as ModalContextInterface)

export function useModal() {
  return useContext(ModalContext)
}
 
export const ModalProvider: React.FC = ({children}) => {

  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalName, setModalName] = useState<modalNames | undefined>('add') //DEFAULT THIS TO UNDEF

  const openModal = (modalNameParam: modalNames) => {
    setModalName(modalNameParam)
    setModalVisibility(true)
  }

  const closeModal = () => {
    setModalName(undefined)
    setModalVisibility(false)
  }


  const value = {modalVisibility, setModalVisibility, modalName, setModalName, openModal, closeModal}

  return (
    <ModalContext.Provider value={value}>
      {modalVisibility && <Modal />}
      {children}
    </ModalContext.Provider>
  );
}
 