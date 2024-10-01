const data = {
  'git init':
    'Initializes a new Git repository in the current directory. Creates a .git folder to track changes.',
  'git clone [url]': 'Clones a remote repository from the given URL to your local machine.',
  'git status':
    'Displays the status of the working directory and staging area. Shows changes that are staged, unstaged, or untracked.',
  'git add [file]':
    'Adds the specified file to the staging area, preparing it for the next commit.',
  'git commit -m "message"': 'Records changes in the repository with a descriptive commit message.',
  'git push': 'Uploads local repository content to a remote repository (e.g., GitHub).',
  'git pull': 'Fetches and merges changes from the remote repository to your local repository.',
  'git fetch':
    'Retrieves the latest changes from the remote repository but does not merge them into the local branch.',
  'git merge [branch]':
    'Merges the specified branch into the current branch, combining the history of both branches.',
  'git checkout [branch]':
    'Switches to the specified branch or restores working files to a previous commit.',
  'git branch': 'Lists all local branches in the repository.',
  'git branch [branch-name]': 'Creates a new branch with the given name.',
  'git log':
    'Displays the commit history of the current branch. Shows commit hashes, messages, and authors.',
  'git diff':
    'Shows the differences between working directory changes and the last commit or between branches.',
  'git stash':
    'Temporarily saves changes that are not yet ready to be committed, allowing you to work on something else.',
  'git rebase [branch]':
    'Applies commits from one branch onto another, changing the base commit of your current branch.',
  'git remote -v':
    'Displays the URLs of the remote repositories you have configured for pushing and pulling.',
  'git reset [file]':
    'Removes a file from the staging area, but keeps the changes in the working directory.',
  'git rm [file]':
    'Removes a file from the working directory and stages its deletion for the next commit.',
  'git revert [commit-hash]':
    'Reverts the changes of a specific commit by creating a new commit that undoes them.',
  'git tag [tag-name]':
    'Creates a tag to mark a specific commit, typically used to mark release versions.',
};
export default data;
