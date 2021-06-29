import { useState } from "react";
import { createContext, useContext } from "react";
import Modal from "../components/Templates/Modal";
import { modalNames } from "../Utils/ModalsHandler";
import { stateSetter } from "../Utils/Utils";
import { registerSchemaTypesWithId } from "./DashboardContext";

interface ModalContextInterface {
  modalVisibility: boolean,
  setModalVisibility: stateSetter<boolean>,
  modalName: modalNames | undefined,
  setModalName: stateSetter<modalNames | undefined>,
  openModal: (modalNameParam: modalNames, config?: registerSchemaTypesWithId | string) => void,
  closeModal: () => void,
  modalConfig: registerSchemaTypesWithId | string | undefined,
  setModalConfig: stateSetter<registerSchemaTypesWithId | string | undefined>
}

const ModalContext = createContext<ModalContextInterface>({} as ModalContextInterface)

export function useModal() {
  return useContext(ModalContext)
}
 
export const ModalProvider: React.FC = ({children}) => {

  const [modalConfig, setModalConfig] = useState<registerSchemaTypesWithId | string>()

  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalName, setModalName] = useState<modalNames | undefined>(undefined) //DEFAULT THIS TO UNDEF
  const openModal = (modalNameParam: modalNames, config?: registerSchemaTypesWithId | string | undefined) => {
    setModalName(modalNameParam)
    setModalConfig(config)
    setModalVisibility(true)
  }

  const closeModal = () => {
    setModalName(undefined)
    setModalVisibility(false)
  }
  
  const value = {modalVisibility, setModalVisibility, modalName, setModalName, openModal, closeModal, modalConfig, setModalConfig}

  return (
    <ModalContext.Provider value={value}>
      {modalVisibility && <Modal />}
      {children}
    </ModalContext.Provider>
  );
}
 