import { newRegisterValuesInterface, QuerySnapshotDocumentData, registerSchemaTypes, registerSchemaTypesWithId } from "../contexts/DashboardContext"
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

export const mapRegistersWithId = (element: QuerySnapshotDocumentData): registerSchemaTypesWithId => ({
  ...element.data() as registerSchemaTypes,
  key: element.id
})

//THIS IS A UTILITY SO IT SHOULD BE IN UTILS AND NOT IN THE DASHBOARDCONTEXT
export const buildRegisterSchema = ({operation, symbol, value}: newRegisterValuesInterface): registerSchemaTypes => ({
  operation,
  symbol,
  value,
  createdAt: FirebaseTimeStamp,
  favorite: false,
  visible: true,
})

