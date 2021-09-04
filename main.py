from dotenv import load_dotenv
from email_handler import EmailHandler

load_dotenv()

email_handler = EmailHandler()
email_handler.send_email('zagurishir@gmail.com','asdasd','asdasd')