import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: 'Light',
    useSystemColorMode: true,
};

const colors = {
    primary: {
        cream: '#F5F0B0',
        orange: '#F78B1E',
        deepBlue: '#1B3F4C',
        teal: '36C6C2',
        mutedBlue: '#348BA3',
    }
};

const theme = extendTheme({ config, colors });

export default theme;