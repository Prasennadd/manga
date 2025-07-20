from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from React (localhost:3000)

@app.route('/')
def get_anime():
    arr = ['op', 'naruto', 'bluelock', 'aot','black cover','your name']
    return jsonify(arr)

if __name__ == '__main__':
    app.run(debug=True)
