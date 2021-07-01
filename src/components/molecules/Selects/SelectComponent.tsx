import Select, { GroupTypeBase, Styles, NamedProps } from 'react-select'
import { useTheme } from "styled-components";
import { ThemeColorPicker } from "../../../Utils/Utils";

export interface SelectComponentProps {
  props: NamedProps
}

export type selectStylesProp = Partial<Styles<{
  label: string;
  value: string;
}, false, GroupTypeBase<{
  label: string;
  value: string;
}>>> | undefined


const options = [
  {
      label: 'Divisas',
      options: [
          {value: 'usd', label: 'Dolar estadounidense - USD'},
          {value: 'ars', label: 'Peso argentino - ARS'},
          {value: 'mxn', label: 'Peso mexicano - MXN'},
      ]
  },
  {
      label: 'Criptomonedas',
      options: [
          {value: 'btc', label: 'Bitcoin - BTC'},
          {value: 'doge', label: 'Dogecoin - DOGE'},
          {value: 'bat', label: 'Basic Attention Token - BAT'},
      ]
  }
]



const SelectComponent: React.FC<NamedProps> = ({...props}) => {

  //const { apiOptions } = useApi()

  const theme = useTheme()

  const selectStyles: selectStylesProp = {
    groupHeading: (provided, stats) => ({
      ...provided,
      color: theme.fontContrastTwo,
      backgroundColor: theme.divBackground,
      fontWeight: 600,
      fontSize: '0.9em'
    }),
    placeholder: (provided, stats) => ({
      ...provided,
      color: theme.fontContrastSix,
      backgroundColor: theme.divBackground,
      fontSize: '12px',
      '@media (min-width: 360px)': {
        fontSize: '14px',
      },
      '@media (min-width: 768px)': {
        fontSize: '16px',
      },
    }),
    option: (provided, stats) => ({
      ...provided,
      color: theme.fontContrastTwo,
      backgroundColor: stats.isFocused ? theme.divDarkerBackground : theme.divBackground,
      opacity: 0.7,
      fontSize: '12px',
      '@media (min-width: 360px)': {
        fontSize: '14px',
      },
      '@media (min-width: 768px)': {
        fontSize: '16px',
      },
    }),
    container : (provided, stats) => ({
      ...provided,
      color: theme.fontContrastTwo,
      width: '100%',
      marginLeft: '12px',
      '@media (min-width: 768px)': {
        fontSize: '16px',
      },
    }),
    menu: (provided, stats) => ({
      ...provided,
      color: theme.fontContrastTwo,
      backgroundColor: theme.divBackground,
    }),
    control: (provided, stats) => ({
        ...provided,
        color: theme.fontContrastTwo,
        backgroundColor: theme.divBackground,
        boxShadow: "none",
        borderColor: stats.menuIsOpen ? '#03A63C' : 'none',
        ":hover" : {
          border: ThemeColorPicker(theme, `solid 1px #0E4777`, `solid 1px #03A63C`),
        },
        ":focused" : {
          border: ThemeColorPicker(theme, `solid 1px #0E4777`, `solid 1px #03A63C`),
          boxShadow: "none",
        },
      }),
    singleValue: (provided, stats) => ({
      ...provided,
      color: theme.fontContrastTwo,
      backgroundColor: theme.divBackground,
      opacity: 0.8,
      fontSize: '12px',
      '@media (min-width: 360px)': {
        fontSize: '14px',
      },
      '@media (min-width: 768px)': {
        fontSize: '16px',
      },
    }),
    input: (provided, stats) => ({
      ...provided,
      color: theme.fontContrastTwo,
      opacity: 0.8,
      fontSize: '12px',
      '@media (min-width: 360px)': {
        fontSize: '14px',
      },
      '@media (min-width: 768px)': {
        fontSize: '16px',
      },
    }),
  }

  return (
    <Select
      options={options}
      styles={selectStyles}
      maxMenuHeight={240}
      placeholder="Divisa / Criptomoneda"
      {...props}
      />
  );
}
 
export default SelectComponent;
