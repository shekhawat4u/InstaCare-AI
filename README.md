# InstaCare AI

Welcome to **InstaCare AI**, your go-to platform for coding projects, blogs, and resources that elevate your development skills. Whether you're diving into Data Structures and Algorithms (DSA), working on web or mobile development, or exploring popular coding projects, InstaCare AI offers a community-driven space for both beginners and advanced coders.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Teacher Mode**: Upload, edit, and manage code snippets and projects.
- **Student Mode**: View, copy, and learn from uploaded codes and projects.
- **Popular Codes**: Discover trending codes, tutorials, and solutions.
- **Collaboration Tools**: Smart automation, top-notch security, and seamless integration for coding teams.
- **User Profiles**: View and follow authors based on their code contributions and post counts.
- **Advanced Search and Filters**: Find posts, authors, and projects using intuitive search and category filters.
- **Responsive Design**: Mobile-first and optimized for all screen sizes.
- **Banner Video**: Engaging landing page with dynamic banner video and animations.
- **Pricing Feature**: Options for accessing popular premium codes and projects.
- **FAQ and About Us**: Find more information about InstaCare AI and how to get started.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shekhawat4u/cc-client.git
   cd cc-client
   ```

2. Install dependencies for the client and server:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Create an `.env` file in the server directory with the following variables:
   ```bash
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email_for_otp
   EMAIL_PASSWORD=your_email_password_for_otp
   ```

4. Run the development environment:
   ```bash
   # In client directory
   npm start

   # In server directory
   npm run dev
   ```

The client will run at `localhost:3000` and the server at `localhost:5000`.

## Usage

1. **Teacher Mode**: Upload your projects and share them with the community.
2. **Student Mode**: Browse through various projects and use them as reference or inspiration for your own work.
3. **Create Posts**: Write blogs, tutorials, and share knowledge on specific coding topics.
4. **Collaborate**: Use the integrated collaboration tools to work with teams on projects, with features such as real-time editing and commenting.
5. **Browse Projects**: Explore trending projects and popular code snippets.
6. **Search and Filter**: Easily find what you're looking for by searching posts or filtering by categories.

## Project Structure

```
code-caffeine/
├── client/              # React frontend
│   ├── public/
│   └── src/
│       ├── components/  # Reusable UI components
│       ├── pages/       # Application pages
│       ├── styles/      # Tailwind CSS and custom styles
│       └── utils/       # Utility functions
├── server/              # Node.js backend
│   ├── controllers/     # Request handlers
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   └── middleware/      # Authentication and other middlewares
└── README.md            # This file
```

## Contributing

We welcome contributions to InstaCare AI! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add feature XYZ'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

Please make sure your code adheres to the project's coding standards.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions, feedback, or support, please contact:

- Harshvardhan Singh Shekhawat - [Instagram](https://instagram.com/_shekhawat4u_)
- Sumit Singh Rathore - [Instagram](https://instagram.com/sumit_banns)

---

