
import pandas as pd
from sklearn.preprocessing import StandardScaler

def load_data(file_path):
    data = pd.read_csv(file_path)
    return data

def preprocess_data(data):
    # Remove unnecessary columns
    data = data.drop(['column_to_drop1', 'column_to_drop2'], axis=1)

    # Handle missing values
    data = data.fillna(data.mean())

    # Standardize numerical columns
    scaler = StandardScaler()
    data[['numerical_column1', 'numerical_column2']] = scaler.fit_transform(data[['numerical_column1', 'numerical_column2']])

    return data

def get_train_test_data(data, test_size=0.2):
    # Split the data into training and testing sets
    train_data = data.sample(frac=1-test_size, random_state=42)
    test_data = data.drop(train_data.index)

    return train_data, test_data
