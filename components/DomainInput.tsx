import React, { useState } from 'react';
import { HStack, Input, Button } from '@chakra-ui/react';

interface DomainInputProps {
  onAddDomain: (domain: string) => void;
}

const DomainInput: React.FC<DomainInputProps> = ({ onAddDomain }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    const trimmed = inputValue.trim().toLowerCase();
    if (/\b[a-z0-9-]+(\.com|\.xyz|\.app)\b$/i.test(trimmed)) {
      onAddDomain(trimmed);
      setInputValue('');
    } else {
      alert('Invalid domain. Must end with .com, .xyz, or .app');
    }
  };

  return (
    <HStack mb={4}>
      <Input className='m-5 w-64'
        placeholder="Enter domain (e.g., example.com)"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={handleAdd} colorScheme="blue">
        Add
      </Button>
    </HStack>
  );
};

export default DomainInput;
