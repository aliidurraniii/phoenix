import { useState } from 'react';
import { Filter, Download } from 'lucide-react';
import { Box, Flex, Text, HStack, Button, NativeSelect } from '@chakra-ui/react';

export type FilterBarProps = {
  onFilterChange?: (filters: { region: string; status: string; domain: string }) => void;
};

export const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  const [region, setRegion] = useState('All Regions');
  const [status, setStatus] = useState('All Status');
  const [domain, setDomain] = useState('All Domains');

  const colors = {
    textPrimary: '#111827',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    icon: '#6B7280',
  };

  const handleRegionChange = (value: string) => {
    setRegion(value);
    onFilterChange?.({ region: value, status, domain });
  };

  const handleStatusChange = (value: string) => {
    setStatus(value);
    onFilterChange?.({ region, status: value, domain });
  };

  const handleDomainChange = (value: string) => {
    setDomain(value);
    onFilterChange?.({ region, status, domain: value });
  };

  return (
    <Box
      bg="white"
      borderRadius="xl"
      borderWidth="1px"
      p={4}
      boxShadow="sm"
      style={{ borderColor: colors.border }}
    >
      <Flex justify="space-between" align="center">
        <HStack gap={4}>
          <HStack gap={2}>
            <Box as="span" style={{ color: colors.icon }} display="inline-flex" alignItems="center">
              <Filter size={16} stroke="currentColor" />
            </Box>
            <Text fontSize="sm" style={{ color: colors.textSecondary }}>
              Filter by:
            </Text>
          </HStack>
          <NativeSelect.Root
            fontSize="sm"
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            w={40}
            style={{ borderColor: colors.border }}
          >
            <NativeSelect.Field value={region} onChange={(e) => handleRegionChange(e.target.value)}>
              <option>All Regions</option>
              <option>Western Europe</option>
              <option>Central Europe</option>
              <option>Eastern Europe</option>
              <option>Balkans</option>
              <option>Baltics</option>
              <option>Nordics</option>
            </NativeSelect.Field>
          </NativeSelect.Root>
          <NativeSelect.Root
            fontSize="sm"
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            w={32}
            style={{ borderColor: colors.border }}
          >
            <NativeSelect.Field value={status} onChange={(e) => handleStatusChange(e.target.value)}>
              <option>All Status</option>
              <option>Healthy</option>
              <option>Moderate</option>
              <option>Critical</option>
            </NativeSelect.Field>
          </NativeSelect.Root>
          <NativeSelect.Root
            fontSize="sm"
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            w={32}
            style={{ borderColor: colors.border }}
          >
            <NativeSelect.Field value={domain} onChange={(e) => handleDomainChange(e.target.value)}>
              <option>All Domains</option>
              <option>Sales</option>
              <option>Purchase</option>
              <option>Stock</option>
            </NativeSelect.Field>
          </NativeSelect.Root>
        </HStack>
        <HStack>
          <Box as="span" style={{ color: colors.icon }} display="inline-flex" alignItems="center">
            <Download size={16} stroke="currentColor" />
          </Box>
          <Button
            fontSize="sm"
            variant="outline"
            style={{ color: colors.textSecondary }}
            _hover={{ color: colors.textPrimary }}
          >
            Export
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};
