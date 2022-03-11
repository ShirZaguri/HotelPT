import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

class EmailHandler:
    def __init__(self):
        self.email = os.getenv('EMAIL')
        self.password = os.getenv('PASSWORD')

    def send_email(self, send_to_email, subject, content):
        print(send_to_email)
        print()
        msg = MIMEMultipart()
        msg["From"] = self.email
        msg["To"] = send_to_email
        msg["Subject"] = subject

        msg.attach(MIMEText(content, 'plain'))

        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(self.email, self.password)
        text = msg.as_string()
        server.sendmail(self.email, send_to_email, text)
        server.quit()