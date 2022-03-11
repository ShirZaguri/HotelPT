from dotenv import load_dotenv
from email_handler import EmailHandler
from data_handler import DataHandler

load_dotenv()

def update_hotel_price(condition, new_price):
    new_values = {}
    new_values['current-price'] = new_price
    new_values['previous-price'] = data_handel.extract_hotel(condition)['current-price']
    data_handel.edit_hotel_price(condition, new_values)
    
# email_handler = EmailHandler()
# email_handler.send_email('zagurishir@gmail.com','asdasd','asdasd')
condition = {'column': 'name', 'value': 'hotel daniel'}
data_handel = DataHandler()
update_hotel_price(condition, 1000)
