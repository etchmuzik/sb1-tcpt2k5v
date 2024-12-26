```typescript
import { TrendingUp, Clock, Server } from 'lucide-react';

export const metrics = [
  {
    icon: TrendingUp,
    label: 'Success Rate',
    value: '99.99%',
    trend: '+0.01%',
    trendType: 'positive' as const
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: '45ms',
    trend: '-5ms',
    trendType: 'positive' as const
  },
  {
    icon: Server,
    label: 'Uptime',
    value: '99.99%',
    trend: '30 days',
    trendType: 'neutral' as const
  }
];
```