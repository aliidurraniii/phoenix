import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Flex, Heading, Text, HStack, Button, Dialog } from '@chakra-ui/react';
import { Maximize2 } from 'lucide-react';

export type DQTrendChartProps = {
  data: Array<{
    month: string;
    overall: number;
    sales: number;
    purchase: number;
    stock: number;
  }>;
};

export const DQTrendChart = ({ data }: DQTrendChartProps) => {
  const [selectedFilter, setSelectedFilter] = useState<'6M' | '1Y' | 'ALL'>('6M');
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleSeries, setVisibleSeries] = useState({
    overall: true,
    sales: true,
    purchase: true,
    stock: true,
  });

  // Generate extended data for 1Y and ALL
  const oneYearData = [
    { month: 'Jan', overall: 92.5, sales: 93.2, purchase: 92.1, stock: 92.0 },
    { month: 'Feb', overall: 93.1, sales: 93.8, purchase: 92.8, stock: 92.7 },
    { month: 'Mar', overall: 93.8, sales: 94.5, purchase: 93.5, stock: 93.4 },
    { month: 'Apr', overall: 94.2, sales: 94.9, purchase: 93.9, stock: 93.8 },
    { month: 'May', overall: 94.5, sales: 95.2, purchase: 94.2, stock: 94.1 },
    { month: 'Jun', overall: 94.8, sales: 95.5, purchase: 94.5, stock: 94.4 },
    ...data,
  ];

  const allData = [
    { month: '2023-Q1', overall: 91.2, sales: 91.8, purchase: 90.9, stock: 90.8 },
    { month: '2023-Q2', overall: 92.5, sales: 93.1, purchase: 92.2, stock: 92.1 },
    { month: '2023-Q3', overall: 93.1, sales: 93.7, purchase: 92.8, stock: 92.7 },
    { month: '2023-Q4', overall: 93.8, sales: 94.4, purchase: 93.5, stock: 93.4 },
    ...oneYearData,
  ];

  const getFilteredData = () => {
    switch (selectedFilter) {
      case '6M':
        return data;
      case '1Y':
        return oneYearData;
      case 'ALL':
        return allData;
      default:
        return data;
    }
  };

  const filteredData = getFilteredData();
  const subtitleText =
    selectedFilter === '6M'
      ? '6-month historical view by domain'
      : selectedFilter === '1Y'
        ? '12-month historical view by domain'
        : 'Complete historical view by domain';

  const colors = {
    activeBg: '#E0EAFF',
    activeText: '#1D4ED8',
    inactiveText: '#6B7280',
    hoverBg: '#F3F4F6',
  };

  const seriesColors = {
    overall: { active: '#3B82F6', bg: '#DBEAFE', text: '#1E40AF' },
    sales: { active: '#10B981', bg: '#D1FAE5', text: '#047857' },
    purchase: { active: '#F59E0B', bg: '#FEF3C7', text: '#B45309' },
    stock: { active: '#8B5CF6', bg: '#F5F3FF', text: '#6D28D9' },
  };

  const toggleSeries = (series: keyof typeof visibleSeries) => {
    setVisibleSeries((prev) => ({
      ...prev,
      [series]: !prev[series],
    }));
  };

  const renderChart = (height: number) => (
    <>
      <Box w="100%" h={height}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="colorOverall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity={0.8} />
                <stop offset="30%" stopColor="#3B82F6" stopOpacity={0.6} />
                <stop offset="70%" stopColor="#60A5FA" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#93C5FD" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#059669" stopOpacity={0.8} />
                <stop offset="30%" stopColor="#10B981" stopOpacity={0.6} />
                <stop offset="70%" stopColor="#34D399" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#6EE7B7" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorPurchase" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D97706" stopOpacity={0.8} />
                <stop offset="30%" stopColor="#F59E0B" stopOpacity={0.6} />
                <stop offset="70%" stopColor="#FBBF24" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#FCD34D" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity={0.8} />
                <stop offset="30%" stopColor="#8B5CF6" stopOpacity={0.6} />
                <stop offset="70%" stopColor="#A78BFA" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#C4B5FD" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="month" tick={{ fontSize: 8 }} stroke="#9CA3AF" />
            <YAxis domain={[90, 100]} tick={{ fontSize: 8 }} stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB', fontSize: '12px' }}
              formatter={(value: any) => [`${value}%`, '']}
            />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            {visibleSeries.overall && (
              <Area
                type="monotone"
                dataKey="overall"
                stroke="#3B82F6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorOverall)"
                name="Overall"
              />
            )}
            {visibleSeries.sales && (
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#10B981"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorSales)"
                name="Sales"
              />
            )}
            {visibleSeries.purchase && (
              <Area
                type="monotone"
                dataKey="purchase"
                stroke="#F59E0B"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorPurchase)"
                name="Purchase"
              />
            )}
            {visibleSeries.stock && (
              <Area
                type="monotone"
                dataKey="stock"
                stroke="#8B5CF6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorStock)"
                name="Stock"
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </>
  );

  return (
    <>
      <Box bg="white" borderRadius="xl" borderWidth="1px" p={6} boxShadow="sm">
        <Flex justify="space-between" align="center" mb={6}>
          <Box>
            <Heading fontSize="md" fontWeight="semibold" color="gray.900">
              Data Quality Trend
            </Heading>
            <Text fontSize="xs" color="gray.500">
              {subtitleText}
            </Text>
          </Box>
          <HStack gap={3}>
            <Button
              size="xs"
              variant="ghost"
              onClick={() => setIsExpanded(true)}
              style={{ color: '#6B7280' }}
              _hover={{ backgroundColor: '#F3F4F6' }}
            >
              <Maximize2 size={16} />
            </Button>
          <Button
            size="sm"
            fontSize="xs"
            fontWeight="medium"
            px={3}
            py={1.5}
            borderRadius="md"
            onClick={() => setSelectedFilter('6M')}
            style={{
              backgroundColor: selectedFilter === '6M' ? colors.activeBg : 'transparent',
              color: selectedFilter === '6M' ? colors.activeText : colors.inactiveText,
            }}
            _hover={{
              bg: selectedFilter === '6M' ? colors.activeBg : colors.hoverBg,
            }}
          >
            6M
          </Button>
          <Button
            size="sm"
            fontSize="xs"
            fontWeight="medium"
            px={3}
            py={1.5}
            borderRadius="md"
            onClick={() => setSelectedFilter('1Y')}
            style={{
              backgroundColor: selectedFilter === '1Y' ? colors.activeBg : 'transparent',
              color: selectedFilter === '1Y' ? colors.activeText : colors.inactiveText,
            }}
            _hover={{
              bg: selectedFilter === '1Y' ? colors.activeBg : colors.hoverBg,
            }}
          >
            1Y
          </Button>
          <Button
            size="sm"
            fontSize="xs"
            fontWeight="medium"
            px={3}
            py={1.5}
            borderRadius="md"
            onClick={() => setSelectedFilter('ALL')}
            style={{
              backgroundColor: selectedFilter === 'ALL' ? colors.activeBg : 'transparent',
              color: selectedFilter === 'ALL' ? colors.activeText : colors.inactiveText,
            }}
            _hover={{
              bg: selectedFilter === 'ALL' ? colors.activeBg : colors.hoverBg,
            }}
          >
            ALL
          </Button>
          </HStack>
        </Flex>
        <HStack gap={2} mb={4} flexWrap="wrap">
          <Button
            size="xs"
            fontSize="xs"
            fontWeight="medium"
            px={2.5}
            py={1}
            borderRadius="md"
            onClick={() => toggleSeries('overall')}
            style={{
              backgroundColor: visibleSeries.overall ? seriesColors.overall.bg : '#F3F4F6',
              color: visibleSeries.overall ? seriesColors.overall.text : '#9CA3AF',
              border: visibleSeries.overall ? 'none' : '1px solid #E5E7EB',
            }}
            _hover={{
              backgroundColor: visibleSeries.overall ? seriesColors.overall.bg : '#E5E7EB',
            }}
          >
            Overall
          </Button>
          <Button
            size="xs"
            fontSize="xs"
            fontWeight="medium"
            px={2.5}
            py={1}
            borderRadius="md"
            onClick={() => toggleSeries('sales')}
            style={{
              backgroundColor: visibleSeries.sales ? seriesColors.sales.bg : '#F3F4F6',
              color: visibleSeries.sales ? seriesColors.sales.text : '#9CA3AF',
              border: visibleSeries.sales ? 'none' : '1px solid #E5E7EB',
            }}
            _hover={{
              backgroundColor: visibleSeries.sales ? seriesColors.sales.bg : '#E5E7EB',
            }}
          >
            Sales
          </Button>
          <Button
            size="xs"
            fontSize="xs"
            fontWeight="medium"
            px={2.5}
            py={1}
            borderRadius="md"
            onClick={() => toggleSeries('purchase')}
            style={{
              backgroundColor: visibleSeries.purchase ? seriesColors.purchase.bg : '#F3F4F6',
              color: visibleSeries.purchase ? seriesColors.purchase.text : '#9CA3AF',
              border: visibleSeries.purchase ? 'none' : '1px solid #E5E7EB',
            }}
            _hover={{
              backgroundColor: visibleSeries.purchase ? seriesColors.purchase.bg : '#E5E7EB',
            }}
          >
            Purchase
          </Button>
          <Button
            size="xs"
            fontSize="xs"
            fontWeight="medium"
            px={2.5}
            py={1}
            borderRadius="md"
            onClick={() => toggleSeries('stock')}
            style={{
              backgroundColor: visibleSeries.stock ? seriesColors.stock.bg : '#F3F4F6',
              color: visibleSeries.stock ? seriesColors.stock.text : '#9CA3AF',
              border: visibleSeries.stock ? 'none' : '1px solid #E5E7EB',
            }}
            _hover={{
              backgroundColor: visibleSeries.stock ? seriesColors.stock.bg : '#E5E7EB',
            }}
          >
            Stock
          </Button>
        </HStack>
        {renderChart(280)}
      </Box>

      <Dialog.Root open={isExpanded} onOpenChange={(e) => setIsExpanded(e.open)}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content maxW="7xl" style={{ backgroundColor: '#FFFFFF' }}>
            <Dialog.Header>
              <Dialog.Title style={{ color: '#111827', fontSize: '1rem', fontWeight: 600 }}>
                Data Quality Trend
              </Dialog.Title>
              <Dialog.CloseTrigger />
            </Dialog.Header>
            <Dialog.Body>
              <Box mb={4}>
                <HStack gap={3} mb={3}>
                  <Button
                    size="sm"
                    fontSize="xs"
                    fontWeight="medium"
                    px={3}
                    py={1.5}
                    borderRadius="md"
                    onClick={() => setSelectedFilter('6M')}
                    style={{
                      backgroundColor: selectedFilter === '6M' ? colors.activeBg : 'transparent',
                      color: selectedFilter === '6M' ? colors.activeText : colors.inactiveText,
                    }}
                    _hover={{
                      bg: selectedFilter === '6M' ? colors.activeBg : colors.hoverBg,
                    }}
                  >
                    6M
                  </Button>
                  <Button
                    size="sm"
                    fontSize="xs"
                    fontWeight="medium"
                    px={3}
                    py={1.5}
                    borderRadius="md"
                    onClick={() => setSelectedFilter('1Y')}
                    style={{
                      backgroundColor: selectedFilter === '1Y' ? colors.activeBg : 'transparent',
                      color: selectedFilter === '1Y' ? colors.activeText : colors.inactiveText,
                    }}
                    _hover={{
                      bg: selectedFilter === '1Y' ? colors.activeBg : colors.hoverBg,
                    }}
                  >
                    1Y
                  </Button>
                  <Button
                    size="sm"
                    fontSize="xs"
                    fontWeight="medium"
                    px={3}
                    py={1.5}
                    borderRadius="md"
                    onClick={() => setSelectedFilter('ALL')}
                    style={{
                      backgroundColor: selectedFilter === 'ALL' ? colors.activeBg : 'transparent',
                      color: selectedFilter === 'ALL' ? colors.activeText : colors.inactiveText,
                    }}
                    _hover={{
                      bg: selectedFilter === 'ALL' ? colors.activeBg : colors.hoverBg,
                    }}
                  >
                    ALL
                  </Button>
                </HStack>
                <HStack gap={2} flexWrap="wrap">
                  <Button
                    size="xs"
                    fontSize="xs"
                    fontWeight="medium"
                    px={2.5}
                    py={1}
                    borderRadius="md"
                    onClick={() => toggleSeries('overall')}
                    style={{
                      backgroundColor: visibleSeries.overall ? seriesColors.overall.bg : '#F3F4F6',
                      color: visibleSeries.overall ? seriesColors.overall.text : '#9CA3AF',
                      border: visibleSeries.overall ? 'none' : '1px solid #E5E7EB',
                    }}
                    _hover={{
                      backgroundColor: visibleSeries.overall ? seriesColors.overall.bg : '#E5E7EB',
                    }}
                  >
                    Overall
                  </Button>
                  <Button
                    size="xs"
                    fontSize="xs"
                    fontWeight="medium"
                    px={2.5}
                    py={1}
                    borderRadius="md"
                    onClick={() => toggleSeries('sales')}
                    style={{
                      backgroundColor: visibleSeries.sales ? seriesColors.sales.bg : '#F3F4F6',
                      color: visibleSeries.sales ? seriesColors.sales.text : '#9CA3AF',
                      border: visibleSeries.sales ? 'none' : '1px solid #E5E7EB',
                    }}
                    _hover={{
                      backgroundColor: visibleSeries.sales ? seriesColors.sales.bg : '#E5E7EB',
                    }}
                  >
                    Sales
                  </Button>
                  <Button
                    size="xs"
                    fontSize="xs"
                    fontWeight="medium"
                    px={2.5}
                    py={1}
                    borderRadius="md"
                    onClick={() => toggleSeries('purchase')}
                    style={{
                      backgroundColor: visibleSeries.purchase ? seriesColors.purchase.bg : '#F3F4F6',
                      color: visibleSeries.purchase ? seriesColors.purchase.text : '#9CA3AF',
                      border: visibleSeries.purchase ? 'none' : '1px solid #E5E7EB',
                    }}
                    _hover={{
                      backgroundColor: visibleSeries.purchase ? seriesColors.purchase.bg : '#E5E7EB',
                    }}
                  >
                    Purchase
                  </Button>
                  <Button
                    size="xs"
                    fontSize="xs"
                    fontWeight="medium"
                    px={2.5}
                    py={1}
                    borderRadius="md"
                    onClick={() => toggleSeries('stock')}
                    style={{
                      backgroundColor: visibleSeries.stock ? seriesColors.stock.bg : '#F3F4F6',
                      color: visibleSeries.stock ? seriesColors.stock.text : '#9CA3AF',
                      border: visibleSeries.stock ? 'none' : '1px solid #E5E7EB',
                    }}
                    _hover={{
                      backgroundColor: visibleSeries.stock ? seriesColors.stock.bg : '#E5E7EB',
                    }}
                  >
                    Stock
                  </Button>
                </HStack>
              </Box>
              {renderChart(500)}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  );
};
