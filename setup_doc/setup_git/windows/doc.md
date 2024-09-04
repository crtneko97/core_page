# Setting Up Git and Git Bash on Windows

This guide will help you install and configure Git and Git Bash on your Windows machine.

## Step 1: Download Git for Windows

1. Go to the [Git for Windows download page](https://gitforwindows.org/).
2. Click on the "Download" button. This will download the installer (`.exe` file) for Git.

## Step 2: Install Git

1. Locate the downloaded installer (`Git-2.x.x-64-bit.exe`) and double-click to run it.
2. Follow the installation steps:
    - **Select Destination Location**: Choose the directory where you want to install Git. The default location is usually fine.
    - **Select Components**: You can leave the default components selected. Ensure that "Git Bash Here" and "Git GUI Here" are checked.
    - **Select Start Menu Folder**: Choose the start menu folder or leave it as default.
    - **Adjusting your PATH environment**: Select "Git from the command line and also from 3rd-party software."
    - **Choose a SSH executable**: Use the OpenSSH that comes with Git.
    - **Choosing the HTTPS transport backend**: Use the OpenSSL library.
    - **Configuring the line ending conversions**: Choose "Checkout Windows-style, commit Unix-style line endings."
    - **Configuring the terminal emulator to use with Git Bash**: Use MinTTY (the default terminal of MSYS2).
    - **Choose the default behavior of `git pull`**: Select the default option.
    - **Choose a credential helper**: Choose "Git Credential Manager Core".
    - **Enable file system caching**: Enable this option for better performance.
    - **Enable symbolic links**: Enable if you need symbolic links.

3. Click "Install" to complete the installation process.

## Step 3: Verify Installation

1. Open Git Bash by searching for it in the Start menu or right-clicking on your desktop and selecting "Git Bash Here."
2. In Git Bash, type the following commands to verify the installation:
    ```sh
    git --version
    ```

    You should see the version number of Git installed.

## Step 4: Basic Configuration

Configure your Git user name and email, which will be associated with your commits.

1. Open Git Bash.
2. Set your user name:
    ```sh
    git config --global user.name "Your Name"
    ```

3. Set your email address:
    ```sh
    git config --global user.email "your.email@example.com"
    ```

4. Verify your configuration:
    ```sh
    git config --global --list
    ```

    You should see your user name and email listed.

## Step 5: Generate SSH Keys (Optional but Recommended)

1. Open Git Bash.
2. Generate a new SSH key pair:
    ```sh
    ssh-keygen -t rsa -b 4096 -C "your.email@example.com"
    ```

3. When prompted to "Enter a file in which to save the key," press Enter to accept the default location.
4. You can choose to set a passphrase or leave it empty.
5. Start the SSH agent:
    ```sh
    eval "$(ssh-agent -s)"
    ```

6. Add your SSH key to the SSH agent:
    ```sh
    ssh-add ~/.ssh/id_rsa
    ```

7. Copy the SSH key to your clipboard:
    ```sh
    clip < ~/.ssh/id_rsa.pub
    ```

8. Add the SSH key to your GitHub or GitLab account by pasting it into the SSH keys section of your account settings.

## Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [Git Bash Introduction](https://gitforwindows.org/)
- [GitHub SSH Key Setup](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)

---

Feel free to reach out if you have any questions or run into any issues during the setup process.

