# Setting Up Next.js with Node.js and npm on Windows

## Prerequisites

Make sure you have the following installed on your Windows machine:

1. **Node.js** (which includes npm)
2. **Git** (optional, but recommended for version control)

### Download and Install Node.js

1. Go to the [Node.js download page](https://nodejs.org/en/download/).
2. Download the Windows installer (`.msi`).
3. Run the installer. Follow the prompts in the installer.
4. To verify that Node.js and npm were installed correctly, open the Command Prompt (cmd) and run the following commands:
    ```sh
    node -v
    npm -v
    ```
   You should see the version numbers of Node.js and npm.

### Install Git (Optional)

1. Go to the [Git download page](https://git-scm.com/downloads).
2. Download the Windows installer.
3. Run the installer and follow the setup instructions.
4. To verify the installation, open the Command Prompt (cmd) and run:
    ```sh
    git --version
    ```

## Setting Up a New Next.js Project

1. Open the Command Prompt (cmd).
2. Navigate to the directory where you want to create your Next.js project:
    ```sh
    cd path\to\your\directory
    ```
3. Create a new Next.js project using the following command:
    ```sh
    npx create-next-app@latest
    ```
4. You will be prompted to name your project. Enter a name and press `Enter`.

## Running Your Next.js Project

1. Navigate into your project directory:
    ```sh
    cd your-project-name
    ```
2. Start the development server:
    ```sh
    npm run dev
    ```
3. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see your Next.js application running.

## Additional Tips

- **Visual Studio Code**: It's recommended to use [Visual Studio Code](https://code.visualstudio.com/) for editing your Next.js project. It provides great support for JavaScript and Next.js.
- **Environment Variables**: If you need to set environment variables, you can create a `.env.local` file in your project root and add your variables there.

## Troubleshooting

### Common Issues

- **Command not found**: Ensure that Node.js, npm, and Git are added to your PATH. You might need to restart your Command Prompt or even your computer after installation.
- **Permission errors**: Run your Command Prompt as an Administrator.

## Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [npm Documentation](https://docs.npmjs.com/)
- [Git Documentation](https://git-scm.com/doc)

---

Feel free to reach out if you run into any issues or have any questions!

