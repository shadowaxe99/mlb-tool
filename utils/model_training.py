
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.optimizers import Adam

def train_model(X_train, y_train, X_val, y_val, model_type):
    if model_type == 'classification':
        model = Sequential([
            Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
            Dropout(0.2),
            Dense(64, activation='relu'),
            Dropout(0.2),
            Dense(1, activation='sigmoid')
        ])
        model.compile(optimizer=Adam(), loss='binary_crossentropy', metrics=['accuracy'])
    elif model_type == 'regression':
        model = Sequential([
            Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
            Dropout(0.2),
            Dense(64, activation='relu'),
            Dropout(0.2),
            Dense(1)
        ])
        model.compile(optimizer=Adam(), loss='mean_squared_error', metrics=['mse'])
    else:
        raise ValueError("Invalid model type. Expected 'classification' or 'regression'.")

    history = model.fit(X_train, y_train, validation_data=(X_val, y_val), epochs=100, batch_size=32)

    return model, history
