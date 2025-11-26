# Task Manager Application

A full-stack task management application built with React.js frontend, Node.js/Express backend, and MongoDB database. Containerized with Docker for easy deployment.

# Sammary

The Application was a entry pratice for Node.js, React.js and MongoDB. 

## 🚀 Features

- **User Authentication** - Register and login with JWT tokens
- **Task Management** - Create, read, update, and delete tasks
- **Task Organization** - Categorize tasks by status and priority
- **Responsive Design** - Works on desktop and mobile devices
- **Real-time Updates** - Instant UI updates when tasks change
- **RESTful API** - Clean API design with proper error handling

## 🛠️ Tech Stack

### Frontend
- React.js 18
- React Router DOM
- Axios for API calls
- Context API for state management
- CSS3 with responsive design

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS enabled

### Database
- MongoDB
- Mongoose ODM

### DevOps
- Docker & Docker Compose
- Nginx for static file serving
- Multi-stage Docker builds

## 📁 Project Structure

```
task-manager-app/
├── backend/
│   ├── config/           # Database configuration
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Authentication middleware
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── server.js        # Entry point
│   └── package.json
├── frontend/
│   ├── public/          # Static files
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── context/     # React context
│   │   ├── pages/       # Page components
│   │   ├── api/         # API configuration
│   │   └── App.js       # Main App component
│   ├── nginx.conf       # Nginx configuration
│   └── package.json
├── docker-compose.yml    # Docker compose configuration
├── backend.Dockerfile    # Backend Dockerfile
├── frontend.Dockerfile   # Frontend Dockerfile
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- Node.js 18+ (for local development)

### Method 1: Full Docker Deployment

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task-manager-app
   ```

2. **Start all services with Docker Compose**
   ```bash
   docker-compose up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MongoDB Admin: http://localhost:8081


## 🔧 Configuration

### Environment Variables

**Backend (.env)**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

**Frontend (.env)**
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Docker Services

- **Frontend**: React app served by Nginx on port 3000
- **Backend**: Node.js/Express API on port 5000
- **MongoDB**: Database on port 27017
- **Mongo Express**: Web-based MongoDB admin on port 8081

## 📚 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/profile` | Get user profile |

### Task Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all user tasks |
| POST | `/api/tasks` | Create new task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

### Task Model
```javascript
{
  title: String,        // Required
  description: String,  // Optional
  status: String,       // ['pending', 'in-progress', 'completed']
  priority: String,     // ['low', 'medium', 'high']
  dueDate: Date,        // Optional
  user: ObjectId        // Reference to User
}
```

## 🐳 Docker Commands

### Development
```bash
# Start all services
docker-compose up --build

# Start in background
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Production
```bash
# Build and start production
docker-compose -f docker-compose.prod.yml up --build -d
```

### Maintenance
```bash
# Check running containers
docker-compose ps

# Restart specific service
docker-compose restart backend

# Rebuild specific service
docker-compose build frontend

# Remove everything including volumes
docker-compose down -v
```

## 🧪 Testing

### Run Backend Tests
```bash
cd backend
npm test
```

### Run Frontend Tests
```bash
cd frontend
npm test
```

### Test API Endpoints
```bash
# Health check
curl http://localhost:5000/health

# Get API info
curl http://localhost:5000/
```

## 🔒 Security Features

- Password hashing with bcryptjs
- JWT token authentication
- CORS configuration
- Input validation and sanitization
- MongoDB injection protection with Mongoose
- Environment variable protection

## 📱 Frontend Features

### Components
- **Auth**: Login and Register forms
- **Tasks**: Task list, task item, and task form
- **Layout**: Navigation bar and responsive layout

### Pages
- **Home**: Landing page with features overview
- **Dashboard**: User dashboard with task statistics
- **Authentication**: Login and registration pages

### State Management
- React Context API for authentication state
- Local state for form management
- API state management with Axios interceptors

## 🗄️ Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### Task Model
```javascript
{
  title: String,
  description: String,
  status: String,
  priority: String,
  dueDate: Date,
  user: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

## 🚢 Deployment

### Production Deployment
1. Set environment variables for production
2. Build optimized Docker images
3. Use production Docker Compose file
4. Configure reverse proxy (Nginx)
5. Set up SSL certificates

### Environment Setup
```bash
# Production environment variables
NODE_ENV=production
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_secure_jwt_secret
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Find and kill processes using ports
   sudo lsof -ti:3000,5000,27017 | xargs kill -9
   ```

2. **MongoDB connection issues**
   ```bash
   # Check if MongoDB is running
   docker-compose logs mongodb
   ```

3. **Docker build failures**
   ```bash
   # Clean build without cache
   docker-compose build --no-cache
   ```

4. **Frontend not connecting to backend**
   - Check `REACT_APP_API_URL` environment variable
   - Verify backend is running on correct port
   - Check CORS configuration

### Getting Help

- Check the Docker logs: `docker-compose logs`
- Verify all services are running: `docker-compose ps`
- Check network connectivity between containers

## 📞 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Review the Docker logs
3. Ensure all prerequisites are met
4. Verify environment variables are set correctly

---

**Happy Task Managing!** 🎯
