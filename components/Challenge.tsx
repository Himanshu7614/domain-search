"use client";

import React, { useState, useCallback } from "react";
import { Box, Heading } from "@chakra-ui/react";
import DomainInput from "./DomainInput";
import CartActions from "./CartActions";
import CartStatus from "./CartStatus";
import { isDomainAvailable } from "@/lib/CartStatus";

interface ChallengeProps {
  numDomainsRequired: number;
}

const Challenge: React.FC<ChallengeProps> = ({ numDomainsRequired }) => {
  const [domains, setDomains] = useState<string[]>([]);
  const [availability, setAvailability] = useState<Record<string, boolean>>({});

  const addDomain = useCallback(
    async (domain: string) => {
      const isAvailable = await isDomainAvailable(domain);
      if (!domains.includes(domain)) {
        setDomains((prev) => [...prev, domain]);
        setAvailability((prev) => ({
          ...prev,
          [domain]: isAvailable ? true : false,
        }));
      }
    },
    [domains]
  );

  // const removeDomain = useCallback(
  //   (domain: string) => {
  //     setDomains((prev) => prev.filter((d) => d !== domain));
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     const { [domain]: _, ...rest } = availability;
  //     setAvailability(rest);
  //   },
  //   [availability]
  // );

  const clearCart = () => {
    setDomains([]);
    setAvailability({});
  };

  return (
    <Box p={5} className="flex flex-col justify-center items-center bg-slate-300 p-5 border rounded-lg border-red-100 mt-24 w-[50%] mx-auto">
      <Heading mb={5}>Domain Cart</Heading>
      <DomainInput onAddDomain={addDomain} />
      <CartStatus
        currentCount={domains.length}
        requiredCount={numDomainsRequired}
      />
 
      <CartActions
        domains={domains}
        availability={availability}
        onClearCart={clearCart}
        onRemoveUnavailable={() =>
          setDomains(domains.filter((d) => availability[d]))
        }
        requiredCount={numDomainsRequired}
      />
    </Box>
  );
};

export default Challenge;
