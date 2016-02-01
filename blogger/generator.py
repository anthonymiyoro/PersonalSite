from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return 'Hello World!'

@app.route('/blog/post')
def post():
    # renders to the post content_variable in the post.html
    return render_template('post.html', post_content='Hello World(But for a template!)')

if __name__ == '__main__':
    app.run(port=8000)
