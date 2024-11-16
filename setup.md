After cloning the repository:

Commands to get initial react app to run:
* Npm install react-scripts –save
* Npm update -g
* Npm start

Do this on command prompt:
* Cd into DSSCWebsite 
* Run this: “venv\Scripts\activate.bat”

Setting up venv
* Python -m venv venv

Setup for flask server
* Python app.py input
* pip install flask psycopg2-binary
* pip install flask python-dotenv
* Create .env file (fill out DB_USER on your own; change the quotes):
  * DB_USER=”your_username”
  * DB_PASSWORD=”Dssc123
  * DB_HOST=”10.173.178.12”
  * DB_PORT=”5432”
  * DB_NAME=”postgres”
*Run “python app.py input” to test 
