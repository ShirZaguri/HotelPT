import os
import json
import pandas as pd

DATA_PATH='./data/hotels-prices.xlsx'
class DataHandler:
    def __init__(self):
        self.prices_cache = self.get_hotels_data()

    def get_hotels_data_frame(self):
        global DATA_PATH
        return pd.read_excel(DATA_PATH)

    def get_hotels_data(self):
        return self.get_hotels_data_frame().to_dict(orient='records')

    def extract_hotel(self, condition):
        for hotel in self.prices_cache:
            if hotel[condition['column']] == condition['value']:
                return hotel
    
    def edit_hotel_price(self, condition, new_values):
        hotels_data_frame = self.get_hotels_data_frame()
        
        for key in new_values:
            hotels_data_frame.loc[hotels_data_frame[condition['column']] == condition['value'], key] = new_values[key]
        hotels_data_frame.to_excel(DATA_PATH)

    