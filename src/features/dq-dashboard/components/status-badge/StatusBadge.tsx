import { Badge } from '@chakra-ui/react';

export type StatusBadgeProps = {
  status: string;
};

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const styles: Record<string, { bg: string; color: string }> = {
    // System health statuses
    healthy: { bg: '#D1FAE5', color: '#047857' }, // Green - system is healthy and operational
    moderate: { bg: '#FEF3C7', color: '#B45309' }, // Amber - moderate issues, needs monitoring
    critical: { bg: '#FEE2E2', color: '#B91C1C' }, // Red - critical issues, requires immediate action

    // Alert workflow statuses
    NEW: { bg: '#DBEAFE', color: '#1E3A8A' }, // Vibrant blue - new alert, unread, requires immediate attention
    SENT: { bg: '#E9D5FF', color: '#6B21A8' }, // Rich purple - alert sent/notified, in queue for response

    // Ticket workflow statuses
    'In Progress': { bg: '#FEF3C7', color: '#D97706' }, // Amber - ticket is actively being worked on
    Resolved: { bg: '#D1FAE5', color: '#047857' }, // Green - ticket successfully resolved/completed
  };

  const style = styles[status] || { bg: '#F3F4F6', color: '#374151' };

  // Capitalize first letter if the status is all lowercase, otherwise keep as is
  const displayText =
    status === status.toLowerCase() && status !== status.toUpperCase()
      ? status.charAt(0).toUpperCase() + status.slice(1)
      : status;

  return (
    <Badge
      px={3}
      py={1.5}
      borderRadius="md"
      fontSize="xs"
      fontWeight="medium"
      textTransform="none"
      borderWidth="0"
      borderColor="transparent"
      style={{
        backgroundColor: style.bg,
        color: style.color,
        border: 'none',
        borderWidth: 0,
        borderColor: 'transparent',
        textTransform: 'none',
        boxShadow: 'none',
      }}
    >
      {displayText}
    </Badge>
  );
};
