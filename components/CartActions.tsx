import React from 'react';
import { Button, HStack } from '@chakra-ui/react';

interface CartActionsProps {
  domains: string[];
  availability: Record<string, boolean>;
  onClearCart: () => void;
  onRemoveUnavailable: () => void;
  requiredCount: number;
}

const CartActions: React.FC<CartActionsProps> = ({
  domains,
  onClearCart,
  onRemoveUnavailable,
}) => {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(domains.join(', '));
    alert('Domains copied to clipboard');
  };

  return (
    <HStack  mt={4}>
      <Button
       className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg shadow-lg hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:outline-none transition-all"
      onClick={onClearCart} colorScheme="red">
        Clear Cart
      </Button>
      <Button
        className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-lg shadow-lg hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
      
      onClick={onRemoveUnavailable} colorScheme="yellow">
        Remove Unavailable
      </Button>
      <Button
        className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
      
      onClick={handleCopyToClipboard} colorScheme="blue">
        Copy to Clipboard
      </Button>
    </HStack>
  );
};

export default CartActions;
