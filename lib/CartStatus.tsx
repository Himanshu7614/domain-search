export type DomainStatus = {
    domain: string;
    isAvailable: boolean;
  };
  
  /**
   * Mock function to simulate checking domain availability.
   * @param domain - The domain name to check (e.g., "example.com").
   * @returns A Promise resolving to the availability status of the domain.
   */
  export const isDomainAvailable = async (domain: string): Promise<DomainStatus> => {
    // Simulate a network delay of 500ms
    await new Promise((resolve) => setTimeout(resolve, 500));
  
    // Mock logic for determining availability based on domain name
    const availableDomains = ["example.com", "test.com", "myapp.xyz", "cool.app"];
    const isAvailable = availableDomains.includes(domain.toLowerCase());
  
    return {
      domain,
      isAvailable,
    };
  };
  