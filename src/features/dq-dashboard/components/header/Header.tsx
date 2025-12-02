import { Database, Bell, RefreshCw, Settings, Search } from 'lucide-react';
import { Box, Flex, Text, Heading, HStack, IconButton, Input, Container } from '@chakra-ui/react';

export const Header = () => {
  const colors = {
    bg: '#FAFBFC',
    border: '#E5E7EB',
    textPrimary: '#1F2937',
    textSecondary: '#6B7280',
    iconBg: '#6366F1',
    iconColor: '#FFFFFF',
    searchBg: '#FFFFFF',
    searchBorder: '#E5E7EB',
    searchPlaceholder: '#9CA3AF',
    notificationDot: '#EF4444',
    hoverBg: '#F3F4F6',
  };

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={50}
      style={{
        backgroundColor: colors.bg,
        borderBottom: `1px solid ${colors.border}`,
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      }}
    >
      <Container maxW="full" px={6} py={3.5}>
        <Flex justify="space-between" align="center">
          <HStack gap={4}>
            <HStack gap={3}>
              <Box
                w={12}
                h={12}
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                style={{
                  background: `linear-gradient(135deg, ${colors.iconBg} 0%, #4F46E5 100%)`,
                }}
              >
                <Box
                  as="span"
                  style={{ color: colors.iconColor }}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Database size={24} stroke="currentColor" strokeWidth={2.5} />
                </Box>
              </Box>
              <Box>
                <Heading
                  fontSize="xl"
                  fontWeight="semibold"
                  mb={0.5}
                  style={{ color: colors.textPrimary }}
                  letterSpacing="-0.02em"
                >
                  Avalon
                </Heading>
                <Text fontSize="xs" style={{ color: colors.textSecondary }}>
                  Data Quality Platform
                </Text>
              </Box>
            </HStack>
          </HStack>

          <HStack gap={3}>
            <HStack
              style={{
                backgroundColor: colors.searchBg,
                border: `1px solid ${colors.searchBorder}`,
                borderRadius: '6px',
              }}
              px={2.5}
              gap={2}
            >
              <Box
                as="span"
                style={{ color: colors.textSecondary }}
                display="inline-flex"
                alignItems="center"
              >
                <Search size={15} stroke="currentColor" strokeWidth={2} />
              </Box>
              <Input
                type="text"
                placeholder="Search..."
                bg="transparent"
                border="none"
                outline="none"
                fontSize="sm"
                w={36}
                style={{ color: colors.textPrimary }}
                _placeholder={{ color: colors.searchPlaceholder }}
                _focus={{ boxShadow: 'none', outline: 'none' }}
              />
            </HStack>

            <Box position="relative">
              <IconButton
                aria-label="Notifications"
                variant="ghost"
                style={{ color: colors.textSecondary }}
                _hover={{
                  color: colors.textPrimary,
                  backgroundColor: colors.hoverBg,
                }}
              >
                <Bell size={20} stroke="currentColor" strokeWidth={2} />
              </IconButton>
              <Box
                position="absolute"
                top={1}
                right={1}
                w={2.5}
                h={2.5}
                borderRadius="full"
                style={{ backgroundColor: colors.notificationDot }}
              />
            </Box>

            <HStack gap={2} fontSize="sm" style={{ color: colors.textSecondary }}>
              <Box
                as="span"
                display="inline-flex"
                alignItems="center"
                style={{ color: colors.textSecondary }}
              >
                <RefreshCw size={16} stroke="currentColor" strokeWidth={2} />
              </Box>
              <Text style={{ color: colors.textSecondary }}>Last updated: 08:15 AM</Text>
            </HStack>

            <IconButton
              aria-label="Settings"
              variant="ghost"
              style={{ color: colors.textSecondary }}
              _hover={{
                color: colors.textPrimary,
                backgroundColor: colors.hoverBg,
              }}
            >
              <Settings size={20} stroke="currentColor" strokeWidth={2} />
            </IconButton>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
