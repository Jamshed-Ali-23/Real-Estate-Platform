# 🏠 Real Estate Platform

A modern, full-stack real estate platform built for the Pakistani market. This application allows users to browse, search, and filter properties for sale or rent across major Pakistani cities like Islamabad, Lahore, and Karachi.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-blue)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the Application](#-running-the-application)
- [API Endpoints](#-api-endpoints)
- [Database Schema](#-database-schema)
- [Authentication](#-authentication)
- [Screenshots](#-screenshots)

## ✨ Features

### Public Features
- 🏘️ Browse all properties (sale & rent)
- 🔍 Advanced search and filtering (location, type, price, bedrooms)
- 📍 Properties organized by Pakistani cities (Islamabad, Lahore, Karachi, etc.)
- 💰 PKR currency with Lac/Crore formatting
- 📱 Fully responsive design
- 💬 Live chat widget to contact agent
- 📝 Contact form for inquiries
- 🏷️ Property categories (Houses, Apartments, Villas, Farmhouses, Plots, Commercial)

### Admin Panel Features
- 📊 Dashboard with analytics and charts
- 🏠 Property management (CRUD operations)
- 👥 Lead management system
- 📅 Appointment calendar
- 💬 Message inbox
- ⚙️ Settings management
- 📈 Real-time statistics

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React 18 | UI Library |
| Vite 5 | Build Tool & Dev Server |
| React Router DOM 6 | Client-side Routing |
| Zustand | State Management |
| TailwindCSS 3 | Styling |
| Framer Motion | Animations |
| React Hook Form | Form Handling |
| Yup | Form Validation |
| Recharts | Charts & Graphs |
| React Hot Toast | Notifications |
| Axios | HTTP Client |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js 4 | Web Framework |
| MongoDB | Database |
| Mongoose | ODM (Object Document Mapper) |
| JWT | Authentication |
| Bcrypt.js | Password Hashing |
| CORS | Cross-Origin Resource Sharing |
| Multer | File Upload |
| Express Validator | Input Validation |

## 📁 Project Structure

```
Real Estate Platform/
├── backend/                    # Express.js Backend
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   └── propertyController.js
│   ├── middleware/
│   │   ├── auth.js            # JWT authentication
│   │   ├── errorHandler.js    # Error handling
│   │   └── upload.js          # File upload (Multer)
│   ├── models/
│   │   ├── Property.js        # Property schema
│   │   ├── User.js            # User schema
│   │   ├── Lead.js            # Lead schema
│   │   ├── Message.js         # Message schema
│   │   ├── Appointment.js     # Appointment schema
│   │   └── ContactSubmission.js
│   ├── routes/
│   │   ├── auth.js            # Auth routes
│   │   ├── properties.js      # Property CRUD
│   │   ├── leads.js           # Lead management
│   │   ├── messages.js        # Messages
│   │   ├── appointments.js    # Appointments
│   │   └── contact.js         # Contact form
│   ├── seeder/
│   │   ├── seed.js            # Main seeder
│   │   └── seedProperties.js  # Property seeder
│   ├── server.js              # Main server file
│   └── package.json
│
├── src/                        # React Frontend
│   ├── components/
│   │   ├── buttons/           # Reusable buttons
│   │   ├── cards/             # Property, Stat, Lead cards
│   │   ├── chat/              # Chat widget
│   │   ├── forms/             # Form inputs
│   │   ├── layout/            # Navbar, Footer, Sidebar
│   │   ├── modals/            # Modal dialogs
│   │   └── ui/                # UI components
│   ├── config/
│   │   └── agent.js           # Agent configuration
│   ├── context/
│   │   └── ChatContext.jsx    # Chat state
│   ├── hooks/                 # Custom React hooks
│   ├── pages/
│   │   ├── Home/              # Landing page
│   │   ├── Properties/        # All properties
│   │   ├── Buy/               # Properties for sale
│   │   ├── Rent/              # Rental properties
│   │   ├── Sell/              # List property form
│   │   ├── PropertyDetail/    # Single property view
│   │   ├── About/             # About page
│   │   ├── Contact/           # Contact page
│   │   └── Admin/             # Admin panel pages
│   ├── services/              # API service functions
│   ├── stores/                # Zustand stores
│   ├── utils/                 # Helper functions
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
│
├── package.json               # Frontend dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind configuration
└── postcss.config.js          # PostCSS configuration
```

## 🚀 Installation

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd "Real Estate Platform"
```

### Step 2: Install Frontend Dependencies
```bash
npm install
```

### Step 3: Install Backend Dependencies
```bash
cd backend
npm install
```

## 🔐 Environment Variables

### Backend (.env file in /backend folder)
```env
NODE_ENV=development
PORT=5000

# MongoDB Atlas Connection
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/real-estate?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30
```

## ▶️ Running the Application

### Start Backend Server
```bash
cd backend
node server.js
# or for development with auto-reload
npm run dev
```
Backend runs on: `http://localhost:5000`

### Start Frontend Development Server
```bash
# In root directory
npm run dev
```
Frontend runs on: `http://localhost:3000`

### Seed Database with Sample Data
```bash
cd backend
node seeder/seedProperties.js
```

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |
| POST | `/api/auth/logout` | Logout user |

### Properties
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/properties` | Get all properties |
| GET | `/api/properties/:id` | Get single property |
| POST | `/api/properties` | Create property (Auth) |
| PUT | `/api/properties/:id` | Update property (Auth) |
| DELETE | `/api/properties/:id` | Delete property (Auth) |

### Query Parameters for Properties
- `search` - Search in title, description, city
- `propertyType` - Filter by type (house, apartment, villa, etc.)
- `listingType` - Filter by sale or rent
- `minPrice` - Minimum price
- `maxPrice` - Maximum price
- `bedrooms` - Minimum bedrooms
- `sort` - Sort by field (-price, price, -createdAt)
- `page` - Page number
- `limit` - Items per page

### Leads
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/leads` | Get all leads (Auth) |
| POST | `/api/leads` | Create new lead |
| PATCH | `/api/leads/:id/status` | Update lead status (Auth) |
| DELETE | `/api/leads/:id` | Delete lead (Auth) |

### Contact
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |

## 📊 Database Schema

### Property Model
```javascript
{
  title: String,
  description: String,
  price: Number,
  propertyType: ['House', 'Apartment', 'Villa', 'Farmhouse', 'Plot', ...],
  listingType: ['sale', 'rent'],
  status: ['For Sale', 'For Rent', 'Sold', 'Pending'],
  address: {
    street: String,
    city: String,
    state: String,
    country: 'Pakistan'
  },
  bedrooms: Number,
  bathrooms: Number,
  area: Number,
  features: [String],
  amenities: [String],
  images: [String],
  featured: Boolean,
  createdAt: Date
}
```

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: ['user', 'agent', 'admin'],
  phone: String,
  createdAt: Date
}
```

### Lead Model
```javascript
{
  name: String,
  email: String,
  phone: String,
  message: String,
  property: ObjectId (ref: Property),
  status: ['new', 'contacted', 'viewing', 'negotiating', 'closed'],
  source: String,
  createdAt: Date
}
```

## 🔒 Authentication

The application uses JWT (JSON Web Tokens) for authentication:

1. **Login**: User submits credentials → Server validates → Returns JWT token
2. **Protected Routes**: Frontend sends token in Authorization header
3. **Token Validation**: Backend middleware verifies token on protected routes
4. **Logout**: Token is removed from client storage

### Demo Credentials
```
Email: ahmed@khanrealestate.pk
Password: admin123
```

## 🎨 Key Features Explained

### Currency Formatting (PKR)
- Amounts under 1 Lac: Shown in thousands (e.g., PKR 50,000)
- Amounts 1 Lac to 1 Crore: Shown in Lac (e.g., 75 Lac)
- Amounts above 1 Crore: Shown in Crore (e.g., 2.5 Crore)

### Property Search
- Real-time filtering without page reload
- Multiple filter combinations (type + location + price + bedrooms)
- URL parameters for shareable search results

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Collapsible navigation on mobile

## 👨‍💻 Author

**Ahmed Raza Khan**
- Licensed Property Consultant
- 12+ Years Experience
- Specializing in DHA & Bahria Town Properties

## 📄 License

This project is licensed under the MIT License.

---
jeo or jeene do
Built with ❤️ for the Pakistani Real Estate Market
