import { useState } from 'react';
import { Table, Dialog, SimpleGrid } from '@chakra-ui/react';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { StatusBadge } from '../../status-badge';
import { SeverityBadge } from '../../severity-badge';

export type Alert = {
  id: string;
  country: string;
  company: string;
  category: string;
  severity: string;
  delta: number;
  created: string;
  status: string;
};

export type AlertsTableProps = {
  data: Alert[];
  showFullTable?: boolean;
};

export const AlertsTable = ({ data, showFullTable = false }: AlertsTableProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
  const colors = {
    headerBg: '#F9FAFB',
    headerText: '#6B7280',
    rowHover: '#F9FAFB',
    textPrimary: '#111827',
    textSecondary: '#6B7280',
    link: '#6366F1',
    linkHover: '#4F46E5',
    border: '#E5E7EB',
  };

  return (
    <Box bg="white" borderRadius="xl" borderWidth="1px" boxShadow="sm" overflow="hidden">
      <Box p={6} borderBottomWidth="1px" style={{ borderColor: colors.border }}>
        <Flex justify="space-between" align="center">
          <Box>
            <Heading
              fontSize="lg"
              fontWeight="semibold"
              mb={1}
              style={{ color: colors.textPrimary }}
            >
              {showFullTable ? 'All Alerts' : 'Recent Alerts'}
            </Heading>
            <Text fontSize="sm" style={{ color: colors.textSecondary }}>
              {showFullTable
                ? 'Complete alert log with status tracking'
                : 'Latest data quality alerts'}
            </Text>
          </Box>
          {!showFullTable && (
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
          )}
        </Flex>
      </Box>
      <Box overflowX="auto">
        <Table.Root>
          <Table.Header>
            <Table.Row style={{ backgroundColor: colors.headerBg }}>
              <Table.ColumnHeader
                fontSize="xs"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wider"
                px={6}
                py={3.5}
                style={{ color: colors.headerText }}
              >
                Alert ID
              </Table.ColumnHeader>
              <Table.ColumnHeader
                fontSize="xs"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wider"
                px={6}
                py={3.5}
                style={{ color: colors.headerText }}
              >
                Country
              </Table.ColumnHeader>
              {showFullTable && (
                <Table.ColumnHeader
                  fontSize="xs"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  px={6}
                  py={3.5}
                  style={{ color: colors.headerText }}
                >
                  Company
                </Table.ColumnHeader>
              )}
              <Table.ColumnHeader
                fontSize="xs"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wider"
                px={6}
                py={3.5}
                style={{ color: colors.headerText }}
              >
                Category
              </Table.ColumnHeader>
              <Table.ColumnHeader
                fontSize="xs"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wider"
                px={6}
                py={3.5}
                style={{ color: colors.headerText }}
              >
                Severity
              </Table.ColumnHeader>
              {showFullTable && (
                <>
                  <Table.ColumnHeader
                    fontSize="xs"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    px={6}
                    py={3.5}
                    style={{ color: colors.headerText }}
                  >
                    Delta
                  </Table.ColumnHeader>
                  <Table.ColumnHeader
                    fontSize="xs"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    px={6}
                    py={3.5}
                    style={{ color: colors.headerText }}
                  >
                    Created
                  </Table.ColumnHeader>
                </>
              )}
              <Table.ColumnHeader
                fontSize="xs"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wider"
                px={6}
                py={3.5}
                style={{ color: colors.headerText }}
              >
                Status
              </Table.ColumnHeader>
              {showFullTable && (
                <Table.ColumnHeader
                  fontSize="xs"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  px={6}
                  py={3.5}
                  style={{ color: colors.headerText }}
                >
                  Action
                </Table.ColumnHeader>
              )}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((alert, i) => (
              <Table.Row
                key={i}
                _hover={{ bg: colors.rowHover }}
                style={{ borderBottom: `1px solid ${colors.border}` }}
              >
                <Table.Cell
                  px={6}
                  py={4}
                  fontSize="sm"
                  fontWeight="semibold"
                  style={{ color: colors.link }}
                >
                  {alert.id}
                </Table.Cell>
                <Table.Cell px={6} py={4}>
                  {showFullTable ? (
                    <Text fontSize="sm" fontWeight="medium" style={{ color: colors.textPrimary }}>
                      {alert.country}
                    </Text>
                  ) : (
                    <Box>
                      <Text fontSize="sm" fontWeight="medium" style={{ color: colors.textPrimary }}>
                        {alert.country}
                      </Text>
                      <Text fontSize="xs" style={{ color: colors.textSecondary }}>
                        ({alert.company})
                      </Text>
                    </Box>
                  )}
                </Table.Cell>
                {showFullTable && (
                  <Table.Cell px={6} py={4} fontSize="sm" style={{ color: colors.textSecondary }}>
                    {alert.company}
                  </Table.Cell>
                )}
                <Table.Cell px={6} py={4} fontSize="sm" style={{ color: colors.textSecondary }}>
                  {alert.category}
                </Table.Cell>
                <Table.Cell px={6} py={4}>
                  <SeverityBadge severity={alert.severity} />
                </Table.Cell>
                {showFullTable && (
                  <>
                    <Table.Cell
                      px={6}
                      py={4}
                      fontSize="sm"
                      fontWeight="semibold"
                      style={{ color: '#DC2626' }}
                    >
                      {alert.delta} days
                    </Table.Cell>
                    <Table.Cell px={6} py={4} fontSize="sm" style={{ color: colors.textSecondary }}>
                      {alert.created}
                    </Table.Cell>
                  </>
                )}
                <Table.Cell px={6} py={4}>
                  <StatusBadge status={alert.status} />
                </Table.Cell>
                {showFullTable && (
                  <Table.Cell px={6} py={4}>
                    <Button
                      fontSize="sm"
                      variant="ghost"
                      fontWeight="medium"
                      style={{ color: colors.link }}
                      _hover={{ 
                        color: colors.linkHover,
                        backgroundColor: '#F3F4F6',
                      }}
                      onClick={() => {
                        setSelectedAlert(alert);
                        setIsModalOpen(true);
                      }}
                    >
                      View Details
                    </Button>
                  </Table.Cell>
                )}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>

      <Dialog.Root open={isModalOpen} onOpenChange={(e) => setIsModalOpen(e.open)}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content maxW="7xl" style={{ backgroundColor: '#FFFFFF' }}>
            <Dialog.Header>
              <Dialog.Title style={{ color: colors.textPrimary, fontSize: '1.25rem', fontWeight: 600 }}>
                {selectedAlert ? 'Alert Details' : 'All Alerts'}
              </Dialog.Title>
              <Dialog.CloseTrigger />
            </Dialog.Header>
            <Dialog.Body>
              {selectedAlert ? (
                <Box>
                  <SimpleGrid columns={2} gap={4}>
                    <Box>
                      <Text fontSize="xs" style={{ color: colors.textSecondary }} mb={1}>Alert ID</Text>
                      <Text fontSize="sm" fontWeight="medium" style={{ color: colors.textPrimary }}>{selectedAlert.id}</Text>
                    </Box>
                    <Box>
                      <Text fontSize="xs" style={{ color: colors.textSecondary }} mb={1}>Country</Text>
                      <Text fontSize="sm" fontWeight="medium" style={{ color: colors.textPrimary }}>{selectedAlert.country}</Text>
                    </Box>
                    <Box>
                      <Text fontSize="xs" style={{ color: colors.textSecondary }} mb={1}>Company</Text>
                      <Text fontSize="sm" fontWeight="medium" style={{ color: colors.textPrimary }}>{selectedAlert.company}</Text>
                    </Box>
                    <Box>
                      <Text fontSize="xs" style={{ color: colors.textSecondary }} mb={1}>Category</Text>
                      <Text fontSize="sm" fontWeight="medium" style={{ color: colors.textPrimary }}>{selectedAlert.category}</Text>
                    </Box>
                    <Box>
                      <Text fontSize="xs" style={{ color: colors.textSecondary }} mb={1}>Severity</Text>
                      <SeverityBadge severity={selectedAlert.severity} />
                    </Box>
                    <Box>
                      <Text fontSize="xs" style={{ color: colors.textSecondary }} mb={1}>Status</Text>
                      <StatusBadge status={selectedAlert.status} />
                    </Box>
                    <Box>
                      <Text fontSize="xs" style={{ color: colors.textSecondary }} mb={1}>Delta</Text>
                      <Text fontSize="sm" fontWeight="medium" style={{ color: '#DC2626' }}>{selectedAlert.delta} days</Text>
                    </Box>
                    <Box>
                      <Text fontSize="xs" style={{ color: colors.textSecondary }} mb={1}>Created</Text>
                      <Text fontSize="sm" fontWeight="medium" style={{ color: colors.textPrimary }}>{selectedAlert.created}</Text>
                    </Box>
                  </SimpleGrid>
                </Box>
              ) : (
                <Box overflowX="auto">
                  <Table.Root>
                    <Table.Header>
                      <Table.Row style={{ backgroundColor: colors.headerBg }}>
                        <Table.ColumnHeader fontSize="xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="wider" px={4} py={3} style={{ color: colors.headerText }}>Alert ID</Table.ColumnHeader>
                        <Table.ColumnHeader fontSize="xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="wider" px={4} py={3} style={{ color: colors.headerText }}>Country</Table.ColumnHeader>
                        <Table.ColumnHeader fontSize="xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="wider" px={4} py={3} style={{ color: colors.headerText }}>Company</Table.ColumnHeader>
                        <Table.ColumnHeader fontSize="xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="wider" px={4} py={3} style={{ color: colors.headerText }}>Category</Table.ColumnHeader>
                        <Table.ColumnHeader fontSize="xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="wider" px={4} py={3} style={{ color: colors.headerText }}>Severity</Table.ColumnHeader>
                        <Table.ColumnHeader fontSize="xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="wider" px={4} py={3} style={{ color: colors.headerText }}>Delta</Table.ColumnHeader>
                        <Table.ColumnHeader fontSize="xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="wider" px={4} py={3} style={{ color: colors.headerText }}>Created</Table.ColumnHeader>
                        <Table.ColumnHeader fontSize="xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="wider" px={4} py={3} style={{ color: colors.headerText }}>Status</Table.ColumnHeader>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {data.map((alert, i) => (
                        <Table.Row key={i} style={{ borderBottom: `1px solid ${colors.border}` }}>
                          <Table.Cell px={4} py={3} fontSize="sm" fontWeight="semibold" style={{ color: colors.link }}>{alert.id}</Table.Cell>
                          <Table.Cell px={4} py={3} fontSize="sm" fontWeight="medium" style={{ color: colors.textPrimary }}>{alert.country}</Table.Cell>
                          <Table.Cell px={4} py={3} fontSize="sm" style={{ color: colors.textSecondary }}>{alert.company}</Table.Cell>
                          <Table.Cell px={4} py={3} fontSize="sm" style={{ color: colors.textSecondary }}>{alert.category}</Table.Cell>
                          <Table.Cell px={4} py={3}><SeverityBadge severity={alert.severity} /></Table.Cell>
                          <Table.Cell px={4} py={3} fontSize="sm" fontWeight="semibold" style={{ color: '#DC2626' }}>{alert.delta} days</Table.Cell>
                          <Table.Cell px={4} py={3} fontSize="sm" style={{ color: colors.textSecondary }}>{alert.created}</Table.Cell>
                          <Table.Cell px={4} py={3}><StatusBadge status={alert.status} /></Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table.Root>
                </Box>
              )}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </Box>
  );
};
