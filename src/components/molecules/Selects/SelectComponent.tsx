import React from 'react';
import Select, { GroupTypeBase, Styles, NamedProps } from 'react-select'
import  { useTheme } from "styled-components";
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
          {value: 'usd', label: 'USD - Dólares estadounidenses'},
          {value: 'eur', label: 'EUR - Euros'},
          {value: 'ars', label: 'ARS - Pesos argentinos (dolar oficial)'},
          {value: 'arsbl', label: 'ARS - Pesos argentinos (dolar blue)'},
          {value: 'bob', label: 'BOB - Pesos bolivianos'},
          {value: 'brl', label: 'BRL - Reales brasileros'},
          {value: 'clp', label: 'CLP - Pesos chilenos'},
          {value: 'cop', label: 'COP - Pesos colombiano'},
          {value: 'cup', label: 'CUP- Pesos cubanos'},
          {value: 'gbp', label: 'GBP - Libras esterlinas'},
          {value: 'jpy', label: 'JPY - Yenes japoneses'},
          {value: 'mxn', label: 'MXN - Pesos mexicanos'},
          {value: 'PEN', label: 'PEN - Soles peruanos'},
          {value: 'PYG', label: 'PYG - Guaranis paraguayos'},
          {value: 'UYU', label: 'UYU - Pesos uruguayos'},
      ]
  },
  {
      label: 'Criptomonedas',
      options: [
        {
            value: "1",
            label: "BTC - Bitcoin"
        },
        {
            value: "1027",
            label: "ETH - Ethereum"
        },
        {
            value: "825",
            label: "USDT - Tether"
        },
        {
            value: "1839",
            label: "BNB - Binance Coin"
        },
        {
            value: "2010",
            label: "ADA - Cardano"
        },
        {
            value: "74",
            label: "DOGE - Dogecoin"
        },
        {
            value: "52",
            label: "XRP - XRP"
        },
        {
            value: "3408",
            label: "USDC - USD Coin"
        },
        {
            value: "6636",
            label: "DOT - Polkadot"
        },
        {
            value: "4687",
            label: "BUSD - Binance USD"
        },
        {
            value: "7083",
            label: "UNI - Uniswap"
        },
        {
            value: "1831",
            label: "BCH - Bitcoin Cash"
        },
        {
            value: "2",
            label: "LTC - Litecoin"
        },
        {
            value: "5426",
            label: "SOL - Solana"
        },
        {
            value: "1975",
            label: "LINK - Chainlink"
        },
        {
            value: "3890",
            label: "MATIC - Polygon"
        },
        {
            value: "3717",
            label: "WBTC - Wrapped Bitcoin"
        },
        {
            value: "512",
            label: "XLM - Stellar"
        },
        {
            value: "1321",
            label: "ETC - Ethereum Classic"
        },
        {
            value: "2416",
            label: "THETA - THETA"
        },
        {
            value: "8916",
            label: "ICP - Internet Computer"
        },
        {
            value: "4943",
            label: "DAI - Dai"
        },
        {
            value: "3077",
            label: "VET - VeChain"
        },
        {
            value: "2280",
            label: "FIL - Filecoin"
        },
        {
            value: "1958",
            label: "TRX - TRON"
        },
        {
            value: "1765",
            label: "EOS - EOS"
        },
        {
            value: "328",
            label: "XMR - Monero"
        },
        {
            value: "5994",
            label: "SHIB - SHIBA INU"
        },
        {
            value: "7278",
            label: "AAVE - Aave"
        },
        {
            value: "3635",
            label: "CRO - Crypto.com Coin"
        },
        {
            value: "3602",
            label: "BSV - Bitcoin SV"
        },
        {
            value: "4030",
            label: "ALGO - Algorand"
        },
        {
            value: "1518",
            label: "MKR - Maker"
        },
        {
            value: "4195",
            label: "FTT - FTX Token"
        },
        {
            value: "4023",
            label: "BTCB - Bitcoin BEP2"
        },
        {
            value: "4256",
            label: "KLAY - Klaytn"
        },
        {
            value: "1376",
            label: "NEO - Neo"
        },
        {
            value: "2011",
            label: "XTZ - Tezos"
        },
        {
            value: "7186",
            label: "CAKE - PancakeSwap"
        },
        {
            value: "6945",
            label: "AMP - Amp"
        },
        {
            value: "4172",
            label: "LUNA - Terra"
        },
        {
            value: "3794",
            label: "ATOM - Cosmos"
        },
        {
            value: "3957",
            label: "LEO - UNUS SED LEO"
        },
        {
            value: "1720",
            label: "MIOTA - IOTA"
        },
        {
            value: "7129",
            label: "UST - TerraUSD"
        },
        {
            value: "3822",
            label: "TFUEL - Theta Fuel"
        },
        {
            value: "5805",
            label: "AVAX - Avalanche"
        },
        {
            value: "2502",
            label: "HT - Huobi Token"
        },
        {
            value: "1168",
            label: "DCR - Decred"
        },
        {
            value: "4642",
            label: "HBAR - Hedera Hashgraph"
        },
        {
            value: "3718",
            label: "BTT - BitTorrent"
        },
        {
            value: "5692",
            label: "COMP - Compound"
        },
        {
            value: "5034",
            label: "KSM - Kusama"
        },
        {
            value: "1274",
            label: "WAVES - Waves"
        },
        {
            value: "6719",
            label: "GRT - The Graph"
        },
        {
            value: "2563",
            label: "TUSD - TrueUSD"
        },
        {
            value: "6892",
            label: "EGLD - Elrond"
        },
        {
            value: "2700",
            label: "CEL - Celsius"
        },
        {
            value: "1437",
            label: "ZEC - Zcash"
        },
        {
            value: "4066",
            label: "CHZ - Chiliz"
        },
        {
            value: "4157",
            label: "RUNE - THORChain"
        },
        {
            value: "131",
            label: "DASH - Dash"
        },
        {
            value: "2394",
            label: "TEL - Telcoin"
        },
        {
            value: "5864",
            label: "YFI - yearn.finance"
        },
        {
            value: "873",
            label: "XEM - NEM"
        },
        {
            value: "5665",
            label: "HNT - Helium"
        },
        {
            value: "2634",
            label: "XDC - XinFin Network"
        },
        {
            value: "2682",
            label: "HOT - Holo"
        },
        {
            value: "4847",
            label: "STX - Stacks"
        },
        {
            value: "2469",
            label: "ZIL - Zilliqa"
        },
        {
            value: "6758",
            label: "SUSHI - SushiSwap"
        },
        {
            value: "2130",
            label: "ENJ - Enjin Coin"
        },
        {
            value: "5567",
            label: "CELO - Celo"
        },
        {
            value: "8335",
            label: "MDX - Mdex"
        },
        {
            value: "6535",
            label: "NEAR - NEAR Protocol"
        },
        {
            value: "1697",
            label: "BAT - Basic Attention Token"
        },
        {
            value: "3330",
            label: "PAX - Paxos Standard"
        },
        {
            value: "1966",
            label: "MANA - Decentraland"
        },
        {
            value: "3155",
            label: "QNT - Quant"
        },
        {
            value: "2083",
            label: "BTG - Bitcoin Gold"
        },
        {
            value: "2586",
            label: "SNX - Synthetix"
        },
        {
            value: "2694",
            label: "NEXO - Nexo"
        },
        {
            value: "1727",
            label: "BNT - Bancor"
        },
        {
            value: "2135",
            label: "REV - Revain"
        },
        {
            value: "1684",
            label: "QTUM - Qtum"
        },
        {
            value: "1698",
            label: "ZEN - Horizen"
        },
        {
            value: "109",
            label: "DGB - DigiByte"
        },
        {
            value: "3945",
            label: "ONE - Harmony"
        },
        {
            value: "1567",
            label: "NANO - Nano"
        },
        {
            value: "6538",
            label: "CRV - Curve DAO Token"
        },
        {
            value: "1042",
            label: "SC - Siacoin"
        },
        {
            value: "3897",
            label: "OKB - OKB"
        },
        {
            value: "2566",
            label: "ONT - Ontology"
        },
        {
            value: "2499",
            label: "CHSB - SwissBorg"
        },
        {
            value: "1896",
            label: "ZRX - 0x"
        },
        {
            value: "4779",
            label: "HUSD - HUSD"
        },
        {
            value: "2087",
            label: "KCS - KuCoin Token"
        },
        {
            value: "1808",
            label: "OMG - OMG Network"
        },
        {
            value: "3513",
            label: "FTM - Fantom"
        },
        {
            value: "5617",
            label: "UMA - UMA"
        }
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
      fontFamily: 'Montserrat',
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
      noOptionsMessage={() => 'No se encontró el activo.'}
      placeholder="Buscar activo financiero..."
      {...props}
      />
  );
}
 
export default SelectComponent;
