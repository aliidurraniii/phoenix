import { useState } from 'react';
import { HStack, Button } from '@chakra-ui/react';

export type TabsProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export const Tabs = ({ activeTab, onTabChange }: TabsProps) => {
  const tabs = ['overview', 'countries', 'alerts', 'tickets'];
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const colors = {
    activeBg: '#F5F3FF',
    activeText: '#6366F1',
    inactiveText: '#6B7280',
    hoverBg: '#F3F4F6',
    hoverText: '#1F2937',
  };

  return (
    <HStack gap={2} mt={4}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        const isHovered = hoveredTab === tab;
        
        const getBackgroundColor = () => {
          if (isActive) return colors.activeBg;
          if (isHovered) return colors.hoverBg;
          return 'transparent';
        };

        const getTextColor = () => {
          if (isActive) return colors.activeText;
          if (isHovered) return colors.hoverText;
          return colors.inactiveText;
        };

        return (
          <Button
            key={tab}
            onClick={() => onTabChange(tab)}
            onMouseEnter={() => setHoveredTab(tab)}
            onMouseLeave={() => setHoveredTab(null)}
            px={5}
            py={2.5}
            fontSize="sm"
            fontWeight="medium"
            borderRadius="full"
            borderWidth="0"
            style={{
              backgroundColor: getBackgroundColor(),
              color: getTextColor(),
              transition: 'all 0.2s ease',
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Button>
        );
      })}
    </HStack>
  );
};
