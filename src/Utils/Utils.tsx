import RegisterFieldEmpty from "../components/molecules/RegisterFieldEmpty"
import { buildSchemaInterface, newRegisterValuesInterface, QuerySnapshotDocumentData, receivedRemoteRegisterSchemaTypes, registerSchemaTypes, registerSchemaTypesWithId } from "../Contexts/DashboardContext"
import { FirebaseTimeStamp } from "../firebase/Firebase"

export const ThemeColorPicker = (props: any, colorDark: string, colorLight: string) => props.theme.theme === 'dark' ? colorDark : 
colorLight

export const selectBorders = (formik: any, value: string) => {
  if (formik.touched[value] === undefined) {
    return {
      dark: 'none',
      light: 'none'
    }
  }
  if (formik.errors[value]) {
    return {
      dark: '0 0 1px 2px #800000',
      light: '0 0 1px 2px #ca17177a', 
    }
  }
  return {
    dark: '0 0 1px 2px #044abb92',
    light: '0 0 1px 2px #00378f92',
  }
}

export const mapRegistersWithId = (element: QuerySnapshotDocumentData): registerSchemaTypesWithId => {
  const { createdAt } = element.data() as receivedRemoteRegisterSchemaTypes
  const newDate = getFormattedDateFromMill(createdAt.toMillis())
  return {
    ...element.data() as registerSchemaTypes,
    createdAt: newDate,
    key: element.id
  }
}

export const checkIsCrypto = (probablyNumericValue: string) => /^\d+$/.test(probablyNumericValue)

export function getFormattedDateFromMill (miliseconds: number) {
  const date = new Date(miliseconds)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear().toString().slice(2)
  const hour = date.getHours()
  const minutes = date.getMinutes()
  return `${day}-${month}-${year} ${hour}:${minutes}`
}

export const buildRegisterSchema = ({operation, symbol, value}: newRegisterValuesInterface): buildSchemaInterface => ({
  local: {
    operation,
    symbol,
    value,
    createdAt: getFormattedDateFromMill(new Date().getTime()),
    favorite: false,
    visible: true,
    isCrypto: checkIsCrypto(symbol)
  },
  remote: {
    operation,
    symbol,
    value,
    createdAt: FirebaseTimeStamp,
    favorite: false,
    visible: true,
    isCrypto: checkIsCrypto(symbol)
  },
})

export const arrayPopulateWithEmpties = (array: JSX.Element[], quantity: number) => {
  if (quantity <= 0) return array
  const EmptysArr: JSX.Element[] = []
  for (let i = 0; i < quantity; i++) {
    EmptysArr.push(<RegisterFieldEmpty key={`key${i}`} />)
  }
  return array?.concat(EmptysArr)
}


export type stateSetter<T> = React.Dispatch<React.SetStateAction<T>>

export const fixDecimals = (number: number) => {
  const asWord = number.toString()
  if (asWord.indexOf('.') !== -1) {
    const decimals = asWord.split('.')
    if (decimals[1].length > 8) {
      const fixedDecimals = decimals[1].slice(0, 8)
      decimals[1] = fixedDecimals
      return parseFloat(decimals.join('.'))
    } else {
      return number
    }
  }
  return number
}
