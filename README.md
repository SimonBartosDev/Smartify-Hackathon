# 🎯 Smartify - AI-Powered Learning Planner

[![Hackathon Winner](https://img.shields.io/badge/Lahti%20Hackathon-Audience%20Favorite-gold?style=for-the-badge)](https://github.com/SimonBartosLUT/Smartify)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat&logo=mongodb)](https://www.mongodb.com/)

> **🏆 Winner of Audience Favorite at the First Ever Lahti Hackathon**

Smartify transforms vague learning goals into actionable, personalized daily plans. Whether you want to learn React, improve your English, or master guitar, Smartify creates a structured roadmap tailored to your current level, target goals, and available time.

## 🌟 Hackathon Achievement

Built during the inaugural **Lahti Hackathon**, Smartify won **Audience Favorite** by solving a real problem: turning ambitious learning goals into achievable daily actions. The project demonstrates rapid full-stack development, AI integration, and user-centric design under time constraints.

## ✨ Key Features

- **🤖 AI-Powered Plan Generation** - Leverages Groq API to create personalized learning paths based on your skill level and goals
- **👤 User Authentication** - Secure JWT-based authentication with bcrypt password hashing
- **📊 Progress Tracking** - Monitor your daily tasks with clear success criteria and completion states
- **💾 Persistent Storage** - Save and retrieve multiple learning plans per user
- **🎨 Modern UI/UX** - Responsive, dark-themed interface built with React and modern CSS
- **⚡ Real-time Updates** - Dynamic plan generation and instant feedback

## 🛠️ Tech Stack

### Frontend
- **React 19.2** with Vite for blazing-fast development
- **React Router** for seamless navigation
- **Context API** for state management
- **Modern CSS** with responsive design principles

### Backend
- **Node.js** with Express 5.1
- **MongoDB** with Mongoose ODM
- **JWT** for secure authentication
- **Groq API** for AI-powered plan generation
- **bcrypt** for password security

### DevOps & Tooling
- **ESLint** for code quality
- **npm workspaces** for monorepo management
- **Environment-based configuration** for deployment flexibility

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- MongoDB instance (local or MongoDB Atlas)
- Groq API key ([Get one here](https://console.groq.com))

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/SimonBartosLUT/Smartify.git
cd Smartify
```

2. **Backend setup**
```bash
cd backend
npm install
```

Create `.env` file in `backend/`:
```env
PORT=8000
MONGO_URI=mongodb://localhost:27017/smartify
JWT_SECRET=your_secure_jwt_secret_here
GROQ_API_KEY=your_groq_api_key_here
```

Start the backend:
```bash
npm run dev
```

3. **Frontend setup**
```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

### Quick Start Scripts

From the repository root:
```bash
npm run frontend       # Start frontend dev server
npm run backend        # Start backend in dev mode
npm run frontend:build # Build frontend for production
npm run frontend:lint  # Run ESLint checks
```

## 📁 Project Structure

```
Smartify/
├── backend/
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── controllers/    # Request handlers
│   │   ├── models/         # Mongoose schemas
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── utils/          # Helper functions
│   │   └── server.js       # Express app entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── context/        # Context providers
│   │   ├── layout/         # Layout components
│   │   ├── App.jsx         # Router configuration
│   │   └── main.jsx        # React entry point
│   └── package.json
└── package.json            # Root workspace config
```

## 🎯 How It Works

1. **Sign Up/Login** - Create an account or log in to access your personalized dashboard
2. **Define Your Goal** - Specify what you want to learn, your current level, and target level
3. **Set Your Schedule** - Choose your timeframe and daily availability
4. **Get Your Plan** - AI generates a day-by-day learning plan with actionable steps
5. **Track Progress** - Mark tasks as complete and monitor your journey

## 🔑 Core Functionality

### Authentication Flow
- Secure user registration with password validation
- JWT-based session management with httpOnly cookies
- Protected routes and API endpoints

### Plan Generation
- AI-powered curriculum creation using Groq's LLaMA 3.3 70B model
- Personalized based on skill level progression
- Free and accessible resource recommendations
- Daily tasks with clear success criteria

### Data Persistence
- MongoDB for scalable data storage
- User-specific plan management
- Efficient querying with Mongoose

## 🎓 Learning Outcomes & Technical Highlights

This project demonstrates:

- **Full-stack development** with modern JavaScript ecosystem
- **RESTful API design** with proper separation of concerns
- **Authentication & Authorization** implementation
- **Database modeling** and relationships
- **AI/LLM integration** for dynamic content generation
- **State management** in React applications
- **Responsive design** principles
- **Security best practices** (password hashing, JWT, environment variables)
- **Monorepo management** with npm workspaces

## 🔮 Future Enhancements

- [ ] Unit and integration testing (Jest, React Testing Library, Supertest)
- [ ] CI/CD pipeline with GitHub Actions
- [ ] Progress analytics and visualization
- [ ] Social features (share plans, community learning)
- [ ] Mobile app with React Native
- [ ] Spaced repetition algorithm integration
- [ ] Multi-language support

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Create new user account
- `POST /api/auth/login` - Authenticate user
- `POST /api/auth/logout` - End user session
- `GET /api/auth/me` - Get current user info

### Plans
- `POST /api/getPlan` - Generate new learning plan
- `POST /api/savePlan` - Save plan to database
- `POST /api/loadPlan` - Retrieve user's plans

## 🤝 Contributing

This project was built during a hackathon and is open for improvements! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is available under the MIT License.

## 👨‍💻 Author

**Simon Bartos**

- GitHub: [@SimonBartosLUT](https://github.com/SimonBartosLUT)
- Project: [Smartify](https://github.com/SimonBartosLUT/Smartify)

---

<div align="center">

**Built with ❤️ during the First Ever Lahti Hackathon**

*Transforming learning goals into achievable daily actions*

</div>
# Smartify-Hackathon
