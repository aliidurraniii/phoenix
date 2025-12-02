import { useState } from 'react';
import { TrendingUp, TrendingDown, ArrowUpDown } from 'lucide-react';
import { Box, SimpleGrid, Flex, Text, HStack, VStack, Button } from '@chakra-ui/react';
import { StatusBadge } from '../status-badge';
import type { Country } from '../leaderboard';

export type CountryGridProps = {
  data: Country[];
};

type SortField = 'country' | 'score' | 'missing' | 'status';
type SortDirection = 'asc' | 'desc';

export const CountryGrid = ({ data }: CountryGridProps) => {
  const [sortField, setSortField] = useState<SortField>('score');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const colors = {
    textPrimary: '#111827',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    cardBg: '#FFFFFF',
    cardHover: '#F9FAFB',
    trend: {
      up: '#10B981',
      down: '#DC2626',
      stable: '#6B7280',
    },
    missing: {
      zero: '#10B981',
      low: '#F59E0B',
      high: '#DC2626',
    },
    progressBg: '#E5E7EB',
    statusBorder: {
      healthy: '#10B981',
      moderate: '#F59E0B',
      critical: '#DC2626',
    },
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    let aValue: any;
    let bValue: any;

    switch (sortField) {
      case 'country':
        aValue = a.country;
        bValue = b.country;
        break;
      case 'score':
        aValue = a.score;
        bValue = b.score;
        break;
      case 'missing':
        aValue = a.missing;
        bValue = b.missing;
        break;
      case 'status':
        aValue = a.status;
        bValue = b.status;
        break;
      default:
        return 0;
    }

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const getProgressColor = (score: number) => {
    if (score >= 90) return '#10B981';
    if (score >= 80) return '#F59E0B';
    if (score >= 70) return '#F97316';
    return '#EF4444';
  };

  const getMissingColor = (missing: number) => {
    if (missing === 0) return colors.missing.zero;
    if (missing <= 5) return colors.missing.low;
    return colors.missing.high;
  };

  const getStatusBorderColor = (status: string) => {
    if (status === 'critical') return colors.statusBorder.critical;
    if (status === 'moderate') return colors.statusBorder.moderate;
    return colors.statusBorder.healthy;
  };

  return (
    <VStack gap={4} align="stretch">
      {/* Sort Controls */}
      <Flex justify="flex-end" gap={2} flexWrap="wrap">
        <Text fontSize="xs" style={{ color: colors.textSecondary }} alignSelf="center">
          Sort by:
        </Text>
        {(['country', 'score', 'missing', 'status'] as SortField[]).map((field) => (
          <Button
            key={field}
            variant="ghost"
            fontSize="10px"
            fontWeight="medium"
            px={2}
            py={1}
            h="auto"
            minH="auto"
            borderRadius="md"
            onClick={() => handleSort(field)}
            style={{
              backgroundColor: sortField === field ? '#F5F3FF' : 'transparent',
              color: sortField === field ? '#6366F1' : colors.textSecondary,
            }}
            _hover={{
              backgroundColor: sortField === field ? '#F5F3FF' : '#F3F4F6',
            }}
          >
            <HStack gap={1}>
              <Text
                fontSize="10px"
                style={{ color: sortField === field ? '#6366F1' : colors.textSecondary }}
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </Text>
              <ArrowUpDown
                size={10}
                style={{
                  color: sortField === field ? '#6366F1' : colors.textSecondary,
                  opacity: sortField === field ? 1 : 0.5,
                }}
              />
            </HStack>
          </Button>
        ))}
      </Flex>

      {/* Cards Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} gap={4}>
        {sortedData.map((country, i) => (
          <Box
            key={i}
            bg={colors.cardBg}
            borderRadius="lg"
            borderWidth="1px"
            borderLeftWidth="3px"
            p={4}
            boxShadow="sm"
            _hover={{ boxShadow: 'md', bg: colors.cardHover }}
            transition="all 0.2s"
            cursor="pointer"
            style={{
              borderColor: colors.border,
              borderLeftColor: getStatusBorderColor(country.status),
            }}
          >
            <VStack align="stretch" gap={3}>
              {/* Header: Country Name and Status */}
              <Flex justify="space-between" align="flex-start">
                <Box>
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    style={{ color: colors.textPrimary }}
                    mb={0.5}
                  >
                    {country.country}
                  </Text>
                  <Text fontSize="xs" style={{ color: colors.textSecondary }}>
                    {country.code}
                  </Text>
                </Box>
                <StatusBadge status={country.status} />
              </Flex>

              {/* Score with Circular Progress */}
              <Flex justify="space-between" align="center">
                <Text fontSize="xs" style={{ color: colors.textSecondary }}>
                  DQ Score
                </Text>
                <Box position="relative" w={14} h={14}>
                  <svg width="56" height="56" style={{ transform: 'rotate(-90deg)' }}>
                    {/* Background circle */}
                    <circle
                      cx="28"
                      cy="28"
                      r="22"
                      fill="none"
                      stroke={colors.progressBg}
                      strokeWidth="2.5"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="28"
                      cy="28"
                      r="22"
                      fill="none"
                      stroke={getProgressColor(country.score)}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 22}`}
                      strokeDashoffset={`${2 * Math.PI * 22 * (1 - country.score / 100)}`}
                      style={{ transition: 'stroke-dashoffset 0.3s ease' }}
                    />
                  </svg>
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center"
                    w="100%"
                  >
                    <Text
                      fontSize="10px"
                      fontWeight="semibold"
                      lineHeight="1"
                      style={{ color: getProgressColor(country.score) }}
                    >
                      {country.score}%
                    </Text>
                  </Box>
                </Box>
              </Flex>

              {/* Trend and Missing Days */}
              <Flex
                justify="space-between"
                align="center"
                pt={2}
                borderTopWidth="1px"
                style={{ borderColor: colors.border }}
              >
                <HStack gap={1}>
                  {country.trend === 'up' && (
                    <Box
                      as="span"
                      style={{ color: colors.trend.up }}
                      display="inline-flex"
                      alignItems="center"
                    >
                      <TrendingUp size={10} stroke="currentColor" />
                    </Box>
                  )}
                  {country.trend === 'down' && (
                    <Box
                      as="span"
                      style={{ color: colors.trend.down }}
                      display="inline-flex"
                      alignItems="center"
                    >
                      <TrendingDown size={10} stroke="currentColor" />
                    </Box>
                  )}
                  <Text
                    fontSize="10px"
                    fontWeight="medium"
                    style={{ color: colors.trend[country.trend] }}
                  >
                    {country.trend === 'up'
                      ? 'Improving'
                      : country.trend === 'down'
                        ? 'Declining'
                        : 'Stable'}
                  </Text>
                </HStack>
                <Box textAlign="right">
                  <Text fontSize="10px" style={{ color: colors.textSecondary }}>
                    Missing
                  </Text>
                  <Text
                    fontSize="10px"
                    fontWeight="medium"
                    style={{ color: getMissingColor(country.missing) }}
                  >
                    {country.missing} days
                  </Text>
                </Box>
              </Flex>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};
