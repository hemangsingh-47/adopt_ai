# 🚀 AdOpt AI

AdOpt AI is a professional, full-stack MERN SaaS platform designed to empower small businesses and solo entrepreneurs with enterprise-level advertising intelligence. By unifying cross-platform metrics and leveraging state-of-the-art AI, AdOpt AI transforms complex data into actionable growth strategies.

**🌐 Live Demo:** [https://adopt-ai-ten.vercel.app/](https://adopt-ai-ten.vercel.app/)

---

## ❗ Problem Statement

Digital advertising is the lifeblood of modern business, yet it remains one of the most significant sources of wasted capital for small enterprises.

*   **Complexity Overload:** Platforms like Google Ads and Meta Ads feature steep learning curves and overwhelming interfaces.
*   **Budget Leakage:** Without expert optimization, 26–40% of ad spend is typically wasted on non-converting traffic.
*   **Lack of Expertise:** Hiring full-time media buyers is financially out of reach for many growing startups.
*   **Data Fragmentation:** Managing multiple ad platforms leads to fragmented insights and poor decision-making.

---

## 💡 Solution

AdOpt AI bridges the gap between data and strategy by providing a simplified, AI-first approach to campaign management.

*   **AI-Driven Strategy:** Leverages Grok (xAI) and Groq (LLaMA 3.3) to analyze campaign performance and suggest high-impact optimizations.
*   **Unified Command Center:** A single, high-performance dashboard that aggregates KPIs from multiple sources.
*   **Data-Backed Decisions:** Replaces guesswork with precision, using real-time analytics and predictive scoring.
*   **Simplicity by Design:** A clean, intuitive UX that hides technical complexity without sacrificing power.

---

## 🎯 Features

### 📊 Intelligence & Analytics
*   **Dashboard:** High-fidelity KPI tracking (Spend, Clicks, ROI, Conversions) with interactive Recharts visualizations.
*   **AI Insights:** Automated generation of optimization suggestions using Grok/Groq.
*   **Audience Intelligence:** Deep-dive analysis of customer segments and conversion patterns.

### 📈 Campaign Operations
*   **Campaign CRUD:** Full lifecycle management of marketing campaigns with health scoring.
*   **CSV Import:** Seamlessly import real-world data from external sources for immediate analysis.
*   **Creatives Library:** Centralized hub for ad assets (images/videos) with direct Cloudinary integration.

### 🔐 Security & Infrastructure
*   **Authentication:** Multi-layered security with JWT-based login and Google OAuth integration.
*   **Notifications:** Real-time system alerts for budget overruns and performance milestones.
*   **Responsive UI:** Mobile-first design architecture using Tailwind CSS and Material UI.
*   **SEO Optimized:** Dynamic meta tags and SEO best practices for maximum platform visibility.

---

## 🧱 Tech Stack

### Frontend
*   **React (Vite):** Next-gen frontend tooling for ultra-fast development.
*   **State Management:** Redux Toolkit for predictable, centralized application state.
*   **Styling:** Tailwind CSS for rapid UI development and Material UI for robust components.
*   **Visualizations:** Recharts for professional, interactive data storytelling.

### Backend
*   **Node.js & Express:** Scalable server-side architecture.
*   **MongoDB (Mongoose):** Flexible, document-oriented database for complex campaign data.
*   **Authentication:** JSON Web Tokens (JWT) and Passport.js for secure sessions.

### Integrations
*   **AI Engine:** Grok API (xAI) & Groq (LLaMA 3.3) for advanced data analysis.
*   **Cloud Storage:** Cloudinary for high-performance ad asset hosting.
*   **Social Auth:** Google Cloud Console (OAuth 2.0).
*   **Analytics:** Google Analytics 4 (GA4) for platform usage tracking.

---

## 🏗️ Architecture

AdOpt AI follows a modern, decoupled architecture designed for scale:

*   **Feature-Based Frontend:** Components are organized by domain (auth, campaign, creative), ensuring high maintainability and code reuse.
*   **MVC Backend:** Follows the Model-View-Controller pattern to separate data logic (Mongoose), orchestration (Controllers), and API interfaces (Routes).
*   **Service Layer:** Dedicated services handle complex logic for AI generation, external APIs, and notification triggers.

---

## 📂 Folder Structure

```text
adopt-ai/
├── client/                 # Frontend Application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── features/       # Redux slices and feature logic
│   │   ├── layout/         # Navigation and Page wrappers
│   │   ├── pages/          # View components
│   │   ├── services/       # API abstraction layer
│   │   └── utils/          # Helpers and constants
├── server/                 # Backend Application
│   ├── config/             # Database and API configs
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Auth and Error guards
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API endpoints
│   └── services/           # Business logic & AI integration
```

---

## ⚙️ Setup Instructions

### 1. Prerequisites
*   Node.js (v16+)
*   MongoDB Atlas Account
*   Cloudinary Account
*   Groq/xAI API Keys

### 2. Clone & Install
```bash
git clone https://github.com/hemangsingh-47/adopt_ai.git
cd adopt_ai

# Install dependencies for both
cd server && npm install
cd ../client && npm install
```



### 3. Run Application
```bash
# In server directory
npm run dev

# In client directory
npm run dev
```

---

## 📊 API Overview

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/auth` | `POST` | User registration & JWT login |
| `/api/campaigns` | `GET/POST` | Fetch all or create new campaigns |
| `/api/ai/insights`| `GET` | Generate AI optimization suggestions |
| `/api/upload` | `POST` | Upload ad assets to Cloudinary |
| `/api/notifications`| `GET` | Retrieve real-time system alerts |

---

## 🚀 Future Improvements

*   **Direct API Integration:** Connect directly to Google/Meta Ads APIs for automatic data syncing.
*   **AI Auto-Optimization:** Allow the AI to automatically adjust bids based on predefined guardrails.
*   **Budget Guardrails:** Automated "kill-switch" mechanisms to prevent unexpected budget spikes.

---

## 👨‍💻 Author

**Hemang Singh**
*   GitHub: [@hemangsingh-47](https://github.com/hemangsingh-47)
*   Portfolio: [hemangsingh](https://hemangsingh-tau.vercel.app/)

---

## ⭐ Conclusion

AdOpt AI demonstrates the power of combining modern MERN stack development with cutting-edge AI. It showcases a production-ready approach to handling complex data, secure file uploads, and cross-platform integrations, providing a blueprint for high-performance SaaS applications.
