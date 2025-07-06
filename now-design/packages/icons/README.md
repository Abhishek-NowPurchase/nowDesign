# @now-design/icons

A comprehensive React icon library with 3,000+ icons organized by categories. Built with SVGR for optimal performance and TypeScript support.

## 📦 Installation

```bash
npm install @now-design/icons
# or
yarn add @now-design/icons
```

## 🚀 Quick Start

### Import by Category (Recommended)

```jsx
import { ArrowDown, ArrowUp } from '@now-design/icons/Arrows';
import { Building, Bank } from '@now-design/icons/Buildings';
import { User, UserSettings } from '@now-design/icons/User';
import { Add, Close } from '@now-design/icons/System';
```

### Import All Icons

```jsx
import { ArrowDown, User, Add } from '@now-design/icons';
```

## 🎨 Usage

All icons are React components with consistent props:

```jsx
import { ArrowDown } from '@now-design/icons/Arrows';

function MyComponent() {
  return (
    <div>
      {/* Default size (24px) */}
      <ArrowDown />
      
      {/* Custom size */}
      <ArrowDown size={32} />
      
      {/* Custom color */}
      <ArrowDown color="#ff0000" />
      
      {/* With additional props */}
      <ArrowDown 
        size={48} 
        color="currentColor" 
        onClick={() => console.log('clicked')}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}
```

## 📋 Available Categories

### 🏹 Arrows (360 icons)
Navigation and direction icons
```jsx
import { 
  ArrowDown, ArrowUp, ArrowLeft, ArrowRight,
  ArrowDownFill, ArrowUpFill, ArrowLeftFill, ArrowRightFill,
  ArrowDownCircle, ArrowUpCircle, ArrowLeftCircle, ArrowRightCircle
} from '@now-design/icons/Arrows';
```

### 🏢 Buildings (62 icons)
Building and architecture icons
```jsx
import { 
  Building, Bank, Home, Office,
  BuildingFill, BankFill, HomeFill, OfficeFill
} from '@now-design/icons/Buildings';
```

### 💼 Business (210 icons)
Business and professional icons
```jsx
import { 
  Advertisement, Archive, Chart, Presentation,
  AdvertisementFill, ArchiveFill, ChartFill, PresentationFill
} from '@now-design/icons/Business';
```

### 💬 Communication (78 icons)
Communication and messaging icons
```jsx
import { 
  Chat, Message, Phone, Mail,
  ChatFill, MessageFill, PhoneFill, MailFill
} from '@now-design/icons/Communication';
```

### 🎨 Design (216 icons)
Design and creative tools
```jsx
import { 
  AlignItem, Brush, Palette, Vector,
  AlignItemFill, BrushFill, PaletteFill, VectorFill
} from '@now-design/icons/Design';
```

### 💻 Development (62 icons)
Programming and development icons
```jsx
import { 
  Braces, Brackets, Code, Terminal,
  BracesFill, BracketsFill, CodeFill, TerminalFill
} from '@now-design/icons/Development';
```

### 📱 Device (172 icons)
Device and hardware icons
```jsx
import { 
  Airplay, BarcodeBox, Computer, Smartphone,
  AirplayFill, BarcodeBoxFill, ComputerFill, SmartphoneFill
} from '@now-design/icons/Device';
```

### 📄 Document (234 icons)
Document and file icons
```jsx
import { 
  Article, Bill, File, Folder,
  ArticleFill, BillFill, FileFill, FolderFill
} from '@now-design/icons/Document';
```

### 💰 Finance (170 icons)
Financial and banking icons
```jsx
import { 
  Auction, BankCard, Dollar, Wallet,
  AuctionFill, BankCardFill, DollarFill, WalletFill
} from '@now-design/icons/Finance';
```

### 🍕 Food (30 icons)
Food and dining icons
```jsx
import { 
  Beer, Bowl, Coffee, Pizza,
  BeerFill, BowlFill, CoffeeFill, PizzaFill
} from '@now-design/icons/Food';
```

### 🏥 Health (76 icons)
Health and medical icons
```jsx
import { 
  MedicalAed, Heart, Stethoscope, Pill,
  MedicalAedFill, HeartFill, StethoscopeFill, PillFill
} from '@now-design/icons/Health';
```

