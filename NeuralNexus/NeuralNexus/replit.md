# Replit.md - Portfolio Application

## Overview
This is a full-stack portfolio application built for Divyanshu Pandey, showcasing his work at the intersection of AI, cognitive science, and philosophy. The application features a modern, dark-themed design with interactive elements and smooth animations, built using React, Express, and TypeScript.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: TailwindCSS with shadcn/ui components for consistent design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: Radix UI primitives with custom styling
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: In-memory storage with planned PostgreSQL integration
- **API Design**: RESTful API with `/api` prefix

### Key Components

#### Frontend Structure
- **Components**: Modular React components for different portfolio sections
  - `HeroSection`: Landing page with 3D brain animation
  - `AboutSection`: Personal introduction and statistics
  - `ResearchSection`: Academic research experience
  - `ProjectsSection`: Featured projects showcase
  - `SkillsSection`: Technical skills with progress bars
  - `ContactSection`: Contact form and social links
- **UI Library**: Complete shadcn/ui component library for consistent styling
- **Animations**: Three.js integration for 3D brain visualization

#### Backend Structure
- **Routes**: Express router with middleware for logging and error handling
- **Storage Interface**: Abstract storage layer supporting both in-memory and database implementations
- **Development Tools**: Hot reloading with Vite middleware integration

## Data Flow

1. **Client Request**: User interacts with React frontend
2. **API Calls**: Frontend makes requests to Express backend via TanStack Query
3. **Data Processing**: Backend processes requests using storage interface
4. **Response**: Backend returns JSON responses to frontend
5. **UI Update**: Frontend updates UI based on server responses

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **express**: Web application framework
- **react**: Frontend framework
- **typescript**: Type safety across the stack

### UI Dependencies
- **@radix-ui/***: Headless UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **three.js**: 3D graphics for brain animation

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Migration**: Drizzle kit handles schema migrations

### Environment Configuration
- **Development**: Uses Vite dev server with Express middleware
- **Production**: Serves static files from Express with built frontend
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Scripts
- `npm run dev`: Development server with hot reloading
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server
- `npm run db:push`: Push database schema changes

## Changelog
- July 01, 2025. Initial setup

## User Preferences
Preferred communication style: Simple, everyday language.