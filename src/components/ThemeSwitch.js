import React from 'react'
import { Switch, VStack, useColorMode } from "@chakra-ui/react";

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack>
      <p>Dark theme</p>
      <Switch
        colorScheme="teal"
        size="lg"
        onChange={toggleColorMode}
        isChecked={colorMode === 'dark'}
      />
    </VStack>
  )
};

export default ThemeSwitch;
