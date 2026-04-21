# Weather Next

A modern weather application built with [Next.js](https://nextjs.org), React 19, and TypeScript. Get real-time weather information based on your location or search for any city in the world.

## Features

- **Geolocation-based Weather**: Automatically fetch weather data based on your current location
- **Search Functionality**: Search for weather in any city worldwide
- **Weather Forecasts**: View detailed weather forecasts with hourly and daily breakdowns
- **Weather Alerts**: Receive and display weather alerts for your location
- **Today's Stats**: Quick overview of today's weather conditions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Built with Tailwind CSS for a sleek, intuitive interface

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Language**: [TypeScript 6](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) with PostCSS
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query)
- **Icons**: [FontAwesome](https://fontawesome.com)
- **Linting**: [ESLint](https://eslint.org) and [Biome](https://biomejs.dev)

## Getting Started

### Prerequisites

- Node.js 18 or later
- pnpm (recommended) or npm/yarn/bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd weather-next
```

2. Install dependencies using pnpm:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── app/              # Next.js app directory with routes and API endpoints
│   ├── api/         # API routes for weather and autocomplete
│   └── search/      # Search page route
├── hooks/           # Custom React hooks for data fetching
├── store/           # Zustand store for state management
├── ui/              # React components
│   ├── layout/      # Layout components (forecast, alerts, etc.)
│   ├── Pages/       # Page components
│   └── shared/      # Shared/reusable components
└── utils/           # Utility functions and helpers
```

## Environment Setup

The application uses browser geolocation to access your weather data. Make sure to allow location access when prompted by your browser.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is open source and available under the MIT License.
