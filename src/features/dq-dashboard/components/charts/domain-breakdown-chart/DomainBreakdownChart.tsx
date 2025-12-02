import { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Heading, Text, Flex, HStack, Button, Dialog } from '@chakra-ui/react';
import { Maximize2 } from 'lucide-react';

export type DomainBreakdownChartProps = {
  data: Array<{ name: string; value: number; color: string }>;
};

export const DomainBreakdownChart = ({ data }: DomainBreakdownChartProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderChart = (size: number) => (
    <Box w="100%" h={size}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={size === 200 ? 50 : 80}
            outerRadius={size === 200 ? 80 : 120}
            dataKey="value"
            label={({ value }: any) => `${value}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: any) => [`${value}%`, 'Completeness']}
            contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: '12px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );

  return (
    <>
      <Box bg="white" borderRadius="xl" borderWidth="1px" p={6} boxShadow="sm">
        <Flex justify="space-between" align="center" mb={4}>
          <Box>
            <Heading fontSize="md" fontWeight="semibold" color="gray.900" mb={1}>
              Domain Breakdown
            </Heading>
            <Text fontSize="xs" color="gray.500">
              Current completeness by domain
            </Text>
          </Box>
          <Button
            size="xs"
            variant="ghost"
            onClick={() => setIsExpanded(true)}
            style={{ color: '#6B7280' }}
            _hover={{ backgroundColor: '#F3F4F6' }}
          >
            <Maximize2 size={16} />
          </Button>
        </Flex>
        {renderChart(200)}
        <Flex justify="center" gap={4} mt={4}>
          {data.map((item, i) => (
            <HStack key={i} gap={2} mx={2}>
              <Box w={3} h={3} borderRadius="full" bg={item.color} />
              <Text fontSize="xs" color="gray.600">
                {item.name}
              </Text>
            </HStack>
          ))}
        </Flex>
      </Box>

      <Dialog.Root open={isExpanded} onOpenChange={(e) => setIsExpanded(e.open)}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content maxW="7xl" style={{ backgroundColor: '#FFFFFF' }}>
            <Dialog.Header>
              <Dialog.Title style={{ color: '#111827', fontSize: '1rem', fontWeight: 600 }}>
                Domain Breakdown
              </Dialog.Title>
              <Dialog.CloseTrigger />
            </Dialog.Header>
            <Dialog.Body>
              {renderChart(400)}
              <Flex justify="center" gap={4} mt={4}>
                {data.map((item, i) => (
                  <HStack key={i} gap={2} mx={2}>
                    <Box w={3} h={3} borderRadius="full" bg={item.color} />
                    <Text fontSize="sm" color="gray.600">
                      {item.name}
                    </Text>
                  </HStack>
                ))}
              </Flex>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  );
};

