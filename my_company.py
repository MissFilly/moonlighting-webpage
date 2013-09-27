from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/apps')
def apps():
    return render_template('apps.html')


@app.route('/jobs')
def jobs():
    return render_template('jobs.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0')