### 🏷️ Logos (276 icons)
Brand and logo icons
```jsx
import { 
  AlibabaCloud, Alipay, Amazon, Apple,
  AlibabaCloudFill, AlipayFill, AmazonFill, AppleFill
} from '@now-design/icons/Logos';
```

### 🗺️ Map (172 icons)
Location and mapping icons
```jsx
import { 
  Anchor, Barricade, Compass, Location,
  AnchorFill, BarricadeFill, CompassFill, LocationFill
} from '@now-design/icons/Map';
```

### 🎬 Media (286 icons)
Media and entertainment icons
```jsx
import { 
  Album, Camera, Music, Video,
  AlbumFill, CameraFill, MusicFill, VideoFill
} from '@now-design/icons/Media';
```

### ⚙️ Metalcloud (38 icons)
Industrial and manufacturing icons
```jsx
import { 
  ControlPlan, Grades, Hardness, Inventory,
  ControlPlanFill, GradesFill, HardnessFill, InventoryFill
} from '@now-design/icons/Metalcloud';
```

### 🎲 Others (150 icons)
Miscellaneous and utility icons
```jsx
import { 
  Accessibility, Bell, Key, Lightbulb,
  AccessibilityFill, BellFill, KeyFill, LightbulbFill
} from '@now-design/icons/Others';
```

### ⚡ System (334 icons)
System and interface icons
```jsx
import { 
  Add, Close, Delete, Settings,
  AddFill, CloseFill, DeleteFill, SettingsFill
} from '@now-design/icons/System';
```

### 👤 User (128 icons)
User and profile icons
```jsx
import { 
  User, UserSettings, UserAdd, UserGroup,
  UserFill, UserSettingsFill, UserAddFill, UserGroupFill
} from '@now-design/icons/User';
```

### 🌤️ Weather (84 icons)
Weather and climate icons
```jsx
import { 
  Cloudy, Rainy, Sunny, Snowy,
  CloudyFill, RainyFill, SunnyFill, SnowyFill
} from '@now-design/icons/Weather';
```

## 🔧 Icon Props

All icons accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Icon size in pixels |
| `color` | `string` | `'currentColor'` | Icon color (CSS color value) |
| `...props` | `SVGProps` | - | Any valid SVG element props |

## 🎯 Icon Naming Convention

Icons follow a consistent naming pattern:

- **Base icons**: `IconName` (e.g., `ArrowDown`, `User`)
- **Filled variants**: `IconNameFill` (e.g., `ArrowDownFill`, `UserFill`)
- **Line variants**: `IconNameLine` (e.g., `ArrowDownLine`, `UserLine`)

## 🛠️ Development

### Building Icons

```bash
# Fetch latest icons from Figma and organize them
npm run build

# Only organize existing icons
npm run organize
```

### Project Structure

```
packages/icons/
├── raw/                    # Original SVG files from Figma
├── src/                    # Generated React components
│   ├── Arrows/            # Arrow category icons
│   ├── Buildings/         # Building category icons
│   ├── Business/          # Business category icons
│   ├── ...                # Other categories
│   └── index.js           # Main export file
├── scripts/
│   ├── fetch-figma-icons.js    # Fetch icons from Figma
│   ├── organize-icons.js       # Organize icons by category
│   └── fix-icon-fills.js       # Fix icon fill properties
└── package.json
```

## 📊 Icon Statistics

- **Total Icons**: 3,000+
- **Categories**: 19
- **Variants**: Fill and Line styles
- **Format**: React components with TypeScript support
- **Bundle Size**: Optimized with tree-shaking support

## 🔍 Finding Icons

### By Category
Each category contains related icons. Browse the category folders to find specific icons.

### By Name
Icons are named descriptively. For example:
- `ArrowDown` - Down arrow
- `UserSettings` - User settings
- `BuildingFill` - Filled building icon

### Search
Use your IDE's search functionality to find icons by name or category.

## 🎨 Design System Integration

This icon library is part of the Now Design System. Icons are designed to work seamlessly with:

- **Typography**: Consistent sizing with design tokens
- **Colors**: Support for theme colors and CSS custom properties
- **Spacing**: Aligned with design system spacing scale
- **Accessibility**: Proper ARIA labels and semantic markup

## 📝 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and build
5. Submit a pull request

## 📞 Support

For questions and support:
- Create an issue in the repository
- Check the documentation
- Review existing examples

---

**Built with ❤️ for the Now Design System** 