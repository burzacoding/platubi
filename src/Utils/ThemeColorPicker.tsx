const ThemeColorPicker = (props: any, colorDark: string, colorLight: string) => props.theme.theme === 'dark' ? colorDark : 
colorLight

export default ThemeColorPicker
