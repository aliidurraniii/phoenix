import { TrendingUp, TrendingDown } from 'lucide-react';
import { Box, Flex, Text, HStack } from '@chakra-ui/react';
import type { LucideIcon } from 'lucide-react';

export type KPICardProps = {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: string;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
  size?: 'normal' | 'large';
};

export const KPICard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendValue,
  color = 'blue',
  size = 'normal',
}: KPICardProps) => {
  const colorSchemes = {
    blue: {
      bg: '#F5F3FF',
      color: '#6366F1',
      border: '#DDD6FE',
      iconBg: '#6366F1',
      iconColor: '#FFFFFF',
    },
    green: {
      bg: '#ECFDF5',
      color: '#10B981',
      border: '#A7F3D0',
      iconBg: '#10B981',
      iconColor: '#FFFFFF',
    },
    red: {
      bg: '#FEF2F2',
      color: '#DC2626',
      border: '#FECACA',
      iconBg: '#DC2626',
      iconColor: '#FFFFFF',
    },
    yellow: {
      bg: '#FFFBEB',
      color: '#F59E0B',
      border: '#FDE68A',
      iconBg: '#F59E0B',
      iconColor: '#FFFFFF',
    },
    purple: {
      bg: '#F5F3FF',
      color: '#9333EA',
      border: '#DDD6FE',
      iconBg: '#9333EA',
      iconColor: '#FFFFFF',
    },
  };

  const scheme = colorSchemes[color];
  const trendColor = trend === 'up' ? '#10B981' : trend === 'down' ? '#DC2626' : '#6B7280';
  const trendBg = trend === 'up' ? '#ECFDF5' : trend === 'down' ? '#FEF2F2' : '#F9FAFB';

  return (
    <Box
      bg="white"
      borderRadius="xl"
      borderWidth="1px"
      borderColor="gray.200"
      p={size === 'large' ? 6 : 4}
      boxShadow="sm"
      _hover={{ boxShadow: 'md' }}
      transition="all 0.2s"
    >
      <Flex justify="space-between" align="flex-start">
        <Box flex="1">
          <Text
            fontSize="xs"
            fontWeight="medium"
            color="gray.500"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            {title}
          </Text>
          <Text
            fontSize={size === 'large' ? 'xl' : 'lg'}
            fontWeight="semibold"
            color="gray.900"
            mt={1}
          >
            {value}
          </Text>
          {subtitle && (
            <Text fontSize="sm" color="gray.500" mt={1}>
              {subtitle}
            </Text>
          )}
          {trend && (
            <HStack mt={2} gap={1.5}>
              {trend === 'up' && (
                <HStack
                  gap={1.5}
                  px={2.5}
                  py={1}
                  borderRadius="md"
                  display="inline-flex"
                  alignItems="center"
                  style={{
                    backgroundColor: trendBg,
                    border: 'none',
                    borderWidth: 0,
                    boxShadow: 'none',
                  }}
                >
                  <TrendingUp
                    size={14}
                    stroke={trendColor}
                    strokeWidth={2.5}
                    fill="none"
                    style={{ color: trendColor }}
                  />
                  <Text fontSize="xs" fontWeight="medium" style={{ color: trendColor }}>
                    {trendValue}
                  </Text>
                </HStack>
              )}
              {trend === 'down' && (
                <HStack
                  gap={1.5}
                  px={2.5}
                  py={1}
                  borderRadius="md"
                  display="inline-flex"
                  alignItems="center"
                  style={{
                    backgroundColor: trendBg,
                    border: 'none',
                    borderWidth: 0,
                    boxShadow: 'none',
                  }}
                >
                  <TrendingDown
                    size={14}
                    stroke={trendColor}
                    strokeWidth={2.5}
                    fill="none"
                    style={{ color: trendColor }}
                  />
                  <Text fontSize="xs" fontWeight="medium" style={{ color: trendColor }}>
                    {trendValue}
                  </Text>
                </HStack>
              )}
              {trend === 'stable' && (
                <HStack
                  gap={1.5}
                  px={2.5}
                  py={1}
                  borderRadius="md"
                  display="inline-flex"
                  alignItems="center"
                  style={{
                    backgroundColor: trendBg,
                    color: trendColor,
                    border: 'none',
                    borderWidth: 0,
                    boxShadow: 'none',
                  }}
                >
                  <Text fontSize="xs" fontWeight="medium" style={{ color: trendColor }}>
                    {trendValue}
                  </Text>
                </HStack>
              )}
            </HStack>
          )}
        </Box>
        <Box
          bg={scheme.iconBg}
          p={3}
          borderRadius="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
          minW={12}
          minH={12}
          w={12}
          h={12}
        >
          <Icon
            size={24}
            stroke={scheme.iconColor}
            strokeWidth={2.5}
            fill="none"
            style={{ color: scheme.iconColor }}
          />
        </Box>
      </Flex>
    </Box>
  );
};
