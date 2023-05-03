# VSDS User-Management Database Project
  - A project by @holden-cormier and @prestonButton

# Instructions for running the project

## 1. Clone the repository

```bash
git clone https://github.com/holden-cormier/database-final
```

## 2. Set up database
 - *Note: I used MySQL Workbench for this project - I don't know if that makes a difference, but it worked when I ran that.*
 - The MySQL files are located in `database-final/DB/MySQL`
 - In MySQL workbench, create a connection and run `VSDS_SCHEMA.sql` to create the schema. Then run `VSDS_DATA.sql` to populate the database with data.
 - test the database by running `SELECT * FROM VSDS.gen_member;` in the query editor. You should see a table of members.
 - If this returns the table, you're good to go!

## 3. Set up the NodeJS Server

### **A**. In your terminal, navigate to the `database-final/API` directory

```bash
cd database-final/API
```
### **B**. Install the dependencies

```bash
npm install
```
### **C**. Set your environment variables
  - find the `.env.template` file in the `/API` directory. Rename it to simply `.env` (remove the `.template` from the end)
  - In the new `.env` file replace `<YOUR_USERNAME>` and `<YOUR_PASSWORD>` with the username and password of your MySQL connection.
  - This is important to allow your connection to the database

### **D**. Run the server

```bash
npm run dev
```
  - You should see the message `Server is running on port 3000` in your terminal. If not, something is wrong. 
  - *Note: if you changed the port number in the `.env` file it will use that port instead*

## 4. Set up the Application

### **A**. In a new terminal navigate to the `database-final/VSDS` directory

```bash
cd database-final/VSDS
```

### **B**. Install the dependencies

```bash
npm install
```

### **C**. Run the Application

```bash
npm run dev
```

- This should start the application on [localhost:5173](http://localhost:5173). A link will be displayed in the terminal - click it using `ctrl/cmd` + `click`

- ***Common Error***: *I used [Vite](https://v3.vitejs.dev/guide/) instead of `create-react-app` (Vite is a better, faster version of CRA). Unless you have vite installed on your computer, it will not build. You can install Vite using:

  ```bash
  npm install vite@latest
  ```
- Use the link above to reference the Vite docs, and feel free to reach out to me at my email with any questions.