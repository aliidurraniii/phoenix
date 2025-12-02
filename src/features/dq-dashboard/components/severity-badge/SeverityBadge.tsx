import { Badge } from '@chakra-ui/react';

export type SeverityBadgeProps = {
  severity: string;
};

export const SeverityBadge = ({ severity }: SeverityBadgeProps) => {
  const styles: Record<string, { bg: string; color: string; border: string }> = {
    Critical: { bg: '#FEE2E2', color: '#B91C1C', border: '#EF4444' },
    High: { bg: '#FFEDD5', color: '#C2410C', border: '#F97316' },
    Medium: { bg: '#FEF3C7', color: '#B45309', border: '#F59E0B' },
    Low: { bg: '#DBEAFE', color: '#1E40AF', border: '#3B82F6' },
  };

  const style = styles[severity] || { bg: '#F3F4F6', color: '#374151', border: '#D1D5DB' };

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
      {severity}
    </Badge>
  );
};
