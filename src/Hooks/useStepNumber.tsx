type ReturnAdderReducer = (
  setterFunc: React.Dispatch<React.SetStateAction<number>>
) => {
  Add: () => void, Reduce: () => void};

const useStepUpdater: ReturnAdderReducer = (setterFunc) => {
  const Add = () => {
    setterFunc(prev => prev + 1)
  }
  const Reduce = () => {
    setterFunc(prev => prev - 1)
  }

  return {Add, Reduce}
}

export default useStepUpdater
