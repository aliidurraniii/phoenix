import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Box, Flex, Heading, Text, Button, Dialog } from '@chakra-ui/react';

export type MissingDataChartProps = {
  data: Array<{
    country: string;
    missing: number;
    status: string;
  }>;
};

export const MissingDataChart = ({ data }: MissingDataChartProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const colors = {
    textPrimary: '#111827',
    textSecondary: '#6B7280',
    link: '#6366F1',
    linkHover: '#4F46E5',
  };

  // Soft, professional pastel palette (distinct per country)
  const colorPalette = [
    { from: '#BFDBFE', to: '#60A5FA' }, // soft blue
    { from: '#BBF7D0', to: '#34D399' }, // soft green
    { from: '#FDE68A', to: '#FBBF24' }, // soft amber
    { from: '#E9D5FF', to: '#A855F7' }, // soft purple
    { from: '#FECACA', to: '#F97373' }, // soft red
    { from: '#BAE6FD', to: '#38BDF8' }, // soft cyan
    { from: '#F9A8D4', to: '#EC4899' }, // soft pink
    { from: '#DCFCE7', to: '#22C55E' }, // soft lime
  ];

  const getGradientForIndex = (index: number) => {
    return colorPalette[index % colorPalette.length];
  };

  const renderChart = (height: number, isModal: boolean = false) => {
    const gradientPrefix = isModal ? 'modal' : '';
    return (
      <Box w="100%" h={height}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <defs>
              {data.map((_, index) => {
                const palette = getGradientForIndex(index);
                return (
                  <linearGradient
                    key={`gradient-${index}-${gradientPrefix}`}
                    id={`gradient-${index}-${gradientPrefix}`}
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor={palette.from} stopOpacity={0.95} />
                    <stop offset="100%" stopColor={palette.to} stopOpacity={0.75} />
                  </linearGradient>
                );
              })}
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis type="number" tick={{ fontSize: 8 }} stroke="#9CA3AF" />
            <YAxis
              dataKey="country"
              type="category"
              tick={{ fontSize: 8 }}
              stroke="#9CA3AF"
              width={isModal ? 60 : 40}
            />
            <Tooltip
              contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: '12px' }}
              formatter={(value: any) => [`${value} days`, 'Missing']}
            />
              <Bar dataKey="missing" radius={[0, 4, 4, 0]}>
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`url(#gradient-${index}-${gradientPrefix})`}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    );
  };

  return (
    <Box bg="white" borderRadius="xl" borderWidth="1px" p={6} boxShadow="sm">
      <Flex justify="space-between" align="center" mb={6}>
        <Box>
          <Heading fontSize="md" fontWeight="semibold" color="gray.900">
            Missing Data by Country
          </Heading>
          <Text fontSize="xs" color="gray.500">
            Countries with incomplete data (Last 30 days)
          </Text>
        </Box>
        <Button
          fontSize="sm"
          variant="ghost"
          fontWeight="medium"
          style={{ color: colors.link }}
          _hover={{ 
            color: colors.linkHover,
            backgroundColor: '#F3F4F6',
          }}
          onClick={() => setIsModalOpen(true)}
        >
          View All →
        </Button>
      </Flex>
      {renderChart(250, false)}

      <Dialog.Root open={isModalOpen} onOpenChange={(e) => setIsModalOpen(e.open)}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content maxW="7xl" style={{ backgroundColor: '#FFFFFF' }}>
            <Dialog.Header>
              <Dialog.Title style={{ color: colors.textPrimary, fontSize: '1.25rem', fontWeight: 600 }}>
                All Missing Data by Country
              </Dialog.Title>
              <Dialog.CloseTrigger />
            </Dialog.Header>
            <Dialog.Body>
              {renderChart(400, true)}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </Box>
  );
};
