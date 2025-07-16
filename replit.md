# Replit.md - Kian Bradly Musical Artist Portfolio

## Overview

This is a full-stack web application for Kian Bradly, a musical artist and producer. The project is a portfolio website showcasing professional music services, latest tracks, and contact information. The application features a modern React frontend with Tailwind CSS styling and an Express.js backend with PostgreSQL database integration.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with tsx and Vite middleware integration

### Project Structure
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Shared TypeScript schemas and types
- `migrations/` - Database migration files

## Key Components

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Schema Definition**: Located in `shared/schema.ts` using Drizzle ORM
- **Validation**: Zod schemas for runtime type validation

### Frontend Components
- **Navigation**: Responsive navigation with social media links
- **HeroSection**: Landing page with animated elements
- **ServicesSection**: Professional mixing services showcase
- **MusicSection**: Spotify embed integration for latest tracks
- **ProjectsSection**: Upcoming projects and releases
- **ContactSection**: Contact form with toast notifications
- **Footer**: Social media links and branding

### UI Design System
- **Typography**: Inter for body text, Playfair Display for headings, JetBrains Mono for code
- **Color Scheme**: Black, white, and gold accent colors for professional branding
- **Components**: Complete shadcn/ui component library integration
- **Responsive**: Mobile-first design with Tailwind CSS breakpoints

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Routes**: Express.js handles requests with `/api` prefix
3. **Database Operations**: Storage interface abstracts database operations
4. **Response Handling**: Structured JSON responses with error handling
5. **State Management**: React Query manages server state caching and synchronization

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Backend**: Express.js, connect-pg-simple
- **Development**: Vite, TypeScript, tsx

### Third-Party Integrations
- **Spotify**: Embedded music player for track showcase
- **Font Awesome**: Icon library for social media and UI icons
- **Google Fonts**: Custom typography (Inter, Playfair Display, JetBrains Mono)

## Deployment Strategy

### Environment Configuration
- **Development**: Uses Vite dev server with Express middleware
- **Production**: Builds static assets and runs Express server
- **Database**: PostgreSQL connection via environment variable `DATABASE_URL`
- **Port Configuration**: Server runs on port 5000 with external port 80

### Build Process
1. **Frontend Build**: Vite compiles React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Migration**: Drizzle Kit handles schema migrations
4. **Production Start**: Node.js runs the bundled Express server

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Run Command**: `npm run dev` for development
- **Build Command**: `npm run build` for production
- **Start Command**: `npm run start` for production server

## Changelog

Changelog:
- June 26, 2025. Initial setup
- June 26, 2025. Converted to static frontend-only site with Formspree integration for contact form
- July 7, 2025. Standardized entire website to use Inter font consistently
- July 7, 2025. Added robust Spotify embed fallback system with "Open on Spotify" button for mobile browser failures
- July 15, 2025. Updated video gallery to use Vimeo official embed format with autoplay, removed caption fields, standalone gallery banner image

## User Preferences

Preferred communication style: Simple, everyday language.