from flask import Flask, render_template, make_response, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', short_url='')
@app.route('/shorturl/api/v1.0/urls', methods=['POST'])
def get_shorted():
    return make_response(jsonify({'result': 'EXAMPLE'}),201)
