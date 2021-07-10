import { registerSchemaTypesWithId } from "../Contexts/DashboardContext";
import { FirebaseTimeStamp } from "../firebase/Firebase";
import { getFormattedDateFromMill } from "./Utils";


export const newUserData = {
  wealthViewSymbols: ['ARSBL', 'USD', '74'],
  trackedStocks: ['74', '1', 'ARSBL', '', '' ,'']
}

export const registerOne: registerSchemaTypesWithId = {
  operation: 'add',
  symbol: 'ARSBL',
  value: 1000,
  createdAt: getFormattedDateFromMill(new Date().getTime()),
  favorite: false,
  visible: true,
  isCrypto: false,
  key: 'registerone'
}

export const registerTwo: registerSchemaTypesWithId = {
  operation: 'add',
  symbol: 'USD',
  value: 20,
  createdAt: getFormattedDateFromMill(new Date().getTime()),
  favorite: true,
  visible: true,
  isCrypto: false,
  key: 'registertwo'
}

export const registerOneRemote = {
  operation: 'add',
  symbol: 'ARSBL',
  value: 1000,
  createdAt: FirebaseTimeStamp,
  favorite: false,
  visible: true,
  isCrypto: false,
}

export const registerTwoRemote = {
  operation: 'add',
  symbol: 'USD',
  value: 20,
  createdAt: FirebaseTimeStamp,
  favorite: true,
  visible: true,
  isCrypto: false,
}
