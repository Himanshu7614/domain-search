import React from 'react';
import { Text, VStack } from '@chakra-ui/react';

interface CartStatusProps {
  currentCount: number;
  requiredCount: number;
}

const CartStatus: React.FC<CartStatusProps> = ({
  currentCount,
  requiredCount,
}) => {
//   const progressValue = (currentCount / requiredCount) * 100;

  return (
    <VStack mb={4}>
      <Text>
        {currentCount} out of {requiredCount} domains added
      </Text>
      {/* <ProgressBar 
        value={progressValue} 
        size="sm" 
        colorScheme="green" 
        width="100%"
      /> */}
    </VStack>
  );
};

export default CartStatus;
