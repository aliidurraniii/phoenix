import { Award } from 'lucide-react';
import { Box, Flex, Heading, Text, VStack, HStack } from '@chakra-ui/react';

export type Country = {
  country: string;
  code: string;
  score: number;
  missing: number;
  status: string;
  trend: 'up' | 'down' | 'stable';
};

export type LeaderboardProps = {
  data: Country[];
};

export const Leaderboard = ({ data }: LeaderboardProps) => {
  const colors = {
    textPrimary: '#111827',
    textSecondary: '#6B7280',
    background: '#F9FAFB',
    progressBg: '#E5E7EB',
    hoverBg: '#F3F4F6',
    border: '#E5E7EB',
    // Rank colors - better and more distinct
    rank1: { bg: '#FEF3C7', color: '#B45309' }, // Gold - 1st place
    rank2: { bg: '#E5E7EB', color: '#374151' }, // Silver - 2nd place
    rank3: { bg: '#FED7AA', color: '#C2410C' }, // Bronze - 3rd place
    rankOther: { bg: '#F3F4F6', color: '#6B7280' }, // Gray for others
  };

  const getProgressColor = (score: number) => {
    // Different shades of green based on percentage
    if (score >= 99) return '#059669'; // Dark green for 99%+
    if (score >= 98) return '#10B981'; // Green for 98-98.9%
    if (score >= 97) return '#34D399'; // Light green for 97-97.9%
    if (score >= 96) return '#6EE7B7'; // Lighter green for 96-96.9%
    if (score >= 95) return '#A7F3D0'; // Very light green for 95-95.9%
    if (score >= 94) return '#D1FAE5'; // Lightest green for 94-94.9%
    return '#FEE2E2'; // Light red for <94%
  };

  return (
    <Box bg="white" borderRadius="xl" borderWidth="1px" p={6} boxShadow="sm">
      <Flex justify="space-between" align="center" mb={6}>
        <Box>
          <Heading fontSize="lg" fontWeight="semibold" mb={1} style={{ color: colors.textPrimary }}>
            Leaderboard
          </Heading>
          <Text fontSize="sm" style={{ color: colors.textSecondary }}>
            Top performing countries
          </Text>
        </Box>
        <Box
          as="span"
          style={{ color: '#D97706' }}
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
        >
          <Award size={20} stroke="currentColor" strokeWidth={2.5} />
        </Box>
      </Flex>
      <VStack gap={3} align="stretch">
        {data.slice(0, 5).map((country, i) => {
          const rankStyle =
            i === 0
              ? colors.rank1
              : i === 1
                ? colors.rank2
                : i === 2
                  ? colors.rank3
                  : colors.rankOther;
          const progressColor = getProgressColor(country.score);

          return (
            <Box
              key={i}
              p={4}
              borderRadius="lg"
              borderWidth="1px"
              style={{
                backgroundColor: colors.background,
                borderColor: colors.border,
              }}
              _hover={{
                bg: colors.hoverBg,
                borderColor: '#D1D5DB',
              }}
              transition="all 0.2s"
            >
              <HStack gap={3}>
                <Box
                  w={10}
                  h={10}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="sm"
                  fontWeight="medium"
                  style={{
                    backgroundColor: rankStyle.bg,
                    color: rankStyle.color,
                  }}
                >
                  {i + 1}
                </Box>
                <Box flex={1} minW={0}>
                  <Flex justify="space-between" align="center" mb={2.5}>
                    <Text fontSize="sm" fontWeight="medium" style={{ color: colors.textPrimary }}>
                      {country.code}
                    </Text>
                    <Text fontSize="sm" fontWeight="medium" style={{ color: colors.textPrimary }}>
                      {country.score}%
                    </Text>
                  </Flex>
                  <Box
                    h={3}
                    borderRadius="full"
                    overflow="hidden"
                    position="relative"
                    style={{ backgroundColor: colors.progressBg }}
                  >
                    <Box
                      h="100%"
                      borderRadius="full"
                      w={`${country.score}%`}
                      transition="all 0.3s ease"
                      style={{ backgroundColor: progressColor }}
                    />
                  </Box>
                </Box>
              </HStack>
            </Box>
          );
        })}
      </VStack>
    </Box>
  );
};
