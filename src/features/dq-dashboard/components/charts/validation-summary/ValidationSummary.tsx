import { Box, Flex, Text, Heading, VStack, HStack, Badge } from '@chakra-ui/react';

export type ValidationSummaryProps = {
  data: Array<{
    type: string;
    passed: number;
    failed: number;
    total: number;
  }>;
};

export const ValidationSummary = ({ data }: ValidationSummaryProps) => {
  const colors = {
    background: '#F3F4F6',
    progress: '#10B981',
    text: '#111827',
    subtitle: '#6B7280',
    label: '#374151',
    passed: '#10B981',
    divider: '#9CA3AF',
    total: '#6B7280',
    failedBg: '#FEF2F2',
    failedText: '#DC2626',
    badgeBg: '#F3F4F6',
    badgeText: '#4B5563',
  };

  return (
    <Box bg="white" borderRadius="xl" borderWidth="1px" p={6} boxShadow="sm">
      <Flex justify="space-between" align="center" mb={6}>
        <Box>
          <Heading fontSize="lg" fontWeight="semibold" mb={1} style={{ color: colors.text }}>
            Validation Summary
          </Heading>
          <Text fontSize="sm" style={{ color: colors.subtitle }}>
            Today's validation run results
          </Text>
        </Box>
        <Badge
          fontSize="xs"
          fontWeight="medium"
          px={3}
          py={1.5}
          borderRadius="md"
          borderWidth="0"
          borderColor="transparent"
          style={{
            backgroundColor: colors.badgeBg,
            color: colors.badgeText,
            border: 'none',
            borderWidth: 0,
            borderColor: 'transparent',
            boxShadow: 'none',
          }}
        >
          Run #1247
        </Badge>
      </Flex>
      <VStack gap={5} align="stretch">
        {data.map((item, i) => {
          const percentage = (item.passed / item.total) * 100;
          const hasFailures = item.failed > 0;
          return (
            <Flex key={i} align="center" gap={4}>
              <Text
                w={32}
                fontSize="sm"
                fontWeight="medium"
                color={colors.label}
                flexShrink={0}
                style={{ color: colors.label }}
              >
                {item.type}
              </Text>
              <Box flex={1} minW={0}>
                <Box
                  h={2.5}
                  borderRadius="full"
                  overflow="hidden"
                  position="relative"
                  style={{ backgroundColor: colors.background }}
                >
                  <Box
                    h="100%"
                    borderRadius="full"
                    w={`${percentage}%`}
                    transition="all 0.3s ease"
                    style={{ backgroundColor: colors.progress }}
                  />
                </Box>
              </Box>
              <HStack gap={2} flexShrink={0} align="center">
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  minW="fit-content"
                  style={{ color: colors.passed }}
                >
                  {item.passed}
                </Text>
                <Text fontSize="sm" style={{ color: colors.divider }}>
                  /
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  color={colors.total}
                  minW="fit-content"
                  style={{ color: colors.total }}
                >
                  {item.total}
                </Text>
                {hasFailures && (
                  <Badge
                    fontSize="xs"
                    fontWeight="medium"
                    px={3}
                    py={1.5}
                    borderRadius="md"
                    borderWidth="0"
                    borderColor="transparent"
                    style={{
                      backgroundColor: colors.failedBg,
                      color: colors.failedText,
                      border: 'none',
                      borderWidth: 0,
                      borderColor: 'transparent',
                      boxShadow: 'none',
                    }}
                  >
                    {item.failed} Failed
                  </Badge>
                )}
              </HStack>
            </Flex>
          );
        })}
      </VStack>
    </Box>
  );
};
