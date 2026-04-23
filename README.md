# 🚀 AdOpt AI

**AdOpt AI** is a full-stack MERN SaaS platform that helps small businesses optimize their digital advertising campaigns using AI-driven insights and analytics.

---

## 📌 Problem

Small businesses and startups often struggle with digital advertising because:

- Ad platforms like Google Ads and Meta Ads are complex  
- No clear guidance on improving performance  
- Limited budget leads to high risk  
- 26–40% of ad spend is wasted due to poor optimization  

---

## 💡 Solution

AdOpt AI simplifies ad optimization by:

- Providing a **unified dashboard** for all campaign metrics  
- Using **AI (OpenAI)** to generate actionable insights  
- Helping users **reduce wasted ad spend**  
- Offering **real-time alerts and analytics**  

---

## 🎯 Key Features

### 🔐 Authentication
- JWT-based authentication  
- Google OAuth login  

### 📊 Dashboard
- KPI cards (Spend, Clicks, ROI, Conversions)  
- Interactive charts (Recharts)  
- Campaign performance overview  

### 📈 Campaign Management
- Create, update, delete campaigns  
- Campaign health score  
- Filtering & search  

### 🤖 AI Insights
- AI-generated campaign suggestions  
- Accept / dismiss insights  
- Insight history tracking  

### 📁 File Upload
- Upload ad creatives (images/videos)  
- Cloudinary integration  
- Preview & manage files  

### 🔔 Notifications
- Budget alerts  
- Performance alerts  
- Toast notifications  

### 🌙 Theme System
- Light / Dark mode  
- Stored in localStorage  

### 🔍 SEO
- Dynamic meta tags  
- Sitemap & robots.txt  

### 📊 Analytics
- Google Analytics (GA4) integration  
- Event tracking  

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- MUI (Material UI)
- Redux Toolkit
- React Router
- Formik + Yup

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

### Integrations
- OpenAI API  
- Cloudinary  
- Google OAuth  
- Google Analytics (GA4)  

---

## 📂 Project Structure
adopt-ai/
│
├── client/        # Frontend (React)
├── server/        # Backend (Node/Express)
├── README.md
├── .gitignore



client/
└── src/
    ├── assets/            # images, icons
    │
    ├── components/        # reusable UI
    │   ├── ui/
    │   │   ├── Button.jsx
    │   │   ├── Input.jsx
    │   │   ├── Modal.jsx
    │   │
    │   ├── layout/
    │   │   ├── Navbar.jsx
    │   │   ├── Sidebar.jsx
    │   │   ├── DashboardLayout.jsx
    │
    ├── pages/             # route pages
    │   ├── auth/
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │
    │   ├── dashboard/
    │   │   ├── Dashboard.jsx
    │   │
    │   ├── campaign/
    │   │   ├── CampaignList.jsx
    │   │   ├── CampaignDetail.jsx
    │   │
    │   ├── ai/
    │   │   ├── Insights.jsx
    │   │
    │
    ├── features/          # Redux slices
    │   ├── auth/
    │   │   ├── authSlice.js
    │   │
    │   ├── campaign/
    │   │   ├── campaignSlice.js
    │   │
    │   ├── ai/
    │   │   ├── aiSlice.js
    │   │
    │   ├── ui/
    │   │   ├── uiSlice.js
    │
    ├── hooks/             # custom hooks
    │   ├── useAuth.js
    │   ├── useDebounce.js
    │   ├── useTheme.js
    │
    ├── services/          # API calls
    │   ├── api.js
    │   ├── authService.js
    │   ├── campaignService.js
    │
    ├── utils/             # helper functions
    │   ├── storage.js
    │   ├── constants.js
    │
    ├── routes/            # routing
    │   ├── AppRoutes.jsx
    │   ├── ProtectedRoute.jsx
    │
    ├── store/             # redux store
    │   ├── store.js
    │
    ├── App.jsx
    ├── main.jsx
    └── index.css



    server/
│
├── config/                # configs
│   ├── db.js
│   ├── cloudinary.js
│
├── models/                # M (Database)
│   ├── User.js
│   ├── Campaign.js
│   ├── Insight.js
│   ├── Notification.js
│
├── controllers/           # C (Logic)
│   ├── auth.controller.js
│   ├── campaign.controller.js
│   ├── ai.controller.js
│   ├── upload.controller.js
│   ├── notification.controller.js
│
├── routes/                # Route Layer
│   ├── auth.routes.js
│   ├── campaign.routes.js
│   ├── ai.routes.js
│   ├── upload.routes.js
│   ├── notification.routes.js
│   ├── index.js
│
├── middleware/            # middleware
│   ├── auth.middleware.js
│   ├── error.middleware.js
│   ├── upload.middleware.js
│
├── services/              # business logic
│   ├── ai.service.js
│   ├── notification.service.js
│
├── utils/                 # helpers
│   ├── jwt.js
│   ├── logger.js
│
├── server.js              # entry point
├── app.js                 # express setup
└── .env

BACKEND MVC FLOW
Route → Controller → Service → Model → DB
POST /campaigns
→ campaign.routes.js
→ campaign.controller.js
→ campaign.service.js
→ Campaign model
→ MongoDB