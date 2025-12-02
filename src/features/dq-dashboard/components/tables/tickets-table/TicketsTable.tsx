import { Table } from '@chakra-ui/react';
import { Box, Flex, Heading, Text, Button, HStack } from '@chakra-ui/react';
import { Download } from 'lucide-react';
import { StatusBadge } from '../../status-badge';
import { SeverityBadge } from '../../severity-badge';

export type Ticket = {
  ticket: string;
  country: string;
  category: string;
  severity: string;
  created: string;
  status: string;
  sla: string;
};

export type TicketsTableProps = {
  data: Ticket[];
};

export const TicketsTable = ({ data }: TicketsTableProps) => {
  const colors = {
    textPrimary: '#111827',
    textSecondary: '#6B7280',
    link: '#6366F1',
    linkHover: '#4F46E5',
    border: '#E5E7EB',
  };

  return (
    <Box bg="white" borderRadius="xl" borderWidth="1px" boxShadow="sm" overflow="hidden">
      <Box p={6} borderBottomWidth="1px" borderColor="gray.100">
        <Flex justify="space-between" align="center">
          <Box>
            <Heading fontSize="lg" fontWeight="semibold" color="gray.900">
              ServiceNow Tickets
            </Heading>
            <Text fontSize="sm" color="gray.500">
              Integrated ticket tracking
            </Text>
          </Box>
          <HStack>
            <Box as="span" color="gray.600" display="inline-flex" alignItems="center">
              <Download size={16} stroke="currentColor" />
            </Box>
            <Button
              fontSize="sm"
              variant="outline"
              borderWidth="1px"
              borderColor="gray.200"
              _hover={{ bg: 'gray.50' }}
            >
              Export Report
            </Button>
          </HStack>
        </Flex>
      </Box>
      <Box overflowX="auto">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader
                fontSize="xs"
                fontWeight="medium"
                color="gray.500"
                textTransform="uppercase"
                px={6}
                py={3}
              >
                Ticket #
              </Table.ColumnHeader>
              <Table.ColumnHeader
                fontSize="xs"
                fontWeight="medium"
                color="gray.500"
                textTransform="uppercase"
                px={6}
                py={3}
              >
                Country
              </Table.ColumnHeader>
              <Table.ColumnHeader
                fontSize="xs"
                fontWeight="medium"
                color="gray.500"
                textTransform="uppercase"
                px={6}
                py={3}
              >
                Category
              </Table.ColumnHeader>
              <Table.ColumnHeader
                fontSize="xs"
                fontWeight="medium"
                color="gray.500"
                textTransform="uppercase"
                px={6}
                py={3}
              >
                Severity
              </Table.ColumnHeader>
              <Table.ColumnHeader
                fontSize="xs"
                fontWeight="medium"
                color="gray.500"
                textTransform="uppercase"
                px={6}
                py={3}
              >
                Created
              </Table.ColumnHeader>
              <Table.ColumnHeader
                fontSize="xs"
                fontWeight="medium"
                color="gray.500"
                textTransform="uppercase"
                px={6}
                py={3}
              >
                Status
              </Table.ColumnHeader>
              <Table.ColumnHeader
                fontSize="xs"
                fontWeight="medium"
                color="gray.500"
                textTransform="uppercase"
                px={6}
                py={3}
              >
                SLA
              </Table.ColumnHeader>
              <Table.ColumnHeader
                fontSize="xs"
                fontWeight="medium"
                color="gray.500"
                textTransform="uppercase"
                px={6}
                py={3}
              >
                Action
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((ticket, i) => (
              <Table.Row key={i} _hover={{ bg: 'gray.50' }}>
                <Table.Cell px={6} py={4} fontSize="sm" fontWeight="medium" style={{ color: colors.link }}>
                  {ticket.ticket}
                </Table.Cell>
                <Table.Cell px={6} py={4} fontSize="sm" fontWeight="medium" color="gray.900">
                  {ticket.country}
                </Table.Cell>
                <Table.Cell px={6} py={4} fontSize="sm" color="gray.600">
                  {ticket.category}
                </Table.Cell>
                <Table.Cell px={6} py={4}>
                  <SeverityBadge severity={ticket.severity} />
                </Table.Cell>
                <Table.Cell px={6} py={4} fontSize="sm" color="gray.500">
                  {ticket.created}
                </Table.Cell>
                <Table.Cell px={6} py={4}>
                  <StatusBadge status={ticket.status} />
                </Table.Cell>
                <Table.Cell px={6} py={4}>
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color={ticket.sla === 'Met' ? 'emerald.600' : 'amber.600'}
                  >
                    {ticket.sla}
                  </Text>
                </Table.Cell>
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
                  >
                    Open in SNOW
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Box>
  );
};
