# CORPAY Dashboard - Helena Banking Inspired

A production-ready, 3D animated CORPAY dashboard with transparent glassmorphic virtual cards, inspired by the Helena Banking Dashboard design.

## 🎨 Design Features

- **Helena Banking Dashboard Inspired**: Deep charcoal dark theme with neon accent colors
- **Fully Transparent Virtual Cards**: 30px backdrop blur with glassmorphic effects
- **Deep Charcoal Dark Theme**: 
  - Background: `#0a0e27` to `#1a1f3a`
  - Neon accents: Cyan (`#00d4ff`) and Purple (`#7c3aed`)
- **3D Card Animations**: Smooth rotation and scale transforms on hover
- **Neon Glow Effects**: Beautiful shadows and borders with neon glow

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite 6** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first CSS with custom theme
- **Motion (Framer Motion)** - Smooth 3D animations and transitions
- **Recharts** - Beautiful data visualizations
- **Lucide React** - Icon library
- **Radix UI** - Accessible UI primitives

## 📦 Project Structure

```
src/
├── app/
│   ├── App.tsx                    # Main app component with routing
│   ├── components/
│   │   ├── Sidebar.tsx           # Navigation sidebar
│   │   ├── TopBar.tsx            # Header with company info
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx     # KPI cards, charts, AI alerts
│   │   │   ├── VirtualCards.tsx  # 3D glassmorphic card showcase
│   │   │   ├── Expenses.tsx      # Expense management
│   │   │   ├── Tokens.tsx        # Token lifecycle
│   │   │   ├── Settlements.tsx   # Settlement timeline
│   │   │   ├── Analytics.tsx     # Budget vs actuals
│   │   │   ├── AICfo.tsx         # AI decision log
│   │   │   └── Settings.tsx      # Configuration
│   │   └── ui/                   # Reusable UI components
│   └── main.tsx                   # React entry point
└── styles/
    ├── index.css                  # Global styles
    ├── theme.css                  # CSS variables and theme
    └── tailwind.css               # Tailwind imports
```

## 🎯 Key Features

### Dashboard Page
- **KPI Cards**: Animated cards with metrics, shimmer effects, and neon glows
- **Obligation Flow Chart**: Recharts visualization with transparent styling
- **AI CFO Alerts**: Real-time notifications with glassmorphic containers
- **Settlement Timeline**: Animated timeline with neon dot indicators

### Virtual Cards Page
- **3D Glass Cards**: Fully transparent cards with 30px backdrop blur
- **Interactive Preview**: Large rotating card with hover effects
- **Card Stack**: Selectable card list with animated indicators
- **Token Tracking**: Progress bars with neon glow effects
- **Settlement Info**: Glass panels with settlement details

### Animations
- **3D Card Rotation**: `rotateY` and `rotateX` on hover
- **Shimmer Effects**: Animated gradient overlays
- **Pulse Effects**: Breathing animations on active elements
- **Smooth Transitions**: Motion-powered page transitions
- **Scale Animations**: Hover effects with scale transforms

## 🛠️ Development

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## 🎨 Theme Customization

The theme is defined in `src/styles/theme.css` with CSS variables:

```css
/* Helena-inspired neon colors */
--neon-cyan: #00d4ff;
--neon-purple: #7c3aed;
--neon-pink: #ec4899;
--neon-green: #84cc16;

/* Deep charcoal backgrounds */
--charcoal-dark: #0a0e27;
--charcoal-medium: #1a1f3a;
--charcoal-light: #252b48;

/* Glass Effect */
--glass-bg: rgba(26, 31, 58, 0.4);
--glass-border: rgba(0, 212, 255, 0.2);
--glass-blur: 25px;
```

## 🌟 Component Highlights

### Glassmorphic Card Component
```tsx
<div
  style={{
    background: "rgba(26, 31, 58, 0.25)",
    backdropFilter: "blur(30px)",
    border: "1px solid rgba(0, 212, 255, 0.3)",
    boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)"
  }}
>
  {/* Card content */}
</div>
```

### 3D Hover Animation
```tsx
<motion.div
  whileHover={{ 
    rotateY: 8, 
    rotateX: -5,
    scale: 1.02
  }}
  style={{ transformStyle: "preserve-3d" }}
>
  {/* Animated content */}
</motion.div>
```

## 📊 Mock Data

The dashboard uses realistic mock data including:
- KPI metrics with trends
- Transaction history
- Settlement schedules
- AI decision logs
- Budget vs actual data
- Policy adherence metrics

## 🔒 Features

- **Token-Based System**: Expense tokenization with guaranteed settlement
- **AI CFO Integration**: Automated decision tracking
- **Trust Score**: Company trust metrics
- **Settlement Assurance**: Company-backed payment guarantees
- **Policy Compliance**: Real-time policy validation
- **UPI Circle Integration**: Automated settlement via UPI

## 📱 Responsive Design

Fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎭 Animation System

Powered by Motion (Framer Motion):
- Page transitions with fade/scale
- 3D card rotations
- Shimmer skeleton loaders
- Pulse effects on metrics
- Timeline animations
- Smooth opacity/transform transitions

## 🚢 Deployment

The project is ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `dist` folder.

## 📝 License

MIT License - Feel free to use this project as a template for your own dashboards.

## 🙏 Credits

- Design inspiration: [Helena Banking Dashboard](https://dribbble.com/shots/22831581-Helena-Banking-Dashboard)
- Built with modern web technologies and best practices
- Glassmorphism design pattern for a stunning visual experience

---

**Built with ❤️ using React, TypeScript, and Vite**
