
from flask import Flask, request, jsonify
from flask_cors import CORS
import models.player_performance_model as pp_model
import models.outcome_prediction_model as op_model
import models.team_composition_model as tc_model
import models.game_strategy_model as gs_model

app = Flask(__name__)
CORS(app)

@app.route('/api/player_performance', methods=['POST'])
def player_performance():
    data = request.get_json()
    result = pp_model.predict(data)
    return jsonify(result)

@app.route('/api/outcome_prediction', methods=['POST'])
def outcome_prediction():
    data = request.get_json()
    result = op_model.predict(data)
    return jsonify(result)

@app.route('/api/team_composition', methods=['POST'])
def team_composition():
    data = request.get_json()
    result = tc_model.recommend(data)
    return jsonify(result)

@app.route('/api/game_strategy', methods=['POST'])
def game_strategy():
    data = request.get_json()
    result = gs_model.recommend(data)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
