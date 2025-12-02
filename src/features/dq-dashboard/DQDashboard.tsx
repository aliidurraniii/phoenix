import { useState } from 'react';
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  Calendar,
  Clock,
  Bell,
  FileText,
  RefreshCw,
  Activity,
  Zap,
  Target,
} from 'lucide-react';
import { Box, SimpleGrid, Grid, VStack, HStack, Button, NativeSelect } from '@chakra-ui/react';
import {
  KPICard,
  Header,
  Tabs,
  DQTrendChart,
  DomainBreakdownChart,
  MissingDataChart,
  ValidationSummary,
  AlertsTable,
  TicketsTable,
  Leaderboard,
  CountryGrid,
  FilterBar,
} from './components';
import {
  dqTrendData,
  countryData,
  alertsData,
  ticketsData,
  validationSummary,
  domainBreakdown,
} from './data';

const missingByCountry = countryData
  .filter((c) => c.missing > 0)
  .sort((a, b) => b.missing - a.missing)
  .slice(0, 8);

export default function DQDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [filters, setFilters] = useState({
    region: 'All Regions',
    status: 'All Status',
    domain: 'All Domains',
  });

  const handleFilterChange = (newFilters: { region: string; status: string; domain: string }) => {
    setFilters(newFilters);
  };

  const getFilteredCountries = () => {
    let filtered = [...countryData];

    if (filters.status !== 'All Status') {
      const statusMap: Record<string, string> = {
        Healthy: 'healthy',
        Moderate: 'moderate',
        Critical: 'critical',
      };
      filtered = filtered.filter((c) => c.status === statusMap[filters.status]);
    }

    // Note: Region and domain filtering would require additional data mapping
    // For now, we'll just filter by status

    return filtered;
  };

  return (
    <Box minH="100vh" style={{ backgroundColor: '#F8F9FA' }}>
      <Header />
      <Box px={6} py={4}>
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      </Box>

      <Box p={6}>
        {activeTab === 'overview' && (
          <VStack gap={6} align="stretch">
            {/* KPI Row */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} gap={4}>
              <KPICard
                title="Overall DQ Score"
                value="98.2%"
                subtitle="Across all countries"
                icon={Target}
                trend="up"
                trendValue="+0.4% vs last week"
                color="blue"
              />
              <KPICard
                title="Data Freshness"
                value="99.1%"
                subtitle="Within SLA"
                icon={Clock}
                trend="up"
                trendValue="+0.2% vs last week"
                color="green"
              />
              <KPICard
                title="Countries with Issues"
                value="3"
                subtitle="RO, RS, BA"
                icon={AlertTriangle}
                trend="down"
                trendValue="-2 vs last week"
                color="red"
              />
              <KPICard
                title="Total Missing Days"
                value="21"
                subtitle="Across all regions"
                icon={Calendar}
                trend="down"
                trendValue="-5 vs last week"
                color="yellow"
              />
              <KPICard
                title="Open Tickets"
                value="5"
                subtitle="2 Critical, 2 High"
                icon={FileText}
                trend="stable"
                trendValue="Same as last week"
                color="purple"
              />
            </SimpleGrid>

            {/* Charts Row 1 */}
            <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={6}>
              <DQTrendChart data={dqTrendData} />
              <DomainBreakdownChart data={domainBreakdown} />
            </Grid>

            {/* Charts Row 2 */}
            <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={6}>
              <MissingDataChart data={missingByCountry} />
              <ValidationSummary data={validationSummary} />
            </Grid>

            {/* Bottom Section */}
            <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={6}>
              <AlertsTable data={alertsData} />
              <Leaderboard data={countryData} />
            </Grid>
          </VStack>
        )}

        {activeTab === 'countries' && (
          <VStack gap={6} align="stretch">
            <FilterBar onFilterChange={handleFilterChange} />
            <CountryGrid data={getFilteredCountries()} />
          </VStack>
        )}

        {activeTab === 'alerts' && (
          <VStack gap={6} align="stretch">
            {/* Alert Stats */}
            <SimpleGrid columns={{ base: 1, md: 4 }} gap={4}>
              <KPICard title="Total Alerts" value="5" subtitle="Today" icon={Bell} color="blue" />
              <KPICard
                title="Critical"
                value="3"
                subtitle="Requires immediate action"
                icon={XCircle}
                color="red"
              />
              <KPICard
                title="Pending"
                value="3"
                subtitle="Awaiting ticket creation"
                icon={Clock}
                color="yellow"
              />
              <KPICard
                title="Resolved Today"
                value="2"
                subtitle="Successfully closed"
                icon={CheckCircle}
                color="green"
              />
            </SimpleGrid>

            {/* Alerts Table */}
            <Box bg="white" borderRadius="xl" borderWidth="1px" boxShadow="sm" overflow="hidden">
              <Box p={6} borderBottomWidth="1px" borderColor="gray.100">
                <HStack justify="space-between" align="center">
                  <Box>
                    <Box fontSize="lg" fontWeight="semibold" color="gray.900" as="h3">
                      All Alerts
                    </Box>
                    <Box fontSize="sm" color="gray.500" as="p">
                      Complete alert log with status tracking
                    </Box>
                  </Box>
                  <HStack gap={3}>
                    <NativeSelect.Root
                      fontSize="sm"
                      borderWidth="1px"
                      borderColor="gray.200"
                      borderRadius="lg"
                      bg="white"
                      w={40}
                    >
                      <NativeSelect.Field>
                        <option>All Severities</option>
                        <option>Critical</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </NativeSelect.Field>
                    </NativeSelect.Root>
                    <HStack>
                      <Box as="span" color="gray.600" display="inline-flex" alignItems="center">
                        <RefreshCw size={16} stroke="currentColor" />
                      </Box>
                      <Button fontSize="sm" bg="blue.600" color="white" _hover={{ bg: 'blue.700' }}>
                        Refresh
                      </Button>
                    </HStack>
                  </HStack>
                </HStack>
              </Box>
            </Box>
            <AlertsTable data={alertsData} showFullTable />
          </VStack>
        )}

        {activeTab === 'tickets' && (
          <VStack gap={6} align="stretch">
            {/* Ticket Stats */}
            <SimpleGrid columns={{ base: 1, md: 4 }} gap={4}>
              <KPICard
                title="Open Tickets"
                value="4"
                subtitle="Across all countries"
                icon={FileText}
                color="blue"
              />
              <KPICard
                title="In Progress"
                value="2"
                subtitle="Being worked on"
                icon={Activity}
                color="yellow"
              />
              <KPICard
                title="Resolved (7d)"
                value="8"
                subtitle="Last 7 days"
                icon={CheckCircle}
                color="green"
              />
              <KPICard
                title="Avg Resolution"
                value="18h"
                subtitle="Mean time to resolve"
                icon={Zap}
                color="purple"
              />
            </SimpleGrid>

            <TicketsTable data={ticketsData} />
          </VStack>
        )}
      </Box>
    </Box>
  );
}
